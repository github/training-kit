---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Accidental Commit
permalink: /reset/fc-05
next-page: /reset/fc-01
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  

  In the fervor of making some sweet changes to your repository you might from time to time, accidentally commit some changes to a branch before you were actually ready to commit it. This mistake can be quickly fixed and you can get back to making your project :sparkle:.

pushed: |
    Since we accidentally pushed our changes to the wrong branch on our remote, we need to `revert` the commit (or commits) to prevent them creating any problems for other collaborators.

    1. Ensure you are on the correct branch and enter: `git log --oneline`.
    1. Identify the SHA-1 hash for the commit for **adding file 4**.
    1. Enter: `git revert SHA-1`, where SHA-1 is the SHA-1 hash for the commit where you created **file 4**.
    1. Enter a commit message (or simply keep the predefined `revert` message) and close the editor.
    1. Enter: `git push`. You have successfully undone the commit you recently `push`ed to your remote.   

didnt-push: |
    If you didn't push that incomplete commit up to your remote, it makes it =a little bit easier to resolve this misstep.

    1. Ensure you are on the correct branch and enter: `git log --oneline`.
    1. We are going to assume you didn't mean to commit file 6, so identify the SHA-1 hash for the **adding file 5** commit.

    Before continuing we should identify the options avaiable to fix this mistake. If you want to add additional files to the commit, you can use `git reset --soft`, if you need to make changes to `file6.md`, you should use `git reset --mixed`.

    1. For this step, you can either use: `git reset --soft SHA-1` or `git reset --mixed SHA-1`, where SHA-1 is the SHA-1 hash associated with the **adding file 5** commit. Typically you would use `--mixed` if you wanted to modify `file6.md`, if you just want to add additional files to the commit but leave `file6.md` as it is, you can use `--soft`.  
    1. Enter: `git status`. You should see `file6.md` in your Staging Area (`--soft`) or Working Directory (`--mixed`).

    Depending on what mode of `reset` you used, perform one of the following bonus steps:
    - If you used `--mixed`, try to create a new file, add it to the Staging Area, and create a new commit. After creating the new commit, run `git status` and identify the SHA-1 associated with the new commit.
    - If you sued `--soft`, create a new commit with `file6.md`. After committing it, run `git log --oneline` and identify the SHA-1 associated with the new commit.

show-me-how:
tell-me-why: |
  ## Why Did the SHA-1 Change?
  So, after you created the new commit you might have noticed that the SHA-1 associated with the commit for `file6.md` is now different. That is because the SHA-1 doesn't just identify the file (or files) that have been committed. It also contains additional information like Date, Time, Author, and other information. So, even though you might have created a commit with the exact same file from before, you will have a completely new SHA-1 hash for the commit. Pretty cool, huh?

  ## What Happened to File 5?
  When you were running the `git reset --mixed (or --soft) SHA-1` you might have expected `file5.md` to be included in the files that got sent to the Staging Area or Working Directory. In the 'Tell Me Why' section of the [Committed to the Wrong Branch](/on-demand/reset/fc-04) scenario, we describe a similar situation (What Happened to File 4?). If you want additional context as to why `file5.md` didn't get grabbed when you used `reset`, review that section.


---
