---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Commit Message Sucks
permalink: /git-trouble/04
next-page: /git-trouble/02
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  
  As you begin creating commits you might 'accidentally' create a commit message that is borderline atrocious; something like 'Fixed the thing'. Although you are definitely aware of the **thing** you just **fixed**, other collaborators (including future you) will not know what you fixed and more importantly, **why** you needed to fix it. Thankfully, Git is well aware of our tendency to craft terrible commit messages and has a handful of commands that save even the vaguest commit message.

  Keep in mind, all exercises expect you to have run the script to create files using the scripts found on the [Set Up Your Environment](/on-demand/git-trouble/01) page.
pushed: |
  Before you begin worrying about that terrible commit message you have pushed to the remote, let's talk about the risks associated with fixing it. Fixing a commit message you have already pushed is going to require you to use `git push --force`. `push --force` can cause some **serious** problems for other collaborators on your project. The embarrassment of a mis-spelled word is nothing compared to the embarrassment of messing up your collaborators. If your commit is really that bad, or if causing problems doesn't trouble you, keep reading.

  Start by asking yourself:

   > Am I trying to fix the **last** commit I made or one a few commits back?

  ### Fixing the Last Commit

  If you are fixing the **last** commit you made you can do the following:

   1. Ensure you are on the correct `branch`
   1. Use `git log --oneline` to ensure the commit you want to fix is at the top of the list.
   1. Enter: `git commit --amend`.
   1. Enter the desired commit message and close the text editor.
   1. Enter: `git push --force` to force your change to your remote.

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
   1. When you have edited the last commit, the rebase will finish. Enter: `git push --force` to push your new commits to the remote.

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
tell-me-why: |
  ## Commit --amend
  The `commit --amend` command enables you to modify the message and contents (changes that are included) of the _last_ commit you made. This can be helpful if you identify a spelling error or grammatical issue with the commit message you created. This command **only** works with the _last_ commit you made and you need to use other commands to modify commits made prior to your last commit.

  ## Reset
  Where `revert`, a command we use in other exercises was a command that provided a non-destructive method to clean up commit history and modify changes made to your repository, `reset` is a potentially destructive command. When using reset you are removing any reference to the commit in the repository history and the original copies of the files will no longer be available.

  ## Rebase
  A rebase and a merge are essentially the same thing. When you want to combine your changes from two branches into one, you have a choice to use either process. The difference is found in the history that your project leaves behind.

  When you `merge` two branches, a merge commit is created. This is a commit that identifies that the changes on the `test` branch were applied to the `master` branch (using our repo branches as an example). This would look something like having two traffic lanes merge into one at a single point (or commit in Git terminology).

  Alternatively, if you were to `rebase` your `test` branch with the `master` branch, you would be placing the commits made on the `test` branch along the linear (straight line) history of the `master branch`.

  Instead of just describing the difference between a `merge` commit and a `rebase`, look at these images.

    ![](/on-demand/images/git-merge.png){: .align-center}

  In the above image, the `test` and `master` branches were merged at the `7b67` 'merge' commit. During development `test` was created at the `0d7b` commit and began creating changes on the `test` branch. Meanwhile, the `master` branch also got a handful of commits. When the `merge` command was used the commits that occurred between on both branches since the `0d7b` commit were combined at the `7b67` merge commit.

    ![](/on-demand/images/git-rebase.png){: .align-center}

  Looking at the above example, you can see that again the `test` branch was created at the `0d7b` commit. Changes were made on both the `master` and `test` branches. Once the changes on the `test` branch were ready to be merged with the `master` branch, it was `rebase`d onto the `master` branch. You can see that the commits that occurred on the `test` branch were recreated on the `master` branch and given new commit SHA-1 hashes.

  To sum it up:

  Quick delivery of feature branches? Merge

  Clarity of History? Rebase

---
