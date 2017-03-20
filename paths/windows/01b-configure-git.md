---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Configure Git
permalink: /windows/configure-git
next-page: /windows/git-crlf
sidebar:
  nav: "windows"
main-content: |
  After installing Git, it is necessary to setup some of the configuration options. The configuration options you need to define include, `user.name`, `user.email`, and `core.autocrlf`.

  The following steps will require you to open a terminal application such as **Git Bash** or **PowerShell** and Git to be installed. To confirm that Git is installed, run `git --version` and your terminal application should display a response similar to `git version x.xx`, where x.xx is the version number.

  ## Defining `user.name`
  1. In your terminal application enter, `git config --global user.name "your name"`; where `your name` is the name you want to attributed to the commits you make.

  ## Defining `user.email`
  1. In your terminal application enter, `git config --global user.email your_email@email_host.com`; where `your_email@mail_host.com` is the e-mail address associated with your GitHub account.

  Now that you have configured your user name and email, it is time to define your Carriage Return Line Feed (crlf) on the next page.

show-me-how: "images/gifs/windows/configure-git.gif"
tell-me-why: |

  ## Why --global?

  Git allows you to set configuration options at three different levels.

    - `--system` These are system-wide configurations. They apply to all users on this computer.
    - `--global` These are the user level configurations. They only apply to your user account and will be applied to every repository you create or clone under your account.
    - `--local` - These are the repository level configurations. They only apply to the specific repository where they are set.

  The default value for git config is `--local`. `--local` has precedence so setting something at the local level will override settings at the `--global` or `--system` level.
  ![](/on-demand/images/config-levels.jpg){: .align-center}
---
