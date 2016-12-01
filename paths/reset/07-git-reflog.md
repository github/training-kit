---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Git Reflog and Git Cherry Pick
permalink: /reset/07
next-page: /reset/08
facilitator: false
sidebar:
  nav: "reset"
main-content: |
  So, we just had you delete all of the files you created and committed! However, we can bring them back using two commands, `git reflog` and `git cherry-pick`.

  1. Enter `git reflog` and identify the SHA-1 with the commit message `Add files 02 03 and 04`.
  1. Enter `git cherry-pick <SHA-1>`, where <SHA-1> is the SHA-1 associated with the commit `Add files 02 03 04`.

show-me-how:
tell-me-why: |
  ## Commit to Working Directory
---
