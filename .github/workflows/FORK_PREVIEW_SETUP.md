# Fork Preview Setup Guide

This workflow automatically builds and deploys preview versions of the site when you push to branches in your fork. This allows you to review your changes before creating a PR to the main project.

## How it works

1. Fork the `github/training-kit` repository
2. Push changes to any branch (except `main` or `gh-pages`)
3. The workflow automatically builds the Jekyll site and deploys to your fork's GitHub Pages
4. Preview is available at: `https://your-username.github.io/training-kit/preview/branch-name/`
5. Review your changes before creating a PR to the main project

## Setup Required (One-time setup)

### 1. Enable GitHub Pages in your fork

After you push your first branch, the workflow will create a `gh-pages` branch. Then:

- Go to your fork's **Settings** → **Pages**
- Under "Source", select **Deploy from a branch**
- Select **gh-pages** branch and **/ (root)** folder
- Click **Save**
- GitHub Pages will be available at: `https://your-username.github.io/training-kit/`

**That's it!** The workflow uses `GITHUB_TOKEN` which is automatically available in GitHub Actions - no PAT needed.

## Preview URL Format

Previews are organized by branch name:
```
https://{your-username}.github.io/training-kit/preview/{branch-name}/
```

For example:
- Branch `add-spanish-translation` → `https://johndoe.github.io/training-kit/preview/add-spanish-translation/`
- Branch `fix/typo` → `https://johndoe.github.io/training-kit/preview/fix-typo/` (slashes replaced with dashes)

## Workflow

### For Contributors (Translation/Content Editors)

1. **Fork** the repository
2. **Enable GitHub Pages** (one-time setup, see above)
3. **Create a branch** with your changes
4. **Push** to your fork
5. **Check Actions tab** for the deployment status
6. **Review** your preview at the URL shown in the workflow output
7. **Create PR** to the main project once you're satisfied

### Checking the Preview URL

After pushing, you can find the preview URL in two places:

1. **GitHub Actions output:**
   - Go to your fork's **Actions** tab
   - Click on the latest workflow run
   - Expand the "Display preview URL" step
   - Copy the preview URL

2. **Direct URL pattern:**
   - Just use: `https://your-username.github.io/training-kit/preview/your-branch-name/`

## Benefits

- ✅ **No approval required** - Runs automatically in your fork
- ✅ **No PAT needed** - Uses built-in `GITHUB_TOKEN`
- ✅ **Preview before PR** - Review changes before submitting to main project
- ✅ **Multiple previews** - Each branch gets its own preview URL
- ✅ **Easy for translators** - Non-technical contributors can see their work live

## Managing Previews

### Updating a Preview
Just push new commits to the same branch - the preview updates automatically.

### Cleaning Up Old Previews
To remove old preview directories:
1. Go to your fork
2. Switch to the `gh-pages` branch
3. Delete the `preview/branch-name/` directory
4. Commit and push

Or use git:
```bash
git checkout gh-pages
git rm -rf preview/old-branch-name
git commit -m "Remove old preview"
git push
```

## Differences from Main Project

- **Main project workflow:** Only deploys to production on push to `main`
- **Fork preview workflow:** Deploys every branch to a preview URL in your fork

## Security

- Runs only in forks (not in the main `github/training-kit` repository)
- Uses `GITHUB_TOKEN` with limited permissions
- No secrets or PAT required
- Each contributor controls their own fork and previews

## Troubleshooting

### Preview not showing up?
1. Check if GitHub Pages is enabled in Settings → Pages
2. Wait a few minutes - first deployment can take 5-10 minutes
3. Check the Actions tab for any errors

### 404 on preview URL?
1. Make sure the branch name in the URL matches (slashes become dashes)
2. Check if the workflow completed successfully
3. Verify GitHub Pages is set to deploy from `gh-pages` branch

### Workflow not running?
1. Make sure you pushed to a branch (not `main` or `gh-pages`)
2. Check that you're working in a fork, not the main repository
3. Check the Actions tab is enabled in your fork settings
