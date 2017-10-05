---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Merge Conflict Description
permalink: /merge-conflicts/mc-description/
next-page: /merge-conflicts/example-01/
sidebar:
  nav: "merge-conflicts"
main-content: |
  To explain a merge conflict, it might be useful to have an example. Imagine we are creating a template for people to describe themselves. You might have something that looks like this:

  ```
  Name: First Last
  Location: I Live Here
  Favorite Animal: Octocat
  ```

  Now, let's imagine that Matt and Briana decide to change the default `Favorite Animal` in the template. So they might have something that looks like this:

  **Matt**
  ```
  Favorite Animal: Capybara
  ```

  **Briana**
  ```
  Favorite Animal: Giraffe
  ```

  When **Matt** merges her changes into the deployment branch, he won't encounter a merge conflict.

  However, when **Briana** tries to merge her changes into the deployment branch, she is going to encounter a merge conflict.

---
