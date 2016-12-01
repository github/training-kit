---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Git Reset Mixed
permalink: /reset/05
next-page: /reset/06
facilitator: false
sidebar:
  nav: "reset"
main-content: |
  We just modified our commit history from 4 separate commits to 3, now we are going to use the `git reset --mixed` command to change our commit history even more!

  1. Run `git status`. If you haven't made any changes it should state that everything is up to date. CHECK THIS
  1. Run `git log --oneline`, you need to identify the first 4 digits of the SHA-1 hash associated with the creation of `file-02.md`.
  1. Run `git reset --mixed <SHA-1>`, where `<SHA-1>` is the first four digits of the SHA-1 hash associated with the commit for `file-02.md`.
  1. Run `git status`.
  1. Run `git add file-02.md file-03.md file-04.md`
  1. Run `git commit -m "Add files 02 03 and 04"`.
show-me-how:
tell-me-why: |
  ## Commit to Working Directory
---
