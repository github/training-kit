---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Reset Soft
permalink: /reset/04
next-page: /reset/05
facilitator: false
sidebar:
  nav: "reset"
main-content: |
  Before we begin using the `git reset --soft` command. Make sure you have the following:

   - 4 unique files
   - 4 unique commits in your log
   - Open the `reset-example` folder in Finder / Windows Explorer / etc. to visualize the files in your directory.

  1. Run `git status`. If you haven't made any changes it should state that everything is up to date. CHECK THIS
  1. Run `git log --oneline`, you need to identify the first 4 digits of the SHA-1 hash associated with the creation of `file-02.md`.
  1. Run `git reset --soft <SHA-1>`, where `<SHA-1>` is the first four digits of the SHA-1 hash associated with the commit for `file-02.md`.
  1. Run `git status`.
  1. Run `git commit -m "Add file-03 and file-04"`.
show-me-how: "images/gifs/reset/git-reset-soft.gif"
tell-me-why: |
  As you work on your project, you are more than likely going to modify multiple files to successfully implement some awesome idea. Perhaps while you were making those changes, you made a handful of commits along the way. After implementing your new change, you realize you have 15 commits that made your awesome idea come to life. You can use `git reset --soft` to pull all of those commits back into your Staging Area and create one giant commit that implements your change.

  ![](/on-demand/images/reset-soft.png){: .align-center}

  When we talk about putting related changes together in one commit, we use the term Atomic Commit.

  ### Atomic Commits
  One way to keep a cleaner repository history, is the use of atomic commits. An atomic commit is a group of related changes that are placed within the same commit, as opposed to making individual commits for each related change.

  The best part about using atomic commits is the ability to use commands like `git revert` without fear of unintentionally removing an unrelated change.

---
