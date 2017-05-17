---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: What is Sync?
permalink: /windows/vs-sync
next-page: /windows/congrats
sidebar:
  nav: "windows"
main-content: |
  As you learn to iteratively make changes to your project using git, you might be curious about what the `Sync` button does. Although `Sync` isn't a git command, some GUI environments provide a `sync` button to both update your local files and push your local changes to your remote (your hosted repository).

  ## GitHub Extension for Visual Studio
  The **Sync** button is available on the **Team Explorer** pane and and also displayed after you create a commit using the extension. The **sync** tool enables you to select how you want to update the project:

    - **sync** - performs a `git pull` and a `git push`.
    - **fetch** - performs a `git fetch` which retrieves any commits on from your remote without merging them.
    - **pull** - performs a `git pull`.
    - **push** - performs a `git push`.

tell-me-why: |
  One of the primary reasons to use a collaborative version control system like Git is the ability to collaborate with other people on your project and 'syncing' allows you to share the changes you have made with those other collaborators. In a typical workflow, after making `commit`s to your project, you should be `push`ing those `commit`s to your remote repository.

  As stated above, the use of 'Sync' is just a design decision that the developers for different GUI environments supporting Git workflows used to familiarize users with the idea of sharing their changes and retrieving changes from other users.
---
