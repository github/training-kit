---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Just Make it Go Away - Breaking Things With Git
permalink: /git-trouble/breaking-things-with-git
next-page: /git-trouble/git-scenarios
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  

  Your well intentioned branch was supposed to introduce that awesome new feature, but after making a few commits, things aren't going as planned!   

  Keep in mind, all exercises expect you to have run the script to create files using the scripts found on the [Set Up Your Environment](/on-demand/git-trouble/git-set-up) page.
pushed: |
    This is what makes Git awesome! You can try new things and, when they don't work out, just get rid of them. First, ask yourself:

    > Is it all terrible? Or can I use some of it?

    ## Make it all go away!

    Ok, if you really mean it, we can get rid of the entire branch on the remote.

    1. First, let's go back to the `master` branch with: `git checkout master`
    1. Enter: `git push origin :BRANCH-NAME` or `git push --delete BRANCH-NAME` to delete the branch on the remote.
    1. Enter: `git fetch --prune` to delete the remote tracking branch.
    1. Enter: `git branch -D BRANCH-NAME` to delete the local copy of the branch.

    ## It isn't all bad

    If some of it can be salvaged, you can use the following approach:

    1. Ensure you are on the correct branch and enter: `git log --oneline`.
    1. Identify the SHA-1 hash for the last commit you want to keep. For this example, let's pretend files 1 and 2 are good, but we want to get rid of the rest, so grab the SHA-1 for "adding file 2".
    1. Enter: `git reset --hard SHA-1`, where SHA-1 is the SHA-1 hash for the commit where you created **file 2**.
    1. Type: `git status` and `ls`, notice that everything except files 1 and 2 are gone!
    1. Enter: `git push --force`.

didnt-push: |
    Well, you didn't push, that means no one else knows about your failed experiment. Use the following steps to get back to your happy place.

    First, ask yourself:

    > Is it all terrible? Or can I use some of it?

    ## Make it all go away!

    Sometimes the best way to fix a problem is to pretend it never happened. The easiest solution is to just delete the branch:

    1. Check out to the `master` branch with: `git checkout master`
    1. Enter: `git branch -D BRANCH-NAME` to delete the local copy of the branch.

    ## It isn't all bad

    If some of it can be salvaged, you can use the following approach:

    > If you want to see something kinda cool, open your local repository in a file browser (Finder, My Computer, etc.) and leave it to the side (but in view).

    1. Ensure you are on the correct branch and enter: `git log --oneline`.
    1. Identify the SHA-1 hash for the last commit you want to keep. For this example, let's pretend files 1 and 2 are good, but we want to get rid of the rest, so grab the SHA-1 for "adding file 2".
    1. Enter: `git reset --hard SHA-1`, where SHA-1 is the SHA-1 hash for the commit where you created **file 2**.
        If you have your file explorer open, you might have noticed something pretty cool happen!
    1. Type: `git status` and `ls`, notice that everything except files 1 and 2 are gone!  
    1. Enter: `git log --oneline`, all of the commits after **adding file2.md** are gone!

    ## Wait, I Shouldn't Have Done That!!!

    OK, so that one rage-induced moment you 'accidentally' deleted that file because you just couldn't stand the sight of it. What if you could bring it back from the dead? You can:

    ### Bring One File Back

    1. Enter: `git reflog`.
    1. Identify the SHA-1 for the **adding file 6** commit.
    1. Enter: `git cherry-pick SHA-1` where SHA-1 is the commit for "Adding file 6".
    1. Enter: `git log --oneline` and `ls` to see that file 6 and its commit are back.

    ### Bring Them All Back

    After you took the dog for a walk, you realized where you were going wrong (fresh air works every time) and you want it all back. Don't worry, you can do that too:

    1. Enter: `git reflog`.
    1. Identify the SHA-1 for the **adding file 6** commit.
    1. Enter: `git reset --hard SHA-1` where SHA-1 is the commit for "Adding file 6".
    1. Enter: `git log --oneline` to see all of the commits are back. Notice the SHA-1 hashes of the commit - they match the original commits!

show-me-how:
tell-me-why: |

  ## Reflog
  Reflog is a more powerful version of `git log`, it records every commit HEAD has pointed to. HEAD is simply a pointer that represents the commit you are currently "checked out" to.

  In most cases, you will be checked out to a branch, but you can also check out to any commit or tag in your history. When you are checked out to something other than a local branch, you are in what's called a **detached head** state. This is also recorded in the reflog.

  There are a few things that you should know about `reflog`, such as:

  1. `reflog` is **local** only, so, your other collaborators are not going to be able to find files you deleted in their `reflog`s.
  1. `reflog` only displays commits for a limited time:
     - 30 days: 'Unreachable' objects, aka commits or modifications that were made to a branch that no longer exists.
     - 90 days: 'Reachable' objects, aka commits or modifications that were made to a branch that still exists.

  ## Reset
  For more information about `reset`, check out the 'Tell me why' section in the [Too Many (small) Commits](/on-demand/git-trouble/too-many-commits) scenario.

  ## Cherry-pick
  For more information about `cherry-pick`, check out the 'Tell me why' section in the [Committed to the Wrong Branch!](/on-demand/git-trouble/git-commit-wrong-branch) scenario.  
---
