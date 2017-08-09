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

  Throughout this tutorial, we won't guide you too much on using Git. For all of the code, we recommend using branches and atomic commits, as well as pushing to the remote frequently.

  > Not sure what to do with Git or GitHub? [Check out some of the on-demand courses to learn more!](https://services.github.com/on-demand/)

  By default, the boilerplate initialized this directory as a git repository, so we won't need to do any extra work to get this set up.

  ### Understanding the `.gitignore` file
  Also, there's a [file in your repository named .gitignore](https://help.github.com/articles/ignoring-files/). Git uses this to determine which files and directories to ignore, before you make a commit.

  We want to use a `.gitignore file` for Node, since Electron is a Node based project. Typically, we would do this manually. Since we used a boilerplate, this is already done. If you're interested in learning about different `.gitignore` files, check out [this repository full of templates](https://github.com/github/gitignore).

  ### Initial Commit
  1. Type `git status` again, and see that all of your files are currently untracked in the working tree.
  1. To craft a commit, we will use `git add`. This way, we will be particular about what files are in each commit. We will first commit the `.gitignore` file with `git add .gitignore`, and then `git commit -m "initial commit with gitignore"`.
  1. To add the rest of the files, type `git add .`, and `git commit -m "add electron boilerplate files"`.

  ### Pushing to GitHub
  1. On [GitHub.com](https://github.com/), [create a new repository](https://help.github.com/articles/creating-a-new-repository/). To avoid errors, do not initialize the new repository with `README`, `license`, or `.gitignore` files. You can add these files after your project has been pushed to GitHub.
  1. Follow the steps for pushing an existing repository from the command line.
  1. In your Command Line Interface (CLI), [add the URL for the remote repository](https://help.github.com/articles/adding-a-remote/) where your local repository will be pushed.
  1. [Push the changes](https://help.github.com/articles/pushing-to-a-remote/) in your local repository to GitHub.

show-me-how:
tell-me-why:

---
