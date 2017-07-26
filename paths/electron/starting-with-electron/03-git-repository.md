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
  If you create a [file in your repository named .gitignore](https://help.github.com/articles/ignoring-files/), Git uses it to determine which files and directories to ignore, before you make a commit.

  We want to use a `.gitignore file` for Node, since Electron is a Node based project.

  1. Create a file in your repository called `.gitignore`, either in your text editor, or by typing `touch .gitignore` in your terminal.
  1. Copy and paste the contents of [this template](https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore) into the `.gitignore` file. Save the file.

  ### Initial Commit
  1. Type `git status` again, and see that all of your files are currently untracked in the working tree.
  1. To craft a commit, we will use `git add`. This way, we will be particular about what files are in each commit. We will first commit the `.gitignore` file with `git add .gitignore`, and then `git commit -m "initial commit with gitignore"`.
  1. To add the rest of the files, type `git add project.json index.js`, and `git commit -m "initial electron boilerplate files"`.

  ### Pushing to GitHub
  1. On [GitHub.com](https://github.com/), [create a new repository](https://help.github.com/articles/creating-a-new-repository/). To avoid errors, do not initialize the new repository with `README`, `license`, or `.gitignore` files. You can add these files after your project has been pushed to GitHub.
  1. At the top of your GitHub repository's Quick Setup page, copy the remote repository URL.   
  1. In Terminal, [add the URL for the remote repository](https://help.github.com/articles/adding-a-remote/) where your local repository will be pushed.
  1. [Push the changes](https://help.github.com/articles/pushing-to-a-remote/) in your local repository to GitHub.

show-me-how:
tell-me-why:

---
