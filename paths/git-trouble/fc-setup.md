---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Set Up Your Git Scenario Environment
permalink: /git-trouble/git-set-up
next-page: /git-trouble/git-scenarios
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  
  This stuff is a lot more fun if you try it out. Let's create a sample repository to play with:

  1. Create a repository on [GitHub.com](https://www.github.com) and `clone` it to your desktop.
  1. Create a new branch, call it ```test```.
  1. Create a series of commits that give you a rich history to practice the scenarios in this course. Feel free to use this handy script to generate them for you:
  - **Bash**:

            for d in {1..6};
            do touch file$d.md;
            git add file$d.md;
            git commit -m "adding file $d";
            done
  - **PowerShell:**

            for ($d=1; $d -le 6;$d++) {
              touch file$d.md;
              git add file$d.md;
              git commit -m "adding file$d.md";
            }

  :metal: You're ready to rock! :guitar:

  ## Using `git log`

  If you type `git log --oneline`, your commit history should include several commits that look something like this:

      5950a1b adding file 4

  Those first 7 characters are going to be unique to your machine and are a section of the SHA-1 hash assigned to that specific commit (the SHA-1 hash is 40 characters long). We are going to use that hash identifier a lot as we learn how to 'git' out of sticky situations.

  ## New UI Addition
  When trying to get out of a pickle, the best tool for the job is typically dependent on if you `push`ed your commits to your remote (or not). Look :eyes: for these drop downs throughout the course:

  ![](/on-demand/images/push-dropdowns.png){: .align-center}

   They will help you find the right instructions for each situation.

refresh:
  includes:
    - tell-me-why/create-repo.md
    - tell-me-why/clone-repo.md
show-me-how:
tell-me-why:
---
