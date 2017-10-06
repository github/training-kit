---
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Create Local Branches With Git
permalink: /github-cli/create-branches-git
next-page: /github-cli/make-local-changes-git
facilitator: false
sidebar:
  nav: "github-cli"
main-content: |

  Now that you have a local copy of the repository, let's use the steps of the [GitHub Flow](https://guides.github.com/introduction/flow/) to make a change in your project. First we will create a branch.

  ![gif of following the directions below](../images/gifs/github-cli/branching.gif)

  1. Create a new branch. Replace `<BRANCH-NAME>` with descriptive name:

          git branch <BRANCH-NAME>

  1. Check your repository's status:

          git status

        > Notice that although you created a new branch, you are still checked out to `master`, as indicated by the in-line response from Git.

  1. Check out to your new branch:

          git checkout <BRANCH-NAME>

  1. Verify that you are now checked out to your new branch:

          git status

show-me-how:
tell-me-why:
  includes:
    - tell-me-why/branching.md
---
