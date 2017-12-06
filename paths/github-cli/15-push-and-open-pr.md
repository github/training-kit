---
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Review Pushing and Opening Pull Requests
permalink: /github-cli/git-push-open-pull-request
next-page: /github-cli/collaborate-github-pull-requests
facilitator: false
sidebar:
  nav: "github-cli"
main-content: |

  Now that you have made some local commits, it is time to send your changes to the remote copy of your repository on GitHub.com and create a Pull Request.

  ![gif of following the directions below](../images/gifs/github-cli/sync-changes.gif)

  1. Push your commits to the remote, and set a remote tracking branch:

          git push -u origin <BRANCH-NAME>

  1. Enter your GitHub username and password, if prompted to do so.
  1. Create a Pull Request on GitHub.
  1. Fill out the body of the Pull Request with information about the changes you're introducing.

show-me-how:
refresh:
   includes: refresh/github-CLI/pull-request.md
tell-me-why:
  includes:
    - tell-me-why/pull-request.md

---
