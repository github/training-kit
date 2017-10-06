---
lang: en
ref: gh-desktop-15
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Push to GitHub & Create a Pull Request
permalink: /github-desktop/push-pull-request-github-desktop
next-page: /github-desktop/collaborate-github-pull-requests
facilitator: false
sidebar:
  nav: "github-desktop-nav"
main-content: |

  Now that you have made some local commits, it is time to send your changes to the remote copy of your repository on GitHub.com and open a pull request.

  ![gif of following the directions below](../images/gifs/github-desktop/review-push-open-pr.gif)

  1. On GitHub Desktop, click the button to sync changes. This button changes states based on the changes that have been made in your local repository and on the remote. If no other changes have been made, it will read **Publish Branch**.
  1. In your browser, go to the ['Pull Requests' tab of the class repository](https://github.com/githubschool/on-demand-github-pages/pulls).
  1. Click ['New pull request'](https://github.com/githubschool/on-demand-github-pages/compare).
  1. Ensure the `base` branch (the one on the left) is `master` and that the `compare` branch (the one on the right) is the one you created on GitHub Desktop.
  1. Complete the fields of the pull request.

show-me-how:
tell-me-why:
  includes:
    - tell-me-why/pull-request.md

---
