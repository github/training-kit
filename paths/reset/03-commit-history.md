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

  NEED GIT LOG IMAGE

show-me-how: "images/gifs/reset/commit-history.gif"
tell-me-why: |

---
