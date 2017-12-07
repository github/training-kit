---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
help: https://github.com/githubtraining/on-demand-merge-conflict/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
title: A Normal Merge
permalink: /merge-conflicts/normal-merge/
next-page: /merge-conflicts/mc-description/
sidebar:
  nav: "merge-conflicts"
main-content: |
  Before we delve into the world of merge conflicts, we should discuss what a merge is normally doing. Let's say you take some commits from the `new-feature` branch and merge them into `master`. The merge process applies the commits that you made on the `new-feature` branch to the `master` branch.

  ![example of new-feature merging into master](../../images/master-new-feature-merge.png)

  It's common to merge a lot of branches with no problems before you encounter your first merge conflict. That's because Git is really smart when it comes merging. However, sometimes you and another collaborator both have an idea for a change to the same code, and Git needs you to examine the conflicting changes before it can successfully implement the changes.

  Let's see a normal merge, and how it differs from a merge conflict.

  [![creating a pull request](../../images/gifs/merge-conflict/normal-merge.gif)](../../images/gifs/merge-conflict/normal-merge.gif)

  1. In your repository, create a new branch named `my-title`
  1. In `_config.yml`, change lines 2-3 to give your resume a title, and a description.
  1. Commit your changes.
  1. Open a Pull Request. Set the **base:** drop-down to `master` and the **compare:** drop-down of `my-title`
  1. :warning: Do not merge yet! :warning: This pull request can be merged and contains no conflicts. This is because no conflicting commits appear on `master`, the target of our merge. We will introduce a conflict and merge in the following page.

tell-me-why: |

  There are two types of merge strategies that we're interested in: fast forward and recursive

  In a *fast forward merge*, no commits have occurred in our target branch since we branched. Therefore, the easiest way to combine the changes from both branches is to fast-forward the HEAD pointer to your most recent commit on the topic branch. Because the history of both branches is one and the same, there's no competition and, therefore, no possibility for merge conflicts in a fast forward merge.

  In a *recursive merge*, commits have occurred in both branches since we branched. Not all recursive merges result in conflicts, but when the new commits (since merging) on both branches attempt to edit the same line of the same file, a merge conflict will appear.

---
