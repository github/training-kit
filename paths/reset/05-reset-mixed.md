---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Reset Mixed
permalink: /reset/05
next-page: /reset/06
facilitator: false
sidebar:
  nav: "reset"
main-content: |
  We just modified our commit history from 4 separate commits to 3, now we are going to use the `git reset --mixed` command to change our commit history even more!

  1. Run `git status`. If you haven't made any changes it should state that everything is up to date. CHECK THIS
  1. Run `git log --oneline`, you need to identify the first 4 digits of the SHA-1 hash associated with the creation of `file-01.md`.
  1. Run `git reset --mixed <SHA-1>`, where `<SHA-1>` is the first four digits of the SHA-1 hash associated with the commit for `file-01.md`.
  1. Run `git status`.
  1. Run `git add file-02.md file-03.md file-04.md`
  1. Run `git commit -m "Add files 02 03 and 04"`.
show-me-how: "images/gifs/reset/git-reset-mixed.gif"
tell-me-why: |
  ## Similar but Different
  The `--mixed` mode of `reset` enables you to take previously committed changes and send them back to the Working Directory of your repository. Similar to `--soft`, `--mixed` can be used to group related changes together. Additionally, `--mixed` can be used to make changes to files after you made some commits.

  For example, if you were working on the layout of your website and some of the stylistic choices you made early on in the development of the new design don't match the direction you ended up going in, instead of deleting those changes, you can just go back in time and alter your previous commits. 
---
