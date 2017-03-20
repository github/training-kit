---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Make a Commit
permalink: /windows/vs-make-commit
next-page: /windows/vs-sync
sidebar:
  nav: "windows"
main-content: |
  Crafting a commit using the GitHub Extension in Visual Studio is a relatively straightforward process.

  ## Creating a Commit
  1. Make changes to your project.
  1. In the **Team Explorer** pane, right-click a modified file and select **Commit**.

  ### Selecting All the files
  1. Enter a commit message identifying the changes you made.
  1. Click the **Commit all** button.

  ### Selecting Specific Files
  1. Enter a commit message identifying the changes you made.
  1. Right click the file(s) you want to add to the commit and select **Stage**.
  1. Click the **Commmit staged** button.

  ## Now what?
  After you have created a commit (or many commits) it is `push` your changes to your remote repository and potentially share it with other collaborators on your project.

show-me-how: "/images/gifs/windows/tfs-make-commit.gif"
tell-me-why: |
   Commits are your opportunity to  create a snapshot of your project at a given period in time. After creating a commit (or commits) you should `push` your changes to your remote repository so that other collaborators have access to the latest changes you have made to the project. Additionally, even if you are working on a project without other collaborators, `push`ing your changes to your remote repository acts as a backup and prevents you from losing changes should your local machine encounter issues.
---
