# Compute the best answers for the ELSA planning exercise with prioritizr,
# the package the ELSA tool uses, and store them in docs/elsa/exercise/grid.json.
#
#   python elsa-planning-exercise/make_grid.py     # data first
#   Rscript elsa-planning-exercise/solve.R
#
# Needs: prioritizr (>= 8), highs, terra, jsonlite. Solved to optimality
# (gap = 0); the grid is small enough. The real ELSA tool uses Gurobi with a
# 5% gap (unbl-elsa/ELSA/R/define_prioritization_problem.R).
#
# Tab 1 ("lowest cost"): add_min_set_objective, one run per BPF option.
# Tab 2 ("ELSA-style"): add_max_utility_objective with zones, per-action area
# limits as linear constraints, protected-area lock-in, feature weights and
# boundary penalties, set up the same way as unbl-elsa. One run per BPF option,
# with and without lock-in, at the default limits and weights.

suppressPackageStartupMessages({
  library(prioritizr)
  library(terra)
  library(jsonlite)
})

args <- commandArgs(trailingOnly = FALSE)
here <- dirname(normalizePath(sub("^--file=", "", args[grep("^--file=", args)])))
path <- file.path(here, "..", "docs", "elsa", "exercise", "grid.json")
d <- fromJSON(path, simplifyVector = FALSE)

nr <- d$rows; nc <- d$cols; n <- nr * nc; edge <- d$edgeLength
# Cells numbered 0..n-1 row by row from the top left: terra's order.
grid <- function(v) {
  rast(nrows = nr, ncols = nc, xmin = 0, xmax = nc * edge, ymin = 0, ymax = nr * edge,
       vals = as.numeric(unlist(v)))
}
neighbours <- function(i) {  # i is 0-based; returns 0-based neighbours
  r <- i %/% nc; c <- i %% nc
  out <- c()
  if (r > 0) out <- c(out, i - nc)
  if (r < nr - 1) out <- c(out, i + nc)
  if (c > 0) out <- c(out, i - 1)
  if (c < nc - 1) out <- c(out, i + 1)
  out
}
# Exposed edges of a set of cells (grid border included), times edge length.
boundary_of <- function(cells) {
  if (length(cells) == 0) return(0)
  sum(sapply(cells, function(i) 4 - sum(neighbours(i) %in% cells))) * edge
}
solve_quiet <- function(p) {
  s <- solve(p |> add_highs_solver(gap = 0, verbose = FALSE), force = TRUE)
  s
}

# --------------------------------------------------------------------------
# Tab 1: lowest cost that meets every target
# --------------------------------------------------------------------------
m <- d$mincost
cost <- grid(m$cost)
feats <- rast(lapply(m$features, function(f) grid(m$amounts[[f]])))
names(feats) <- unlist(m$features)
targets <- unlist(m$targets)[unlist(m$features)]

m$solutions <- list()
for (bpf in unlist(m$bpfOptions)) {
  p <- problem(cost, feats) |>
    add_min_set_objective() |>
    add_absolute_targets(as.numeric(targets)) |>
    add_binary_decisions()
  if (bpf > 0) p <- p |> add_boundary_penalties(penalty = bpf, edge_factor = 1)
  s <- solve_quiet(p)
  units <- which(values(s)[, 1] == 1) - 1
  c_tot <- sum(unlist(m$cost)[units + 1])
  b_len <- boundary_of(units)
  m$solutions[[as.character(bpf)]] <- list(
    units = as.list(units),
    cost = c_tot,
    boundary = b_len,
    score = c_tot + bpf * b_len,
    method = sprintf("prioritizr %s, add_min_set_objective, HiGHS, gap 0",
                     as.character(packageVersion("prioritizr")))
  )
  cat(sprintf("min-cost  BPF %-3s cells %2d  cost %5d  boundary %4d  score %7.1f\n",
              bpf, length(units), c_tot, b_len, c_tot + bpf * b_len))
}
d$mincost <- m

# --------------------------------------------------------------------------
# Tab 2: most weighted value within each action's area limit (ELSA-style)
# --------------------------------------------------------------------------
e <- d$elsa
acts <- unlist(e$actions); fs <- unlist(e$features)
land <- unlist(e$landClass)
pa <- unlist(e$protectedArea)
eligible <- sapply(acts, function(a) land %in% unlist(e$eligible[[a]]))  # n x actions

# Cost 1 where an action is allowed, NA where it is not (prioritizr then
# never allocates that action there).
costs <- rast(lapply(acts, function(a) grid(ifelse(eligible[, a], 1, NA))))
names(costs) <- acts
zone_feats <- lapply(acts, function(a) {
  r <- rast(lapply(fs, function(f) grid(unlist(e$values[[f]]) * e$contribution[[f]][[a]])))
  names(r) <- fs
  r
})
z <- do.call(zones, c(zone_feats, list(zone_names = acts, feature_names = fs)))

value_of <- function(alloc, weights) {
  tot <- 0
  for (f in fs) for (i in seq_len(n)) {
    a <- alloc[i]
    if (a != "") tot <- tot + weights[[f]] * e$values[[f]][[i]] * e$contribution[[f]][[a]]
  }
  tot
}

e$solutions <- list()
lim <- e$defaults$limits; w <- e$defaults$weights
for (lock in c(TRUE, FALSE)) for (bpf in unlist(e$bpfOptions)) {
  p <- problem(costs, z) |>
    add_max_utility_objective(budget = sum(unlist(lim))) |>
    add_binary_decisions() |>
    add_feature_weights(matrix(rep(unlist(w)[fs], length(acts)), ncol = length(acts)))
  for (a in acts) {
    lc <- rast(lapply(acts, function(b) grid(rep(if (a == b) 1 else 0, n))))
    p <- p |> add_linear_constraints(threshold = lim[[a]], sense = "<=", data = lc)
  }
  if (lock) {
    li <- rast(lapply(acts, function(a) grid(as.numeric(a == "protect" & (seq_len(n) - 1) %in% pa))))
    p <- p |> add_locked_in_constraints(li > 0.5)
  }
  if (bpf > 0) p <- p |> add_boundary_penalties(penalty = bpf, zones = diag(length(acts)),
                                                edge_factor = rep(1, length(acts)))
  s <- solve_quiet(p)
  v <- values(s)
  alloc <- rep("", n)
  for (k in seq_along(acts)) alloc[!is.na(v[, k]) & v[, k] == 1] <- acts[k]
  val <- value_of(alloc, w)
  b_len <- sum(sapply(acts, function(a) boundary_of(which(alloc == a) - 1)))
  e$solutions[[length(e$solutions) + 1]] <- list(
    settings = list(lockIn = lock, bpf = bpf),
    allocation = as.list(alloc),
    value = round(val, 2),
    boundary = b_len,
    score = round(val - bpf * b_len, 2),
    method = sprintf("prioritizr %s, add_max_utility_objective with zones, HiGHS, gap 0",
                     as.character(packageVersion("prioritizr")))
  )
  cat(sprintf("elsa  lock-in %-5s BPF %-3s  P %2d R %2d M %2d  value %7.1f  boundary %4d  score %7.1f\n",
              lock, bpf, sum(alloc == "protect"), sum(alloc == "restore"), sum(alloc == "manage"),
              val, b_len, val - bpf * b_len))
}
d$elsa <- e

writeLines(toJSON(d, auto_unbox = TRUE, digits = NA), path)
cat("wrote", normalizePath(path), "\n")
