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