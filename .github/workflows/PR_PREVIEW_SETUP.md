# PR Preview Setup Guide

This workflow automatically builds and deploys preview versions of the site for pull requests coming from forks. This is especially useful for translation reviews and content editing.

## How it works

1. When a PR is opened from a fork, the workflow builds the Jekyll site
2. The built site is deployed to the fork's GitHub Pages under `pr-{number}/`
3. A comment is posted on the PR with the preview URL
4. The preview updates automatically when new commits are pushed

## Setup Required (For Fork Owners)

To enable preview deployments from your fork, you need to:

### 1. Create a Fine-Grained Personal Access Token
- Go to GitHub Settings → Developer settings → Personal access tokens → **Fine-grained tokens**
- Click "Generate new token"
- Configure the token:
  - **Token name:** `PR Preview Deploy`
  - **Expiration:** Choose your preferred expiration (90 days, 1 year, custom, or no expiration)
  - **Resource owner:** Select yourself (the fork owner)
  - **Repository access:** Select "Only select repositories"
    - Choose your fork repository (e.g., `your-username/training-kit`)
  - **Permissions → Repository permissions:**
    - ✅ **Contents:** Read and write (required to push to gh-pages branch)
    - ✅ **Pages:** Read and write (required to manage GitHub Pages)
    - ✅ **Metadata:** Read-only (automatically included)
- Click "Generate token"
- **Copy the token immediately** (you won't see it again)

### 2. Add the token to your fork's secrets
- Go to your fork's Settings → Secrets and variables → Actions
- Click "New repository secret"
- Name: `PREVIEW_DEPLOY_TOKEN`
- Value: Paste the fine-grained personal access token you created
- Click "Add secret"

### 3. Enable GitHub Pages in your fork (after first deployment)
After the first PR preview is deployed, the gh-pages branch will be created automatically. Then:
- Go to your fork's Settings → Pages
- Under "Source", select "Deploy from a branch"
- Select **gh-pages** branch and **/ (root)** folder
- Click Save
- GitHub Pages will be available at: `https://your-username.github.io/training-kit/`

## Preview URL Format

Previews will be available at:
```
https://{fork-owner}.github.io/{repo-name}/pr-{number}/
```

For example:
```
https://johndoe.github.io/training-kit/pr-42/
```

## Security

- Only runs for PRs from forks (not internal PRs)
- Uses `pull_request_target` to run in the context of the base repository
- Checks out the specific PR SHA to build exactly what was submitted
- Uses fine-grained PAT with minimal required permissions (Contents and Pages only)
- Each fork owner controls their own credentials and deployment

## Notes

- The gh-pages branch is created automatically on first deployment
- The first deployment may take a few minutes for GitHub Pages to become available
- Previews persist until manually deleted from the gh-pages branch
- Each PR gets its own isolated preview directory
- You can clean up old previews by deleting directories from the gh-pages branch
