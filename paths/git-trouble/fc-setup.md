---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Set Up Your Scenario Environment
permalink: /git-trouble/01
next-page: /git-trouble/02
facilitator: false
sidebar:
  nav: "advanced"
main-content: |  
  1. Create a repository on GitHub.com and `clone` it to your desktop.
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

  ## New UI Addition
  Look :eyes: for the drop these drop downs throughout the course:

  ![](/on-demand/images/push-dropdowns.png){: .align-center}

  When trying to get out of a pickle, the best tool for the job is typically dependent on if you pushed your commits to your remote (or not). These drop downs help you find the right instructions for each situation.

show-me-how:
tell-me-why:
---
