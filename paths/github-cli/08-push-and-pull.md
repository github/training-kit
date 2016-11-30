---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Open a Pull Request
permalink: /github-cli/08
next-page: /github-cli/09
facilitator: false
sidebar:
  nav: "github-cli"
main-content:
  includes:
    - activity/github-cli/06-git-push.md
show-me-how: images/gifs/github-cli/push-and-pull.gif
tell-me-why: |
  ## Pushing Changes

  1. Create a branch
  1. Add commits
  1. Open a Pull Request** :arrow_left: _(This section deals with this step.)_
  1. Collaborate, and make more commits
  1. Merge the Pull Request

  We just created a branch locally and added commits. The remote repository that's hosted on GitHub.com isn't aware of these changes automatically.

  In fact, there are only 4 network commands that actually cause the **local** or **remote** repositories to update.

  - `git clone`
  - `git fetch`
  - `git pull`
  - `git push`

  Since this won't happen automatically, but we still want to open a pull request, we need to push up our branch.

  The syntax is a little complicated here. Let's break it down.

  `git push` is the root part of the command. It tells git that you want to update the remote branch with your current, local branch.

  `-u` is short for `--set-upstream`. This sets a relationship between the branch on the remote and your branch locally, so that in the future you only need to type `git push`.

  `origin BRANCH-NAME` creates a branch on the remote and names it after your local branch.

  The good news is, you only need to do this the once. If you have pushed this branch before or it already exists on the remote, you can simply type
   `git push`.

---
