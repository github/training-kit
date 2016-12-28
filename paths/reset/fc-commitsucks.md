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
  Before we being fixing a terrible commit message that you have pushed to the remote, the risks should be identified. Fixing a commit message that you have pushed is going to require the use of the `--force` modifier which can cause some **serious** problems for other collaborators on your project. If knowing that fixing your commit message could cause problems doesn't trouble you, lets get started.

  If you aren't fixing your last commit, skip down some. If you are fixing the **last** commit you made you can do the following:

   1. Ensure you are on the correct `branch` and enter: `git commit --amend`.
   1. Enter the desired commit message and close the text editor.
   1. Enter: `git push --force` to force your change to your remote.

  > **BOOM** you just fixed your terrible commit message and you potentially caused problems for other collaborators. Congratulations!!! In all seriousness, editing a commit message might seem important at the time, but pushing a terrible commit message isn't the worst thing in the world, so it is recommended that you do this sparingly.

  If you aren't fixing your **last** commit, you can perform the following...actually wait, this process is very complex and you _really_ need to figure out if you _need_ to fix those commit messages that badly.

  Still here? Ok, here we go:

   1. Ensure you are on the correct `branch` and enter: `git log --oneline`
   1. Identify the SHA-1 hash code associated with the commit message **below** the commit messages you want to modify.
   1. Enter: `git rebase -i SHA-1`, where SHA-1 is the SHA-1 of the commit that occurred prior to the commit you want to fix. This will cause a `rebase` window to display in `-i` (or interactive) mode.
   1. Identify the commits you want to modify and replace the word `pick` with an `e` or the word `edit`. After selecting the commits, close the editor. After closing the editor, go back to the terminal to begin editing the commit messages.
   1. To begin editing the commit message(s), enter `git commit --amend`, and edit the commit message. After editing the commit message, close your editor.
   1. If you are happy with the message you typed, enter: `git rebase --continue`. If you need to change your commit message again, enter: `git commit --amend` and repeat these steps. You will need to perform this process of `git commit --amend`, edit the commit message, `git rebase --continue`, until you have edited each commit you marked with an `e` during the initial stage of the `rebase`.
   1. Once you have finished editing commit messages, enter: `git rebase --continue`, and the `rebase` will finish.

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
