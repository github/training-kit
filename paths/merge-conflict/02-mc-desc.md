---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
help: https://github.com/githubtraining/on-demand-merge-conflict/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
title: Merge Conflict Description
permalink: /merge-conflicts/mc-description/
next-page: /merge-conflicts/first-conflict/
sidebar:
  nav: "merge-conflicts"
main-content: |
  To explain a merge conflict, it might be useful to have an example. Imagine we are creating a template for people to describe themselves. You might have something that looks like this:

  ```
  Name: First Last
  Location: I Live Here
  Favorite Sports Team: Golden State Warriors
  ```

  Now, let's imagine that Matt and Briana decide to change the default `Favorite Sports Team` in the template. So they might have something that looks like this:

  **Matt**
  ```
  Favorite Sports Team: San Francisco Giants
  ```

  ![octocat dressed as a San Francisco Giants](https://octodex.github.com/images/wilson.jpg)

  **Briana**
  ```
  Favorite Sports Team: San Francisco 49ers
  ```

  ![octocat dressed as a San Francisco 49er](https://octodex.github.com/images/goretocat.png)

  When **Matt** merges his changes into the deployment branch, he won't encounter a merge conflict.

  However, when **Briana** tries to merge her changes into the deployment branch, she is going to encounter a merge conflict.

---
