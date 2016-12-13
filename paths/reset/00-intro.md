---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Welcome
permalink: /reset/a
next-page: /reset/01
facilitator: false
sidebar:
  nav: "reset"
main-content: |  

  Sometimes when you are working on a project and using Git as version control, you can make mistakes. When you make those mistakes, it isn't surprising that we just delete our local work and `clone` our remote again. Thankfully, Git comes with a command, `reset` that allows us to fix some of the mistakes that we might have made, while letting us keep some of our more promising changes.

  ### Introducing Reset
  Git `reset` is a command that comes with three distinct modes, `soft`, `mixed`, and `hard`. Each command modifies the your local project history using the Working Directory and Staging Area.

  ### Word of Caution
  While `reset` can be a great tool when you are working locally, using `reset` with a remote repository and other collaborators can cause some serious problems. If you are trying to fix changes that have already been `push`ed to your remote, you might want to use the `git revert` command.

  ## Prerequisites
  It isn't required to complete any of the other courses available on the GitHub On Demand Training site, however, the functionality of the `reset` command might not make sense if you aren't familiar with the core Git functionality covered by our other offerings.

show-me-how:
tell-me-why: |
  The `git reset` command might get you out of some of the sticky situations you might find yourself in while working on a project.
---
