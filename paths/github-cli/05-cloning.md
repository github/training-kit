---
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Clone the Repository Using the Command Line
permalink: /github-cli/clone-repo-cli
next-page: /github-cli/create-branches-git
facilitator: false
sidebar:
  nav: "github-cli"
main-content: |

  After you've created a repository on the remote, the next step is to clone it to your local environment.

  ![gif of following the directions below](../images/gifs/github-cli/git-clone.gif)

  1. Navigate to your repository's **Code** tab.
  1. Click **Clone or download**.
  1. Copy the URL provided.
  1. Open your command line or Terminal application and enter the directory where you would like to copy the repository. This can be anywhere in your local file system, like your home directory. For example:

          cd ~/

  1. Clone the repository by replacing `<URL>` with clone URL you copied in the previous step. The repository will be cloned into a new directory in this location.

          git clone <URL>

  1. Navigate into the directory of the repository you just created. Replace <REPOSITORY-NAME> with your own repository's name.

          cd <REPOSITORY-NAME>

  1. Type:

          git status

        > `git status` is a command you will use often to verify the current state of your repository and the files it contains. Right now, we can see that we are on branch `master`, everything is up to date with `origin/master` and our working directory is clean.

show-me-how:
tell-me-why:
  includes:
    - tell-me-why/local-remote.md
---
