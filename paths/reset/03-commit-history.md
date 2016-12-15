---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Commit History
permalink: /reset/03
next-page: /reset/04
facilitator: false
sidebar:
  nav: "reset"
main-content: |
  Now that we have 4 files and 4 different commits, we can begin using the `reset` command. Before we can begin using the command, we are going to review our local commit history using the `git log --oneline` command.

  Before we review our commit history though, let's talk about SHA-1 hashes. Every time you make a commit, a SHA-1 hash is assigned to the commit. This hash has a lot of information about the current state of the repository when you created a commit. Every SHA-1 hash is unique, so when performing the next steps, you will need to use the SHA-1 hash assigned to your specific commit.

  1. Enter `git log --oneline`
  1. Identify the different SHA-1 identifiers for each different commit you made previously.

show-me-how:
tell-me-why: |
  The `git log` command allows you to review the commit history of a branch. `log` has a bunch of modifiers that display your committed changes in a variety of ways. Viewing your history can be beneficial when trying to identify what changes have occurred within a project, to identify the different branches that have been merged into your deployed branch, or simply reviewing the commit history to catch up on the project's development.

  For information about the different commands modifiers associated with `git log`, check out [git-scm](https://git-scm.com/docs/git-log).

---
