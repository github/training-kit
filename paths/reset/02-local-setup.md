---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Create a Local Repository
permalink: /reset/02
next-page: /reset/03
facilitator: false
sidebar:
  nav: "reset"
main-content: |
  Before we can begin working with the `reset` command, you need to create an environment to play in. Follow these steps to successfully create a repository to begin using the `reset` command and identify how it works within your repository.

  1. Using your terminal, create a new folder and name it `reset-example`.
  1. Enter the folder you just created by entering, `cd reset-example`.
  1. After entering the folder, we need to initialize git, to do that, enter the following command: `git init`.

        Now that you have initialized git within the `reset-example` directory, we need to create some files, add them to the Staging Area, and commit them.
        Perform the following tasks four (4) times to create four (4) unique files.

  1.  Create a file named `file-01.md`. If you are on a Mac or UNIX machine, you can create a file using the command `touch file-01.md`. If you are on a Windows machine, you can create a file using the command `echo $null >> file-01.md`.
  1. Now that a file has been created you need to move it from the Working Directory to the Staging Area, this can be accomplished by running the command `git add file-01.md`.
  1. With the file moved to the Staging Area, it is time to commit it, perform the following: `git commit -m "Add file-01.md"`

  Steps #4-6 need to be performed 3 more times to create a total of 4 files. Each time you create a new file, increase the number in the file name by 1. For example when you create the second file, it should be named `file-02.md`. Each time you create a file, you need to `add` it to the Staging Area and `commit` it before creating another file.

  When you are finished you should have a total of 4 files named `file-01.md`, `file-02.md`, `file-03.md`, and `file-04.md`. Each file should have a separate commit, which we will look at in a little bit.
show-me-how:
tell-me-why: |

---
