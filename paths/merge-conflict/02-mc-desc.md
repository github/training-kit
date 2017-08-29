---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Merge Conflict Description
permalink: /merge-conflicts/mc-description
next-page: /merge-conflicts/gh-pages
sidebar:
  nav: "merge-conflicts"
main-content: |
  To explain a merge conflict, it might be useful to have an example. Imagine we are creating a template for people to describe themselves. You might have something like looks like this:

  ```
  Name: First Last
  Location: I Live Here
  Favorite Animal: Octocat
  ```

  Now lets imagine that two collaborators on the project decide to change the default `Favorite Animal` in the template. So you might have something that looks like this:

  **Collaborator 1**
  ```
  Favorite Animal: Panda
  ```

  **Collaborator 2**
  ```
  Favorite Animal: Capybara
  ```

  When **Collaborator 1** merges their changes into the deployment branch, they won't encounter a merge conflict. However, when **Collaborator 2** tries to merge this changes into the deployment branch, they are going to encounter a merge conflict.

---
