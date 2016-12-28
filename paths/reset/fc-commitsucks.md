---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Commit Message Sucks
permalink: /reset/fc-03
next-page: /reset/fc-01
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  
  As you begin creating commits to identify the changes you are making to the files you might 'accidentally' create a commit message that is borderline atrocious; something like 'Fixed the thing'. Although you are definitely aware of the **thing** you just **fixed**, other collaborators including future you, might not know what it is you fixed and more importantly, **why** you needed to fix it. Thankfully, Git is well aware of our tendency to craft terrible commit messages and has a handful of commands that save even the vaguest commit message.

  Keep in mind, all exercises expect you to have run the script to create files using the scripts found on the [Scenarios](/on-demand/reset/fc-01) page.
pushed: |
  The

didnt-push: |
  So you have a couple of options when it comes to fixing a bad commit message that, so first, we need to identify if:

   > Am I trying to fix the **last** commit I made or commit a few commits back?

  If you aren't fixing your last commit, skip down some. If you are fixing the **last** commit you made you can do the following:

   1. Ensure you are on the correct `branch` and enter: `git commit --amend`.
   1. Enter the desired commit message and close the text editor.

  > **BOOM** you just fixed your terrible commit message and now no one is the wiser. Congratulations!!!

  If you aren't fixing your **last** commit, you can perform the following:

   1. Ensure you are on the correct `branch` and enter: `git log --oneline`
   1. Identify the SHA-1 hash code associated with the commit message **below** the commit message you want to modify.
   1. Enter the SHA-1 hash of the identified commit using the following: `git reset --soft SHA-1`, where SHA-1 is the SHA-1 of the commit that occurred prior to the commit you want to fix.
   1. Add the files associated with the commit you want to fix. Use `git add <file name>` until you have added all the files associated with the commit.
   1. Enter `git commit -m "YOUR COMMIT MESSAGE"` to create a new commit.

  If you have multiple commits that you need to create after running the `git reset` command, just continue creating new commits using the `git add <FILE NAME>` command until you have created all of the commits you need.

show-me-how:
tell-me-why: |
  The

  ## Reset
  All `reset` content going here.
---
