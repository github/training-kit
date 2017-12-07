---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
help: https://github.com/githubtraining/on-demand-merge-conflict/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
title: Visual Studio Code
permalink: /merge-conflicts/ide-vs-code/
next-page: /merge-conflicts/ide-intro/
sidebar:
  nav: "merge-conflicts"
main-content: |
  The [Visual Studio Code](https://code.visualstudio.com/) editor enables you to remove merge conflicts similar to the GitHub.com UI.

  [![instructions for this activity](../../images/gifs/merge-conflict/vscode-merge.gif)](../../images/gifs/merge-conflict/vscode-merge.gif)

  To see the Visual Studio Code merge conflict tool in action, perform the following:

  > If you already completed all of the exercises in this course, you can re-import the course repository and give it a different name.

  1. Clone the repository locally.
  1. Checkout to the `username-config` branch.
  1. In the terminal, open **Visual Studio Code** using the `code .` command.

      > Depending on your operating system, you may need to [configure](https://code.visualstudio.com/docs/setup/setup-overview) this behavior.

  1. Edit the `_config.yml` file, making changes to lines 12-19 and save the file.
  1. Create a commit based on those changes.
  1. Checkout the `master` branch.
  1. Enter `git merge username-config` while on the `master` branch. You will encounter a merge conflict.

      > If there are multiple files within the merge, you can type `git status` to see which file (or files!) is causing the conflict.

  1. Open the `_config.yml` file with **Visual Studio Code**.
  1. Remove the merge conflict markers and the content you do not want to keep.
  1. Enter `git add _config.yml` followed by `git commit -m "Add my config changes"` and enter enter.
  1. Congratulations, you resolved a merge conflict locally with the Visual Studio Code editor!

  ![octocat wearing a red polo](https://octodex.github.com/images/red-polo.png)
---
