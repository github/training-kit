---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Welcome
permalink: /reset/
next-page: /reset/01
facilitator: false
sidebar:
  nav: "reset"
main-content: |  

  When you are working on a project and using Git as version control, you can make mistakes. Thankfully, Git comes with a command, `reset` that allows us to fix the mistakes that we made, while letting us keep our more promising changes.

  > **I made a commit to the wrong branch.**

  > **I made commits, and I want to re-group them.**

  > **I need to undo something.**

  > **I want to move my project back to a commit where it works!**


  If you've ever had any of these thoughts, you may have needed `git reset`. In this course, we'll practice using `git reset` in a few different scenarios so you'll know how to get out of trouble.

  ### Reset
  `git reset` is a command that comes with three distinct modes, `soft`, `mixed`, and `hard`. Each command modifies the your local project history using the Working Directory and Staging Area.

  **Caution!** `git reset` can be destructive! While `reset` can be a great tool when you are working locally, using `reset` with a remote repository and other collaborators can cause **serious problems**. If you are trying to modify commits that have already been pushed to the remote, you probably want to use the `git revert` command instead.
  {: .notice--danger}

  ## Prerequisites
  It isn't required to complete any of the other courses available on the GitHub On Demand Training site. However, `git reset` may not make sense if you aren't familiar with the core Git functionality covered in [GitHub 103: Using the Command Line](https://services.github.com/on-demand/github-cli/).

show-me-how:
tell-me-why: |
  The `git reset` command might get you out of some of the sticky situations you might find yourself in while working on a project.
---
