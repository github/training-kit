---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Committed to the Wrong Branch!
permalink: /reset/fc-04
next-page: /reset/fc-01
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  

  We have all been there, cruising along, making changes, making commits, and just as you are about to call it a night, you realize you just commited all of your changes to `Master` and not that new branch you forgot to `checkout` to.

  Fear not! You can salvage those changes and put them where they belong! Next time, try to remember to run a quick `git checkout BRANCH` before you get to working on that sweet Pull Request :wink:.

pushed: |
    When trying to fix committing to the wrong branch, it is important to identify if you need to fix 1 commit or multiple commits before continuing.

    ## Single Commit

    1. On wrong branch, revert for 1 commit and push.
    1. On correct branch, git reflog / cherry-pick the commit you reverted

    ## Multiple Commits

    1. Ensure you are on the correct branch and enter: `git log --oneline`. Identify the SHA-1 hashes for the different commits you need

didnt-push: |
    The good news is, you didn't push, so none of the collaborators on your project know you just committed a bunch of changes directly to `Master` on 'accident' (I mean, lets be serious, those changes are awesome and are definitely gonna get merged). Here is how we can fix that 'mistake'.

    1. Ensure you are on the branch you accidentally made those commits to. If you followed the 'Setting Up Your Scenario Environment' directions, you should have made a commit to a branch you _might_ have named `test`.
    1. Enter: `git log --oneline` and identify the SHA-1 hash associated with the commit for **adding file 4**.
    1. Enter: `git reset --mixed SHA-1`, where `SHA-1` is the SHA-1 associated with the **adding file 4** commit.
    1. Enter: 'git status'. You should see files 5 and 6 in your Working Directory.
    1. Enter: `git checkout -b correct`. This will create a new branch named `correct` and check it out.
    1. Enter: `git status`. Files 5 and 6 should still be in your Working Directory waiting to be added to a commit.
    1. Add both File 5 and File 6 by entering: `git add file5.md` and `git add file6.md`.
    1. Enter: `git status`. File 5 and 6 should now be in the Staging Area waiting to be committed.
    1. Enter `git commit -m "Adding file 5 and 6"`.

    Congratulations, you just removed commits you made to the incorrect branch and added them to the correct branch!

show-me-how:
tell-me-why: |
  ## What Happened to File 4?
  When you were running the `git reset --mixed SHA-1` you might have expected `file4.md` to be included in the files that got sent to the Working Directory. This is a very misconception when it comes to `git reset`, so don't worry, you are not alone! When you run `git reset`, you are identifying the commit that you want to `reset` to. So anything that happened after the identified commit needs to be modified with the `git reset` command.

  For example, if you had wanted to include `file4.md`'s commit with the `reset` command, you would have needed to use the SHA-1 associated with the `adding file 3` commit.  
---
