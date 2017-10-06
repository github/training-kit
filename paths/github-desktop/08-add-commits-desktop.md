---
lang: en
ref: gh-desktop-08
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Add Local Commits With GitHub Desktop
permalink: /github-desktop/add-commits-github-desktop
next-page: /github-desktop/pull-request-github-desktop
facilitator: false
sidebar:
  nav: "github-desktop-nav"
main-content: |

  After you have finished making your changes, it is time to commit them.

  ![gif of following the directions below](../images/gifs/github-desktop/making-commits-locally.gif)

  1. Click the **changes** tab in the left sidebar to see a list of the files that have been changed or added since the last commit.
  1. Use the checkboxes to indicate which files should be part of the commit. In this activity, you'll select the `index.html` file.

        *Note: It is a good idea to group files together based on the type of changes or the file content. For example, if you fixed the same formatting issue in several documents, you should group them into one commit.*

  1. Type your commit message in the Summary field.
  1. You will notice that GitHub Desktop has already populated the commit button with the current branch. Simply click the button to commit your changes.

show-me-how:
tell-me-why: |
  ## Making great commits

  When you work on GitHub.com, a commit can only include the changes you made to a single file. But, when you work in the desktop app, you have a lot more control over your commits.

  With GitHub Desktop, a commit can include multiple files, or you can pick a specific change within a file you would like to commit.

  When you assemble the changes you have made, you should try to create what we like to call an **atomic commit**. In other words, each commit you make should contain changes that belong together and represent a discrete unit of work.
---
