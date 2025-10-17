# Custom Domain Setup - docs.unbiodiversitylab.org

This guide explains how to configure your documentation to use the custom domain `docs.unbiodiversitylab.org` instead of the default GitHub Pages URL.

## 📋 Prerequisites

- Access to DNS settings for unbiodiversitylab.org
- Repository with GitHub Pages already working
- Domain verification ability (you'll receive an email)

## 🔧 Step-by-Step Setup

### Step 1: Add CNAME File to Repository

Create a file that tells GitHub Pages which domain to expect:

```bash
echo "docs.unbiodiversitylab.org" > docs/CNAME
```

Commit and push:
```bash
git add docs/CNAME
git commit -m "Add custom domain CNAME"
git push origin main
```

### Step 2: Update mkdocs.yml

Update the site URL to your custom domain:

```yaml
site_url: https://docs.unbiodiversitylab.org
```

Find this line in `mkdocs.yml` (line 4) and change from:
```yaml
site_url: https://undp-unbl.github.io/elsa-documentation/
```

To:
```yaml
site_url: https://docs.unbiodiversitylab.org
```

Commit and push:
```bash
git add mkdocs.yml
git commit -m "Update site URL to custom domain"
git push origin main
```

### Step 3: Configure DNS

At your DNS provider (wherever unbiodiversitylab.org is hosted), add these records:

**Option A: CNAME Record (Recommended)**
```
Type:  CNAME
Name:  docs
Value: undp-unbl.github.io
TTL:   3600 (or default)
```

**Option B: A Records (Alternative - for apex domains)**
If you need to use A records instead, point to these GitHub IPs:
```
Type:  A
Name:  docs
Value: 185.199.108.153
TTL:   3600

Type:  A
Name:  docs
Value: 185.199.109.153
TTL:   3600

Type:  A
Name:  docs
Value: 185.199.110.153
TTL:   3600

Type:  A
Name:  docs
Value: 185.199.111.153
TTL:   3600
```

**Also add AAAA records for IPv6 (optional but recommended):**
```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

### Step 4: Configure GitHub Pages

1. Go to repository settings: https://github.com/UNDP-UNBL/elsa-documentation/settings/pages

2. Under **Custom domain**, enter:
   ```
   docs.unbiodiversitylab.org
   ```

3. Click **Save**

4. Wait for DNS check (may take a few minutes to a few hours)

5. Once DNS check passes, enable **Enforce HTTPS**
   - This may take 5-10 minutes to provision the SSL certificate
   - ✅ Once enabled, your site will be secure (https://)

### Step 5: Verify

After DNS propagates (typically 5-30 minutes, can be up to 24 hours):

1. Visit: https://docs.unbiodiversitylab.org
2. Verify the site loads correctly
3. Check that HTTPS works (lock icon in browser)
4. Test language switching
5. Verify all images and links work

## 🌐 Final URLs

Once configured, your documentation will be available at:

- **English**: https://docs.unbiodiversitylab.org/
- **Spanish**: https://docs.unbiodiversitylab.org/es/
- **French**: https://docs.unbiodiversitylab.org/fr/
- **Portuguese**: https://docs.unbiodiversitylab.org/pt/
- **Russian**: https://docs.unbiodiversitylab.org/ru/

The old GitHub Pages URL will automatically redirect to your custom domain.

## ⏱️ Timeline

| Step | Time Required |
|------|---------------|
| Add CNAME file | Immediate |
| Update mkdocs.yml | Immediate |
| Configure DNS | 5 minutes |
| DNS propagation | 5-30 minutes (up to 24 hours) |
| GitHub DNS check | 5-60 minutes |
| SSL certificate | 5-10 minutes after DNS check |
| **Total** | **~30-60 minutes** (after DNS propagates) |

## 🔍 Checking DNS Propagation

Use these tools to check if DNS has propagated:

```bash
# Command line
nslookup docs.unbiodiversitylab.org
dig docs.unbiodiversitylab.org

# Expected result
# Should show: undp-unbl.github.io (CNAME)
# Or GitHub IPs (A records)
```

**Online tools:**
- https://www.whatsmydns.net/
- https://dnschecker.org/

Enter `docs.unbiodiversitylab.org` and check propagation worldwide.

## 🐛 Troubleshooting

### DNS Check Fails in GitHub

**Problem:** GitHub shows "DNS check unsuccessful"

**Solutions:**
1. Verify DNS records are correct
2. Wait longer (DNS can take up to 24 hours)
3. Try removing and re-adding the custom domain
4. Check for conflicting DNS records
5. Verify you have correct permissions in GitHub repo

### Site Shows 404

**Problem:** Domain loads but shows 404 error

**Solutions:**
1. Verify CNAME file is in `docs/` directory
2. Check the CNAME file contains only the domain (no https://)
3. Rebuild by pushing a new commit
4. Wait a few minutes for GitHub to update

### HTTPS Not Working

**Problem:** Certificate error or insecure connection

**Solutions:**
1. Wait - certificate provisioning takes 5-10 minutes
2. Verify "Enforce HTTPS" is enabled in GitHub settings
3. Try accessing with https:// explicitly
4. Clear browser cache
5. Wait up to 24 hours for certificate to fully propagate

### Old URL Still Works

This is normal! The GitHub Pages URL (undp-unbl.github.io/elsa-documentation/) will still work and redirect to your custom domain.

### CSS/Images Not Loading

**Problem:** Site loads but styling/images broken

**Solutions:**
1. Hard refresh browser (Ctrl+Shift+R)
2. Check `site_url` in mkdocs.yml matches your domain
3. Rebuild: `git commit --allow-empty -m "Rebuild" && git push`
4. Clear browser cache

## 🔄 Updating Later

If you need to change domains later:

1. Update `docs/CNAME` file
2. Update `site_url` in `mkdocs.yml`
3. Update DNS records
4. Update custom domain in GitHub settings
5. Wait for DNS propagation

## 📧 Domain Verification

GitHub may require domain verification:

1. You'll receive an email at your domain's admin contact
2. Or GitHub will provide a TXT record to add to DNS
3. Follow the verification instructions
4. Once verified, custom domain will work

## ✅ Pre-Launch Checklist

Before configuring the custom domain:

- [ ] CNAME file created in `docs/` directory
- [ ] mkdocs.yml updated with new site_url
- [ ] Changes committed and pushed to main
- [ ] DNS records configured
- [ ] Access to GitHub repository settings
- [ ] Access to DNS management for unbiodiversitylab.org

## 🚀 Launch Checklist

After configuring:

- [ ] DNS propagation verified (nslookup/dig)
- [ ] Custom domain added in GitHub settings
- [ ] DNS check passes in GitHub
- [ ] HTTPS enabled and working
- [ ] All pages load correctly
- [ ] Images and CSS working
- [ ] Language switching works
- [ ] Internal links work
- [ ] Search functionality works

## 📞 Support

If you encounter issues:

1. **GitHub Pages**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
2. **DNS Help**: Contact your DNS provider
3. **GitHub Support**: https://support.github.com/

## 💡 Tips

- **Do it during low traffic**: Configure during off-hours
- **Test first**: Use a test subdomain first if possible
- **Monitor**: Check analytics after switch
- **Communicate**: Notify users of the new URL
- **Keep old links**: Old GitHub Pages URL will redirect automatically

## 🎉 Benefits of Custom Domain

- Professional URL
- Better branding
- Easier to remember
- Better SEO
- Custom SSL certificate
- Can move hosting later if needed

---

**When you're ready**, just follow Steps 1-5 above. The entire process typically takes 30-60 minutes once DNS propagates.
