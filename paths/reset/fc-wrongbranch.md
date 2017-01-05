---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Committed to the Wrong Branch!
permalink: /git-trouble/04
next-page: /git-trouble/01
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  

  We have all been there, cruising along, making changes, making commits, and just as you are about to call it a night, you realize you just commited all of your changes to `Master` and not that new branch you forgot to `checkout` to.

  Fear not! You can salvage those changes and put them where they belong! Next time, try to remember to run a quick `git checkout BRANCH` before you get to working on that sweet Pull Request :wink:.

pushed: |
    When trying to fix committing to the wrong branch, it is important to identify if you need to fix 1 commit or multiple commits before continuing.

    ## Single Commit

    1. Ensure you are on the correct branch and enter: `git log --oneline`. Identify the SHA-1 hash for the **adding file 3** commit.
    1. Enter: `git revert SHA-1`, where SHA-1 is the hash for the **adding file 3** commit. You can modify the revert commit message if you would like or just close the editor.
    1. Create a new branch by entering: `git checkout -b NEWBRANCH`, where NEWBRANCH is the name of your new branch.
    1. Enter: `git reflog`,
    1. On the new branch, enter: `git cherry-pick SHA-1`, where SHA-1 is the hash for the **adding file 3** commit.

    ## Multiple Commits

    1. Ensure you are on the correct branch and enter: `git log --oneline`. Identify the SHA-1 hash for the commit where **file 1** was added.
    1. Enter `git reset --soft SHA-1`, where SHA-1 is the commit where **file 1** was added.
    1. Enter: `git checkout BRANCH`, where BRANCH is the name of the branch you should have made the commits to. If you don't have an existing branch, enter: `git checkout -b BRANCH`, where BRANCH is the name of the new branch you want to create.
    1. Enter: `git status`, files 2 - 6 should be in the Staging Area.
    1. Enter: `git commit -m "MESSAGE"`, where message is your new commit message, for example `Add files 2 through 6` could work.
    1. Enter: `git push`. If you haven't pushed from this branch before, you will be prompted by Git to set the `upstream` for the branch. To set the upstream, enter: `git push -u origin new`.
    1. Enter: `git checkout BRANCH`, where BRANCH is the branch you removed your errant commits from.
    1. Enter `git push`.  

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
  ## Revert
  For more information about `revert`, check out the ‘Tell me why’ section in the [Commit Broke Everything!](/on-demand/reset/fc-06) scenario.

  ## Reset
  For more information about `reset`, check out the 'Tell me why' section in the [Commit Message Sucks](/on-demand/reset/fc-03) scenario.

  ## What Happened to File 4?
  When you were running the `git reset --mixed SHA-1` you might have expected `file4.md` to be included in the files that got sent to the Working Directory. This is a very misconception when it comes to `git reset`, so don't worry, you are not alone! When you run `git reset`, you are identifying the commit that you want to `reset` to. So anything that happened after the identified commit needs to be modified with the `git reset` command.

  For example, if you had wanted to include `file4.md`'s commit with the `reset` command, you would have needed to use the SHA-1 associated with the `adding file 3` commit.  
---
