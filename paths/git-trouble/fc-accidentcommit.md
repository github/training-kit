---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Accidental Commit
permalink: /git-trouble/06
next-page: /git-trouble/02
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  

  In the fervor of making some sweet changes to your repository you might accidentally commit changes before you were actually ready to.   This mistake can be quickly fixed and you can get back to making your project :sparkle:.

  Keep in mind, all exercises expect you to have run the script to create files using the scripts found on the [Set Up Your Environment](/on-demand/git-trouble/01) page.
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
  The easiest way to think about `revert` is just making your repository do the exact opposite of an existing commit and creating a new commit to record that change. Revert is useful when trying to reverse the changes made in a specific commit, and even _more_ useful if you pushed a change that your want to reverse to your remote. If you want to reverse a large group of changes and haven't pushed (you can actually use this if you have pushed, but there are some caveats to consider) you could use `reset`. For more information about `reset`, check out the 'Tell me why' section in the [Commit Message Sucks](/on-demand/git-trouble/03) scenario.

  ## Why Did the SHA-1 Change?
  So, after you created the new commit you might have noticed that the SHA-1 associated with the commit for `file6.md` is now different. That is because the SHA-1 doesn't just identify the file (or files) that have been committed. It also contains additional information like Date, Time, Author, and other information. So, even though you might have created a commit with the exact same file from before, you will have a completely new SHA-1 hash for the commit. Pretty cool, huh?

  ## What Happened to File 5?
  When you were running the `git reset --mixed (or --soft) SHA-1` you might have expected `file5.md` to be included in the files that got sent to the Staging Area or Working Directory. In the 'Tell Me Why' section of the [Committed to the Wrong Branch](/on-demand/git-trouble/04) scenario, we describe a similar situation (What Happened to File 4?). If you want additional context as to why `file5.md` didn't get grabbed when you used `reset`, review that section.


---
