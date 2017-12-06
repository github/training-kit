---
lang: en
ref: gh-desktop-12
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Push to GitHub with GitHub Desktop
permalink: /github-desktop/push-with-github-desktop
next-page: /github-desktop/add-github-pages-site-showcase
facilitator: false
sidebar:
  nav: "github-desktop-nav"
main-content: |

  After you merge your Pull Request, you will need to update your local copy of the repository.

  ![gif of following the directions below](../images/gifs/github-desktop/sync-changes.gif)

  1. Navigate back to GitHub Desktop.
  1. Select the `master` branch at the top of the app.
  1. Click the button that displays **Fetch Origin** to get an updated status for the remote repository.
  1. Then click **Pull Origin** to retrieve the changes to your local repository.

show-me-how:
tell-me-why: |
  ## Keeping your local repository in sync

  As we discussed previously, GitHub Desktop doesn't require an internet connection which means it doesn't communicate with remote repositories unless explicitly instructed to do so.

  When you merge your Pull Request on GitHub.com, the changes you made locally are merged into the `master` branch on the _remote_ repository on GitHub.

   However, you won't automatically see those changes reflected in your local copy until you get an update from _origin_.

  You should `Fetch Origin` regularly, and then `pull` or `push` as necessary to ensure you are always working with the most recent copies of the files in the repository.

---
