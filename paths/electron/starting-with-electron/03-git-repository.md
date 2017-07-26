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
  1. On [GitHub.com](https://github.com/), [create a new repository](https://help.github.com/articles/creating-a-new-repository/). To avoid errors, do not initialize the new repository with `README`, `license`, or `.gitignore` files. You can add these files after your project has been pushed to GitHub.
  1. At the top of your GitHub repository's Quick Setup page, copy the remote repository URL.   
  1. In Terminal, [add the URL for the remote repository](https://help.github.com/articles/adding-a-remote/) where your local repository will be pushed.
  1. [Push the changes](https://help.github.com/articles/pushing-to-a-remote/) in your local repository to GitHub.

show-me-how:
tell-me-why:

---
