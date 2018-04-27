---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
help: https://github.com/githubtraining/on-demand-merge-conflict/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
title: Your First Conflict
permalink: /merge-conflicts/first-conflict/
next-page: /merge-conflicts/example-01/
sidebar:
  nav: "merge-conflicts"
main-content: |
  You're here to learn about conflicts! So let's get conflicted.

  [![walkthrough of a merge conflict](../../images/gifs/merge-conflict/first-example.gif)](../../images/gifs/merge-conflict/first-example.gif)

  1. Check out to the `master` branch.
  1. In `_config.yml`, change lines 2-3 again to update your resume's title, and description. Ensure your changes are different from those in step 2 from the previous page of instructions.
  1. Return to your Pull Request. A conflict now appears because `my-title` is based on a previous point in history, and new commits override our proposed change. Let's solve this, our first conflict. Click on **Resolve conflict**.
  1. Remove the conflict markers and choose your desired title.

      > To dive into all of the odd symbols on your screen, check out the **Tell me why** section.

  1. Click **Mark as resolved**.
  1. Click **Commit merge**.
  1. Your Pull Request is now free of conflicts. Click **Merge pull request** to merge your pull request!

tell-me-why:
  includes:
    - /tell-me-why/merge-conflict.md
---
