---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Reflog and Cherry Pick
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
  ## Reflog
  Similar to `git log`, `git reflog` shows the local history of your repository by identifying every commit where HEAD has pointed and can be useful when trying to alter the history of your project. Keep in mind, the contents of your `reflog` isn't pushed to the remote, so, it can't be used by other collaborators.

  ## Cherry-pick
  To summarize the functionality of `cherry-pick`, it allows you to identify a specific change within your project and apply a new commit with it. For instance, after we used `git reset --hard` we can use a combination of `git reflog` and `git cherry-pick` to go back in our repository's history and re-commit the files we just deleted!

  ## Expiration Date
  The ability to bring back file from the 'dead' is a great feature, however, there is a time constraint when using `git reflog`. Commits that are 'reachable' or exist on a branch that hasn't been deleted will be displayed for 90 days. Commits that are 'unreachable' or exist on a branch that no longer exists, will be displayed for 30 days.  
---
