---
lang: en
ref: gh-desktop-06
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Create Local Branches With GitHub Desktop
permalink: /github-desktop/create-branches-github-desktop
next-page: /github-desktop/make-changes-github-desktop
facilitator: false
sidebar:
  nav: "github-desktop-nav"
main-content: |

  Now that you have a local copy of the repository, let's use the steps of [GitHub Flow](https://guides.github.com/introduction/flow/) to make a change in your project. First we will create a branch.

  ![gif of following the directions below](../images/gifs/github-desktop/create-branch-on-desktop.gif)

  1. Within GitHub Desktop, click "Branch", then click "New Branch".
  1. In the `Name` field, type a meaningful name for your branch. Something like `add-index-page` will work nicely.
  1. If you have been following the directions exactly, GitHub Desktop knows to create the new branch based on `master` because it is the branch you were checked out to when you clicked the "New Branch" option.
  1. GitHub Desktop will automatically create your new branch and switch you to it.

show-me-how:
tell-me-why:
  includes:
    - tell-me-why/branching.md
---
