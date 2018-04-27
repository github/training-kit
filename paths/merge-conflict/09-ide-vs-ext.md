---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
help: https://github.com/githubtraining/on-demand-merge-conflict/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
title: GitHub Extension for Visual Studio
permalink: /merge-conflicts/ide-vs-ext/
next-page: /merge-conflicts/ide-intro/
sidebar:
  nav: "merge-conflicts"
main-content: |
  The [GitHub Extension for Visual Studio](https://visualstudio.github.com/) editor enables you to identify the difference between the two files and automatically fix the merge conflicts by selecting a specific branch.

  While the merge conflict tool found in Visual Studio isn't specific to having the GitHub Extension installed, the extension allows you to log in quickly (even with two factor authentication), and utilize aspects of GitHub such as pull requests and quickly clone repositories.

  [![instructions for this activity](../../images/gifs/merge-conflict/vs-merge.gif)](../../images/gifs/merge-conflict/vs-merge.gif)

  To see the GitHub Extension for Visual Studio merge conflict tool in action, perform the following:

  > If you already completed all of the exercises in this course, you can re-import the course repository and give it a different name.

  1. Select **File > Open >  Open from Source Control** from the main menu.
  1. Search for and clone your repository.
  1. From the branch selection tool in the bottom right corner, select **New Branch**.
  1. From the `master` drop-down, select `origin/username-config`. Ensure the **Checkout branch** and **Track remote branch** options are selected and click the **Create Branch** button.
  1. Select the **Solutions Explorer** tab.
  1. Open the `_config.yml` file.
  1. Edit the `_config.yml` file, making changes to lines 12-19 and save the file.
  1. Right-click the `_config.yml` file and select **Commit**.
  1. Right-click the `_config.yml` file in the Changes pane and select **Stage**.

      > If you haven't saved the changes you made to the `_config.yml` file you will be prompted to save your changes.

  1. With the '_config.yml' file staged, enter a commit message and click **Commit Staged**.
  1. Checkout the `master` branch from the branch selection tool in the bottom right corner.
  1. Select the **Manage Branches** option from the branch selection tool in the bottom right corner.
  1. Right-click the _master_ branch and select the **Merge From...** option.
  1. Select the `username-config` branch in the **Merge from branch:** drop-down.
  1. Ensure the `master` branch is selected in the **Into current branch:** drop-down.
  1. Click the **Merge** button.
  1. When the merge conflict occurs, click the **Conflicts: 1** option just below the Merge In Progress text.
  1. Click on the `_config.yml` file and select the **Diff** option. This will display the difference between the two branches.
  1. Click the **Take Source** option to merge the changes from the `username-config` branch into the `master` branch.
  1. Click the **Commit Merge** button.
  1. Enter a commit message in the commit message field and click the **Commit Staged** button.
  1. Congratulations, you resolved a merge conflict locally with the GitHub Extension for Visual Studio!

  ![octocat wearing a red polo](https://octodex.github.com/images/red-polo.png)
---
