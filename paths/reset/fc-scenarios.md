---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Scenarios
permalink: /reset/fc-01
next-page: /reset/fc-02
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  
  This course is comprised of a handful of scenarios that you might find yourself in while working with Git. Before getting started with the scenarios though, you should perform the following:

    - Create a test repository on [GitHub.com](https://www.github.com)
    - Clone the test repository to your local machine

  ## New UI Addition
  If you have taken some of the other courses provided on this site, you might be familiar with the `Show Me How` and `Tell Me Why` drop-downs. In this course we added two new drop-downs, `I Didn't Push` and `Pushed`. When using the various Git tools to get out of a pickle, the best tool for the job is typically dependent on if you pushed your commits to your remote (or not). Each scenario (for the most part), provides the best command to use based on if your pushed your commits or not.

  INSERT PIC OF DROP DOWNS ONCE COLORS SELECTED

  ## Setting Up Your Scenario Environment

  Unlike our other courses, this class isn't linear which means before you can begin working on any scenario, you are going to need to do a little bit of setup to get a 'testing environment' ready.

   1. Create a repository on GitHub.com and `clone` it to your desktop.

  With a remote repository created, we need to populate our repository with some files and commits.

   1. Before creating new files, you should probably create a new branch, maybe call it something like ```test```.

  With a branch created, its time to create those files, thankfully we have some handy scripts that will automatically generate files and commits (with commit messages!) that will make your life a little easier.

   - Script 1
   - Script 2  

  If you created a repository on GitHub.com, cloned it, created a branch, and created files and commits, you are ready to rock and roll! Sorry about the GIANT block of text to get setup :cry:.

  ## Scenarios
  - [Committed Something on Accident](/on-demand/reset/fc-05)

    During your workflow, you might have gotten excited and made a commit before you had actually finished your thought. Maybe you made the commit without adding all of the related files. Perhaps your commit included changes that were unrelated. In either case, we can fix that, just follow along and `git` out of trouble.

  - [Commit to Wrong Branch](/on-demand/reset/fc-04)

    So you got excited about making some changes and accidentally committed your changes to the wrong branch? Happens **all** the time. This scenario walks you through the steps required to successfully remove those commits and commit them to the right branch, even if you already pushed them up!

  - [Commit Message Sucks](/on-demand/reset/fc-03)

    'Edited stuff' might have seemed like a decent commit message at 3am, but in hindsight, you might realize you want to provide more context. Covering the different commands you can use to `revert` the error of your commit message-ways, this scenario identifies how to get more descriptive.

  - [Commit Broke EVERYTHING](/on-demand/reset/fc-06)

    The sky is **not** falling down chicken little, we can make everything right-as-rain, and this scenario shows you how to fix that last commit.

  - [Too Many Commits!](/on-demand/reset/fc-02)

    While you were making changes you might have created a bunch of tiny commits to keep track of the changes you were making, but when it comes time to actually push your changes back to your `remote`, you want to group your commits together and prevent your commit history from being inundated with the 30 commits you just made. This scenario guides you through `squashing` those commits and creating more condensed commits.   

show-me-how:
tell-me-why: |
  The
---
