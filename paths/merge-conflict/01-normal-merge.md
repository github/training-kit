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

---
