---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Your First Conflict
permalink: /merge-conflicts/first-conflict/
next-page: /merge-conflicts/mc-description/
sidebar:
  nav: "merge-conflicts"
main-content: |
  You're here to learn about conflicts! So let's get conflicted.

  1. Check out to the `master` branch.
  1. In `_config.yml` change the same lines 2-3 to change your resume's title, and description. Ensure your changes are different from those in step 2.
  1. Return to your Pull Request. A conflict now appears because `my-title` is based on a previous point in history, and new commits override our proposed change. Let's solve this, our first conflict. Click on **Resolve conflict**.
  1. Remove the conflict markers and choose your desired title.
  1. Click **Mark as resolved**.
  1. Your Pull Request is now free of conflicts. Press the big green button to merge your pull request!

tell-me-why:
---
