---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Creating a Git Repository
permalink: /electron/starting-with-electron/init-git-repository
next-page: /electron/starting-with-electron/create-app-files
facilitator: false
sidebar:
  nav: "electron-getting-starting"
main-content: |

  We have a great start of an Electron app. But, it's not being tracked with version control. Now, it's time to track this repository with Git, include a .gitignore file that fits this project, and push this up to a remote on GitHub.

  ### Initialize as a Git Repo
  1. Ensure you're in the correct directory by typing `pwd`. You want to be in the root level directory of the electron-project.
  1. Ensure that this isn't already a Git repository by typing `git status`. You should see a response: `fatal: Not a git repository (or any of the parent directories): .git`.
  1. Type `git init`. This initializes Git within this directory, so it will now be a Git repository.
  1. Type `git status` again to ensure it is now a repository.

  > Not sure what to do with Git or GitHub? [Check out some of the on-demand courses to learn more!](https://services.github.com/on-demand/)

  ### Add a `.gitignore` file
  - Important things for `.gitignore` in this type of project

  ### Pushing to GitHub
  - show them how to take an existing project and ADD it to GitHub since we normally have them set the repo up on GH then clone it


  # ToDo
     - fill out gitignore
     - fill out pushing to github

show-me-how:
tell-me-why:

---
