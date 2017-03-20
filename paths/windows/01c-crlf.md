---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Configure Line Endings
permalink: /windows/git-crlf
next-page: /windows/git-credentials
sidebar:
  nav: "windows"
main-content: |
  Git is a really powerful collaboration tool, but not everyone you collaborate with uses the same operating system. Thankfully, Git is comes to the party equipped with all the tools necessary to make collaborating easy, you just need to identify what OS you are working on so Git can take care of the rest.

  1. Open your terminal application.
  1. Enter: `git config --global core.autocrlf true`. These instructions assume you are using Windows, if you are using macOS or a flavor of Linux, use the following: `git config --global core.autocrlf input`.
  1. To ensure you applied the configuration setting, you can enter: `git config --global --list` to view the different configurations settings.

show-me-how: "images/gifs/windows/configure-crlf.gif"
tell-me-why: |

  ### What does autocrlf do?

  If you're using Git to collaborate with others on GitHub, ensure that Git is properly configured to handle line endings.

  Every time you press return on your keyboard you're actually inserting an invisible character called a line ending. Historically, different operating systems have handled line endings differently.

  When you view changes in a file, Git handles line endings in its own way. Since you're collaborating on projects with Git and GitHub, Git might produce unexpected results if, for example, you're working on a Windows machine, and your collaborator has made a change in OS X.

  For more information about autocrlf, see the [GitHub Help documentation](https://help.github.com/articles/dealing-with-line-endings/).
---
