---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Normal Merge
permalink: /merge-conflicts/normal-merge/
next-page: /merge-conflicts/mc-description/
sidebar:
  nav: "merge-conflicts"
main-content: |
  Before we delve into the world of _merge conflicts_, we should discuss what a normal merge is doing. When you take some commits from the _new-feature_ branch and merge it into _master_ you are simply applying the commits that you made on the _new-feature_ branch on the _master_ branch.

  It isn't uncommon to merge a bunch of branches before you encounter your first _merge conflict_. That is because Git is _really_ smart when it comes merging. But, sometimes you and another collaborator both have an idea for a change to the same code and Git needs you to examine the conflicting changes before it can successfully implement the changes.

  Let's see a normal merge, and how it differs from a merge conflict.

  1. In your fork, create a new branch: `my-title`
  1. In `_config.yml` and change lines 2-3 to give you resume a title, and a description.
  1. Commit your changes.
  1. Open a Pull Request. Change the base fork to `username/on-demand-merge-conflict`. Use **base:** of `gh-pages` and **compare:** of `my-title`
  1. This pull request can be merged and contains no conflicts. This is because no conflicting commits appear on `master`, the target of our merge.
  1. But you're here to learn about conflicts! So let's get conflicted. Check out to the the `master` branch.
  1. In `_config.yml` change the same lines 2-3 to change your resume's title, and description. Ensure your changes are different from those in step 2.
  1. Return to your Pull Request. A conflict now appears because `my-title` is based on a previous point in history, and new commits override our proposed change. Let's solve this, our first conflict. Click on **Resolve conflict**.
  1. Remove the conflict markers and choose your desired title.
  1. Click **Mark as resolved**.
  1. Your Pull Request is now free of conflicts. Merge!

tell-me-why: |
  There are two types of merge strategies that we're interested in: fast forward and recursive

  In a *fast forward merge*, no commits have occurred in our target branch since we branched. Therefore, the easiest way to combine the changes from both branches is to fast-forward the HEAD pointer your most recent commit on the topic branch. Because the history of both branches is one and the same, there no competition and, therefore, no possibility for merge conflicts in a fast forward merge.

  In a *recursive merge*, commits have occurred in both branches since we branched. Not all recursive merges result in conflicts, but when the new history (since merging) of both branches attempt to edit the same line of the same file, a merge conflict will appear. 

---
