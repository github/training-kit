---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Configuring Git
permalink: /windows/configure-git
next-page: /windows/git-crlf
sidebar:
  nav: "windows"
main-content: |
  After installing Git, it is necessary to setup some of the configuration options. The configuration options you need to define include, `user.name`, `user.email`, and `core.autocrlf`.

  The following steps will require you to open a terminal application such as **Git Bash** or **PowerShell** and Git to be installed. To confirm that Git is installed, run `git --version` and your terminal application should display a response similar to `git version x.xx`, where x.xx is the version number.

  ### Defining `user.name`
  1. In your terminal application enter, `git config --global user.name "your name"`; where `your name` is the name you want to attributed to the commits you make.

  ### Defining `user.email`
  1. In your terminal application enter, `git config --global user.email your_email@email.com`; where `your_email.mail.com` is the e-mail address associated with your GitHub account.

  Now that you have configured your user name and email, it is time to define your Carriage Return Line Feed (crlf) on the next page.

show-me-how: "images/gifs/intro/example.gif"
tell-me-why: |

---
