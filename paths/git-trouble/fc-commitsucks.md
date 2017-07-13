---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Git Commit Message Sucks
permalink: /git-trouble/git-commit-message
next-page: /git-trouble/git-scenarios
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  
  As you begin creating commits you might 'accidentally' create a commit message that is borderline atrocious; something like 'Fixed the thing'. Although you are definitely aware of the **thing** you just **fixed**, other collaborators (including future you) will not know what you fixed and more importantly, **why** you needed to fix it. Thankfully, Git is well aware of our tendency to craft terrible commit messages and has a handful of commands that save even the vaguest commit message.

  Keep in mind, all exercises expect you to have run the script to create files using the scripts found on the [Set Up Your Environment](/on-demand/git-trouble/git-set-up) page.
pushed: |
  Before you begin worrying about that terrible commit message you have pushed to the remote, let's talk about the risks associated with fixing it. Fixing a commit message you have already pushed is going to require you to use `git push --force-with-lease`. Using `push --force-with-lease` can cause some **serious** problems for other collaborators on your project. The embarrassment of a mispelled :grin: word is nothing compared to the embarrassment of messing up your collaborators. If your commit is really that bad, or if causing problems doesn't trouble you, keep reading.

  Start by asking yourself:

   > Am I trying to fix the **last** commit I made or one a few commits back?

  ### Fixing the Last Commit

  If you are fixing the **last** commit you made you can do the following:

   1. Ensure you are on the correct `branch`
   1. Use `git log --oneline` to ensure the commit you want to fix is at the top of the list.
   1. Enter: `git commit --amend`.
   1. Enter the desired commit message and close the text editor.
   1. Enter: `git push --force-with-lease` to force your change to your remote.

  **BOOM** you just fixed your terrible commit message and you potentially caused problems for other collaborators. Congratulations!!! In all seriousness, editing a commit message might seem important at the time, but pushing a terrible commit message isn't the worst thing in the world, so it is recommended that you do this sparingly.

  ### Fixing an Older Commit

  If you aren't fixing your **last** commit, you can perform the following...actually wait, this process is very complex and you _really_ need to figure out if you _need_ to fix those commit messages that badly.

  Still here? Ok, here we go:

   1. Ensure you are on the correct `branch` and enter: `git log --oneline`
   1. Identify the SHA-1 hash for the commit just before the one you would like to change. For this example, let's pretend we want to fix the commit for file 5, so we will pick the SHA-1 associated with the **file 4** commit.
   1. Enter: `git rebase -i SHA-1`, where SHA-1 is the SHA-1 of the commit for adding **file 4**. The `-i` is the interactive option and will open your text editor, allowing you to modify the `rebase` script.
   1. Identify the commits you want to modify in the list and replace the word `pick` with an `e` or the word `edit`. When you are happy with your selections, close the editor and go back to the terminal.
   1. The rebase will stop at the first commit to be edited. To begin editing the first commit message, enter `git commit --amend`. Your text editor will open, allowing you to edit the commit message.
   1. Close the text editor and enter: `git rebase --continue`.
   1. Repeat the two previous steps for each commit you would like to edit.
   1. When you have edited the last commit, the rebase will finish. Enter: `git push --force-with-lease` to push your new commits to the remote.

didnt-push: |
  You have a couple of options when it comes to fixing a bad commit message. First, you need to ask yourself:

   > Am I trying to fix the **last** commit I made or one a few commits back?

  ### Fixing the Last Commit

  If you are fixing the **last** commit you made you can do the following:

   1. Ensure you are on the correct `branch`
   1. Use `git log --oneline` to ensure the commit you want to fix is at the top of the list.
   1. Enter: `git commit --amend`.
   1. Enter the desired commit message and close the text editor.

  **BOOM** you just fixed your terrible commit message and now no one is the wiser. Congratulations!!!

  ### Fixing an Older Commit

  If you aren't fixing your **last** commit, you can perform the following:

   1. Ensure you are on the correct `branch` and enter: `git log --oneline`
   1. Identify the SHA-1 hash associated with the commit just before the one you want to fix. For practice, let's use the one where **file 4** was added.
   1. Enter `git reset --mixed SHA-1`, where SHA-1 is the SHA-1 of the commit before the one you want to fix.
   1. The changes you made in the file 5 and file 6 commits are now sitting in your working directory. Simply re-add and re-commit the changes.

show-me-how:
tell-me-why:
  includes:
    - tell-me-why/trouble-commitamend.md
    - tell-me-why/trouble-pushforcewithlease.md
    - tell-me-why/trouble-reset-xref.md
    - tell-me-why/trouble-rebase.md
---
