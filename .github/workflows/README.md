# Preview Deployment Workflows

This repository has two complementary preview workflows for a gradual review process:

## 1. Fork Preview (Automated - No Approval Needed)
**File:** `fork-preview.yml`

Runs automatically in contributor forks when pushing to branches.

### Purpose
- Contributors can preview their changes before creating a PR
- Translation teams can review content without waiting for maintainer approval
- No setup required beyond enabling GitHub Pages

### When it runs
- On push to any branch in a fork (except `main` and `gh-pages`)
- Automatically, no approval needed

### Preview URL
```
https://{fork-owner}.github.io/training-kit/preview/{branch-name}/
```

### Setup
See [FORK_PREVIEW_SETUP.md](./FORK_PREVIEW_SETUP.md)

---

## 2. PR Preview (Maintainer Approved)
**File:** `pr-preview.yml`

Runs when a PR is created from a fork to the main project.

### Purpose
- Maintainers can review the exact PR changes before merging
- Provides a canonical preview URL for discussion in the PR
- Allows fine-grained review with maintainer oversight

### When it runs
- On pull request events (opened, synchronize, reopened)
- Requires maintainer approval for first-time contributors
- Only for PRs from forks (not internal PRs)

### Preview URL
```
https://{fork-owner}.github.io/training-kit/pr-{number}/
```

### Setup
See [PR_PREVIEW_SETUP.md](./PR_PREVIEW_SETUP.md)

---

## Gradual Review Process

### Step 1: Development & Self-Review (Fork Preview)
1. **Contributor:** Fork the repository
2. **Contributor:** Create a branch and push changes
3. **Contributor:** Review at `https://{fork-owner}.github.io/training-kit/preview/{branch}/`
4. **Contributor:** Iterate on changes, preview updates automatically

### Step 2: Initial Discussion (Fork Preview)
1. **Contributor:** Share fork preview URL with translation team/reviewers
2. **Team:** Discuss and suggest changes using the fork preview
3. **Contributor:** Make adjustments based on feedback
4. **Team:** Approve when ready for formal PR

### Step 3: PR Submission & Maintainer Review (PR Preview)
1. **Contributor:** Create PR to main project
2. **Maintainer:** Approve workflow run (first-time contributors only)
3. **Workflow:** Deploys to `https://{fork-owner}.github.io/training-kit/pr-{number}/`
4. **Maintainer & Team:** Final review using PR preview URL
5. **Maintainer:** Approve and merge when ready

---

## Comparison

| Feature | Fork Preview | PR Preview |
|---------|-------------|------------|
| **Trigger** | Push to fork branch | PR from fork |
| **Approval needed** | No | Yes (first-time) |
| **URL pattern** | `/preview/{branch}/` | `/pr-{number}/` |
| **Best for** | Self-review, team discussion | Maintainer review |
| **Setup** | Enable Pages only | Enable Pages + PAT |
| **When to use** | During development | After PR created |

---

## Benefits of This Two-Stage Approach

### For Contributors
- ✅ Instant feedback without waiting for approval
- ✅ Iterate quickly on changes
- ✅ Share previews with translation teams
- ✅ Submit PR only when ready

### For Maintainers
- ✅ Review already-vetted content
- ✅ Control workflow execution for security
- ✅ Canonical PR preview URL for discussion
- ✅ Less time spent on back-and-forth

### For Translation Teams
- ✅ Review translations in context before PR
- ✅ No technical knowledge needed
- ✅ Faster approval process
- ✅ Better quality submissions

---

## Which Setup Do I Need?

### I'm a contributor/translator
→ **Fork Preview only**
- One-time: Enable GitHub Pages in your fork
- See [FORK_PREVIEW_SETUP.md](./FORK_PREVIEW_SETUP.md)

### I want PR previews too (optional)
→ **Fork Preview + PR Preview**
- Additionally: Create fine-grained PAT and add to secrets
- See [PR_PREVIEW_SETUP.md](./PR_PREVIEW_SETUP.md)

### I'm a maintainer
→ **No setup needed**
- Approve workflow runs as needed
- Review using PR preview URLs

---

## Notes

- Both workflows can coexist - use what fits your workflow
- Fork previews work immediately with just GitHub Pages enabled
- PR previews require additional PAT setup but provide PR-specific URLs
- Contributors can use one or both depending on their needs
