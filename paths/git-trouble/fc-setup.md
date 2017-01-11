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

  ## New UI Addition
  Look :eyes: for these drop downs throughout the course:

  ![](/on-demand/images/push-dropdowns.png){: .align-center}

  When trying to get out of a pickle, the best tool for the job is typically dependent on if you `push`ed your commits to your remote (or not). These drop downs help you find the right instructions for each situation.

refresh: |
  ## Creating a Repository
  1. Navigate to [GitHub.com](https://www.github.com)
  1. Click the **New repository** button.
  1. Enter a name for the repository in the **Repository name** field.
       - You can also add a description for the repository in the **Description** field.
  1. Click the **Initialize this repository with a README** checkbox.
  1. Click the **Create repository** button.

  ## Cloning a Repository
  1. Navigate to your repository on [GitHub.com](https://www.github.com).
      - If you just created the repository, you are already there!
  1. Click the **Clone or download** button.
  1. Copy the **Clone with HTTPS** web url.
      - You can also clone using SSH, just click the **Use SSH** option and copy that address.
  1. Open a terminal and navigate to a location on your local machine where you want the course repository to go.
  1. Enter: `git clone ADDRESS`, where address is the web url you copied from your repository. This clones your repository to your local machine!  
  1. Enter: `cd REPONAME`, where REPONAME is the name of the repository you just cloned to your machine.  

show-me-how:
tell-me-why:
---
