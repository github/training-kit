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
  As you begin creating commits to identify the changes you are making to the files you might 'accidentally' create a commit message that is borderline atrocious; something like 'Fixed the thing'. Although you are definitely aware of the **thing** you just **fixed**, other collaborators including future you, might not know what it is you fixed and more importantly, **why** you needed to fix it. Thankfully, Git is well aware of our tendency to craft terrible commit messages and has a handful of commands that save even the vaguest commit message.

  Keep in mind, all exercises expect you to have run the script to create files using the scripts found on the [Scenarios](/on-demand/git-trouble) page.
pushed: |
  Before we being fixing a terrible commit message that you have pushed to the remote, the risks should be identified. Fixing a commit message that you have pushed is going to require the use of the `--force` modifier which can cause some **serious** problems for other collaborators on your project. If knowing that fixing your commit message could cause problems doesn't trouble you, lets get started.

  If you aren't fixing your last commit, skip down some. If you are fixing the **last** commit you made you can do the following:

   1. Ensure you are on the correct `branch` and enter: `git commit --amend`.
   1. Instead of having the commit message say, `adding file 6`, why not try something like `Add file 6`. Once you have entered the commit message, just close the editor.
   1. Enter: `git push --force` to force your change to your remote.

  **BOOM** you just fixed your terrible commit message and you potentially caused problems for other collaborators. Congratulations!!! In all seriousness, editing a commit message might seem important at the time, but pushing a terrible commit message isn't the worst thing in the world, so it is recommended that you do this sparingly.

  If you aren't fixing your **last** commit, you can perform the following...actually wait, this process is very complex and you _really_ need to figure out if you _need_ to fix those commit messages that badly.

  Still here? Ok, here we go:

   1. Ensure you are on the correct `branch` and enter: `git log --oneline`
   1. Identify the SHA-1 hash code associated with the commit when **file 4** was committed.
   1. Enter: `git rebase -i SHA-1`, where SHA-1 is the SHA-1 of the commit for adding **file 4**. This will cause a `rebase` window to display in `-i` (or interactive) mode.
   1. Identify the commits you want to modify, for this example, select the commits for **adding file 5** and **adding file 6**. Replace the word `pick` with an `e` or the word `edit`. After selecting the commits, close the editor. After closing the editor, go back to the terminal to begin editing the commit messages.
   1. To begin editing the commit message(s), enter `git commit --amend`, and edit the commit message. After editing the commit message, close your editor.
   1. If you are happy with the message you typed, enter: `git rebase --continue`. If you need to change your commit message again, enter: `git commit --amend` and repeat these steps. You will need to perform this process of `git commit --amend`, edit the commit message, `git rebase --continue`, until you have edited each commit you marked with an `e` during the initial stage of the `rebase`.
   1. Once you have finished editing commit messages, enter: `git rebase --continue`, and the `rebase` will finish.
   1. After finishing the `rebase`, enter `git push --force`.

didnt-push: |
  So you have a couple of options when it comes to fixing a bad commit message that, so first, we need to identify if:

   > Am I trying to fix the **last** commit I made or commit a few commits back?

  If you aren't fixing your last commit, skip down some. If you are fixing the **last** commit you made you can do the following:

   1. Ensure you are on the correct `branch` and enter: `git commit --amend`.
   1. Enter the desired commit message and close the text editor.

  **BOOM** you just fixed your terrible commit message and now no one is the wiser. Congratulations!!!

  If you aren't fixing your **last** commit, you can perform the following:

   1. Ensure you are on the correct `branch` and enter: `git log --oneline`
   1. Identify the SHA-1 hash code associated with the commit when **file 4** was added.
   1. Enter the SHA-1 hash of the identified commit using the following: `git reset --soft SHA-1`, where SHA-1 is the SHA-1 of the commit for when **file 4** was added.
   1. Remove **file6.md** from the Staging Area by entering: `git reset HEAD file6.md`.
   1. Create a commit with **file5.md** by entering: `git commit -m "YOUR MESSAGE"`.
   1. Add **file6.md** to the Staging Area by entering: `git add file6.md`.
   1. Create a new commit for **file 6** by entering: `git commit -m "YOUR COMMIT MESSAGE"`.

show-me-how:
tell-me-why: |
  ## Commit --amend
  The `commit --amend` command enables you to modify the message of the _last_ commit you made. This can be helpful if you identify a spelling error or grammatical issue with the commit message you created. This command **only** works with the _last_ commit you made and you need to use other commands to modify commits made prior to your last commit.

  ## Reset
  Where `revert`, a command we use in other exercises was a command that provided a non-destructive method to clean up commit history and modify changes made to your repository, reset is a potentially destructive command. When using reset you are removing any reference to the commit in the repository history and the original copies of the files will no longer be available.

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
