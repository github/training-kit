---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Commit Broke Everything!
permalink: /reset/fc-06
next-page: /reset/fc-01
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  

  Your well intentioned commit was supposed to fix that bug that has been plaguing your project for weeks, but after making the commit things are worse than they were before! First, breathe, you can fix this; for real. Second, remember you aren't the first person who completely broke everything with a commit, heck, even the GitHub Trainers do it from time to time. So, now that you have found yourself in some :ahem: _very_ distinguished company, you can fix that gross commit.  

pushed: |
    Pushing your commit isn't the end of the world, other than it breaking everything, but still, the world will be fine. So, since the commit has been pushed and other collaborators might have begun working on the files related to that commit, especially if they noticed that the commit broke even more things.
    You can fix it really quickly though, using a handful of commands and soon it everything will be back to normal.

     1. Ensure you are on the correct branch and enter: `git log --oneline`.
     1. Identify the SHA-1 hash for the **adding file 2** commit.
     1. Enter: `git revert SHA-1`, where the SHA-1 is the SHA-1 for the **adding file 2** commit. You should have to enter a commit message, enter one and close the editor.
     1. Enter: `git log --oneline`. You know have a commit for the revert that you can push up to your remote.
     1. Enter: `git push`.

    For some extra practice using `git revert`, try to `revert` your previous `revert` and `push`ing that back up to your remote.

didnt-push: |
    Well, you didn't push the commit, that means no one else knows you made the project worse than it was. Use the following steps to fix that errant commit.

    Use Git Reset to bring the file back to the working directory.

    Make sure to use `ls` in this workflow as we reference it in the next sub-section

    ## I Just Want it All Gone
    Sometimes the best way to fix a problem is to pretend it never existed in the first place. If after removing the commit you just don't have the patience to deal with this garbage commit, you can use Git to make it look like it never happened. In the previous steps, you brought the file back to the Working Directory, so you could fix the issues you introduced with the initial commit and create a brand new commit that fixed that nagging bug and removed any trace of your previous attempt to fix it. If trying to identify how to get your fix to work is just not getting anywhere, we can use a different command to just get rid of it.

    > If you want to see something kinda cool, open your local repository in a file browser (Finder, My Computer, etc.) and leave it to the side (but in view).

    1. Ensure you are on the correct branch and enter: `git log --oneline`.
    1. Identify the SHA-1 associated with the **adding file5.md** commit.
    1. Enter: `git reset --hard SHA-1` where SHA-1 is the SHA-1 associated with the **adding file5.md** commit.
        If you have your file explorer open, you might have noticed something pretty cool happen!
    1. Enter: `git log --oneline`, the commit for **adding file6.md** is gone!
    1. Enter: `ls`. `file6.md` is no longer displayed in the list of files that exist (unlike before).

    ### Wait, I Shouldn't Have Done That!!!
    OK, so that one rage-induced moment you 'accidentally' deleted that file because you just couldn't stand the sight of it. What if you could bring it back from the dead? You can, with a very nifty command, `reflog`.

     1. Enter: `git reflog`.
     1. Identify the SHA-1 for the **adding file 6** commit.
     1. Enter: `git cherry-pick SHA-1`.
     1. Enter: `git log --oneline`.
     1. Enter: `git reflog`. Notice any

    You saved the file you deleted! Nice work!

show-me-how:
tell-me-why: |
  The

  ## Revert
  The easiest way to think about `revert` is just making your repository do the exact opposite of an existing commit and creating a new commit to record that change. Revert is useful when trying to reverse the changes made in a specific commit, and even _more_ useful if you pushed a change that your want to reverse to your remote. If you want to reverse a large group of changes and haven't pushed (you can actually use this if you have pushed, but there are some caveats to consider) you should use `reset`. For more information about `reset`, check out the 'Tell me why' section in the [Commit Message Sucks](/on-demand/reset/fc-03) scenario.

  ## Reflog
  Reflog is a more powerful version of `git log`, it identifies the tip of a branch or other references as they are updated. For instance, when you ran `git log --oneline` and `git reflog` at the end of the exercise, you saw the initial `reset` and the `cherry-pick`, but `git log --oneline` didn't show that information.
  There are a few things that you should know about `reflog`, such as:

  1. `reflog` is **local** only, so, you other collaborators are not going to be able to find files you deleted in their `reflog`s.
  1. `reflog` has an expiration date:
     - 30 days: 'Unreachable' objects, aka commits or modifications that were made to a branch that no longer exists.
     - 90 days: 'Reachable' objects, aka commits or modifications that were made to a branch that still exists.
  1. thing


---
