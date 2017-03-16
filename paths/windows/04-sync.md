---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Sync?
permalink: /windows/vs-sync
next-page: /windows/
sidebar:
  nav: "windows"
main-content: |
  As you learn to iteratively make changes to your project using git, you might be curious about what the `Sync` button does. Although `Sync` isn't a git command, some GUI environments provide a `sync` button to both update your local files and push your local changes to your remote (your hosted repository).

  ### GitHub Extension for Visual Studio
  The Sync button is available on the **Team Explorer** pane and and also displayed after you create a commit using the extension. The **sync** tool enables you to select how you want to update the project:
    - **sync** - performs a `git pull` and a `git push`.
    - **fetch** - performs a `git fetch` which retrieves any commits on from your remote without merging them.
    - **pull** - performs a `git pull`.
    - **push** - performs a `git push`.

  ### GitHub Desktop
  - First, a `git pull` is performed to retrieve the latest changes from your remote (or hosted) git repository.`
  - Second, a `git push` is performed, which sends all of the `commit`s you made locally to your remote git repository.



show-me-how: "images/gifs/intro/example.gif"
tell-me-why: |
  Tell Me Why content
---
