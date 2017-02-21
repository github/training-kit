---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Merge Your Pull Request
permalink: /intro-to-github/merge-pull-request
next-page: /intro-to-github/you-completed-github-flow
sidebar:
  nav: "intro-nav"
main-content:
  includes:
  - activity/intro-to-github/06-merge-a-pr.md
show-me-how: "images/gifs/intro/merge-intro.gif"
tell-me-why: |
  ## Merge Explained

  When you merge your branch, you are taking the content and history from the branch you created and adding it to the content and history of the `master` branch.

  ![Merge visual](/on-demand/images/merge-visual.jpg){: .align-center}

  ### Tips for Merging with Teams

  Many project teams have established rules about who should (or shouldn't) merge a pull request:

  - Some say it should be the person who created the pull request since they will be the ones to deal with any issues resulting from the merge.
  - Others say it should be a single person within the project team to ensure consistency.
  - Still others say it can be anyone other than the person who created the pull request.

  This is a discussion you should have with the other members of your team.

  ### Tools for Safer Merges

  GitHub also provides tools that can help you ensure that the code you are merging is safe! For example, this repository uses continuous integration to validate the syntax in your file and it uses protected branches to prevent you from merging the branch if your file contains errors. We will spend more time on these features in another class!


  ### Using Code Review

  GitHub also includes a code review feature that allows others to indicate they have looked over the code and either **Approve** it or **Request Changes**.

  ## Merging Your Pull Request

  When all of the comments have been addressed and all of the builds are passing, you are ready to merge your pull request. This video will show you how easy it is:

  <iframe width="560" height="315" src="https://www.youtube.com/embed/3MUmLHHxSqE" frameborder="0" allowfullscreen></iframe>

---
