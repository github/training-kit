---
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Git Configuration
permalink: /github-cli/git-configuration
next-page: /github-cli/create-remote-repository
facilitator: false
sidebar:
  nav: "github-cli"
main-content: |

  This class uses the command line, so first you will need to find and open your terminal. For Windows, we recommend using [**Git Shell** or **Git Bash**](https://git-scm.com/download/windows). For Mac or Linux, your default Terminal will work.

  Before you can work with Git on the command line, you will need to set some basic configurations.

  ![gif of following the directions below](../images/gifs/github-cli/git-configuration.gif)

  1. Open your Terminal application.
  2. Ensure Git 1.9.5 or :arrow_up: is installed, type:

          git --version

        > If your Git version is below 1.9.5, check [git-scm.com](https://git-scm.com/) to download the latest version.

  3. Set your name in Git by replacing `<YOUR NAME>` with your first and last name:

          git config --global user.name <YOUR NAME>

  4. Set your email in Git by replacing `<EMAIL>` with the email associated with your GitHub account.

          git config --global user.email <EMAIL>

  5. Set line-ending behavior for your operating system:
        - On Windows:

              git config --global core.autocrlf true

        - On Mac and Unix-like systems:

              git config --global core.autocrlf input

  6. To see your current configurations, type:

          git config --list

show-me-how:
tell-me-why:
 includes:
    - tell-me-why/git-configuration.md
---
