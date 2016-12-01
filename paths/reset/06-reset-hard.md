---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Git Reset Hard
permalink: /reset/06
next-page: /reset/07
facilitator: false
sidebar:
  nav: "reset"
main-content: |
  We just modified our commit history from 3 separate commits to 2, now we are going to use the `git reset --hard` command to change our commit history even more!

  1. Run `git status`. If you haven't made any changes it should state that everything is up to date. CHECK THIS
  1. Run `git log --oneline`, you need to identify the first 4 digits of the SHA-1 hash associated with the creation of `file-01.md`.
  1. Run `git reset --hard <SHA-1>`, where `<SHA-1>` is the first four digits of the SHA-1 hash associated with the commit for `file-01.md`.
  1. Run `git status`.

  After running `git reset --hard` check the folder you have open, it should be empty! You just deleted all your files! However, we can bring it all back using two _other_ commands, `git reflog` and `git cherry pick`.
show-me-how:
tell-me-why: |
  ## Commit to Working Directory
---
