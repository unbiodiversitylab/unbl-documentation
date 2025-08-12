bash#!/bin/bash
# Setup script for UNBL documentation

echo "Setting up UNBL documentation environment..."

# Check if conda/mamba is available
if command -v mamba &> /dev/null; then
    CONDA_CMD="mamba"
elif command -v conda &> /dev/null; then
    CONDA_CMD="conda"
else
    echo "Error: Neither conda nor mamba found. Please install Miniconda or Mambaforge."
    exit 1
fi

echo "Using $CONDA_CMD..."

# Create environment
$CONDA_CMD env create -f environment.yaml

# Activate environment
echo "Environment created! Activate with:"
echo "$CONDA_CMD activate unbl-docs"