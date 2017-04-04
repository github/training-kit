---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Accidental Git Commit
permalink: /git-trouble/accidental-git-commit
next-page: /git-trouble/git-scenarios
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  
  In the fervor of making some sweet changes to your repository you might accidentally commit changes before you were actually ready to. First, breathe, you can fix this; for real. Second, remember you aren't the first person who completely broke everything with a commit, heck, even the GitHub Trainers do it from time to time. So, now that you have found yourself in some :ahem: _very_ distinguished company, you can fix that gross commit.

  Keep in mind, all exercises expect you to have run the script to create files using the scripts found on the [Set Up Your Environment](/on-demand/git-trouble/git-set-up) page.

pushed: |
    Since we accidentally pushed our changes to the remote, you need to `revert` the commit (or commits) to prevent them creating any problems for other collaborators.

    1. Ensure you are on the correct branch and enter: `git log --oneline`.
    1. Identify the SHA-1 hash for the incorrect commit. For this example, let's use the **adding file 4** commit.
    1. Enter: `git revert SHA-1`, where SHA-1 is the SHA-1 hash for the commit where you created **file 4**.
    1. Enter a commit message (or simply keep the predefined `revert` message) and close the editor.
    1. Enter: `git push`. You have successfully undone the commit you recently `push`ed to your remote.

    ## Recovering Your Work

    Now that the branch on the remote is fixed, you may want to recover that accidental commit and finish your work. Here's how you can do it:

    1. Use `git log --oneline` to identify the SHA-1 of the revert commit. If you left the default message, it will say something like `Revert "adding file 4"`.
    1. Type `git revert SHA-1` where the SHA-1 is the revert commit.
    1. Finish your work on the files.
    1. Type: `git add` to stage your changes.
    1. Type: `git commit --amend` to meld your changes into the previous commit.
    1. Enter an appropriate commit message and close your text editor.
    1. Enter: `git push` to send your beautiful (and complete) new commit to the remote.

didnt-push: |
  If you didn't push that incomplete commit up to your remote, it makes it a little bit easier to resolve this misstep.

  1. Ensure you are on the correct branch and enter: `git log --oneline`.
  1. We are going to assume you didn't mean to commit file 6, so identify the SHA-1 hash for the **adding file 5** commit.
  1. Enter: `git reset --mixed SHA-1`, where SHA-1 is the SHA-1 hash associated with the **adding file 5** commit.
  1. Enter: `git status`. You should see `file6.md` in your working directory.

  Now you are ready to keep making your :guitar: changes and no one is the wiser!

show-me-how:
tell-me-why: |
  ## Revert
  The easiest way to think about `revert` is just making your repository do the exact opposite of an existing commit and creating a new commit to record that change. Revert is useful when trying to 'undo' the changes made in a specific commit, and even _more_ useful if you pushed a change that your want to reverse to your remote since it will always create a new commit and leave the original commit untouched.

  ## Reset
  For more information on `git reset`, check out the 'Tell me why' section in the [Too Many (small) Commits](/on-demand/git-trouble/too-many-commits) scenario.

  ## Commit --amend
  For more information on `git commit --amend`, check out the 'Tell me why' section in the [Commit Message Sucks](/on-demand/git-trouble/git-commit-message) scenario.

---
