---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Git Reset Soft
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
  1. Run `git log --oneline`, you need to identify the first 4 digits of the SHA-1 hash associated with the creation of `file-03.md`.
  1. Run `git reset --soft <SHA-1>`, where `<SHA-1>` is the first four digits of the SHA-1 hash associated with the commit for `file-03.md`.
  1. Run `git status`.
  1. Run `git commit -m "Add file-03 and file-04"`.
show-me-how:
tell-me-why: |
  
---
