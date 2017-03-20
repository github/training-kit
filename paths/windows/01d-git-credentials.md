---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Store Your Password
permalink: /windows/git-credentials
next-page: /windows/editors
sidebar:
  nav: "windows"
main-content: |
  Entering your password in your terminal application of choice can become _really_ frustrating, so why not save your password? Saving your password is really simple, even if you are on a Windows machine! To store your password, enter the following in your terminal application:

  1. Enter,  `git config --global credential.helper wincred`
  1. Perform an operation that normally requires you to enter your password, like `git push`, enter your password when prompted, and you shouldn't have to enter it agin.

  For more information about caching your password, review the GitHub Help [documentation](https://help.github.com/articles/caching-your-github-password-in-git/#platform-windows).
show-me-how: "images/gifs/windows/configure-credmgr.gif"

---
