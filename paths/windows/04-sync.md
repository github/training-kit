---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Sync?
permalink: /windows/01
next-page: /windows/02
sidebar:
  nav: "windows"
main-content: |
  As you learn to iteratively make changes to your project using git, you might find yourself in GitHub Desktop and curious what the `Sync` button does. Although `Sync` isn't a git command, when you click the `Sync` button, two distinct git commands are executed.
  - First, a `git pull` is performed to retrieve the latest changes from your remote (or hosted) git repository.
  - Second, a `git push` is performed, which sends all of the `commit`s you made locally to your remote git repository.

show-me-how: "images/gifs/intro/example.gif"
tell-me-why: |
  Tell Me Why content
---
