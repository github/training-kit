---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Merge Conflict Description
permalink: /merge-conflicts/mc-description/
next-page: /merge-conflicts/gh-pages/
sidebar:
  nav: "merge-conflicts"
main-content: |
  To explain a merge conflict, it might be useful to have an example. Imagine we are creating a template for people to describe themselves. You might have something like looks like this:

  ```
  Name: First Last
  Location: I Live Here
  Favorite Animal: Octocat
  ```

  Now lets imagine that Linda and Louise Belcher decide to change the default `Favorite Animal` in the template. So you might have something that looks like this:

  **Louise**
  ```
  Favorite Animal: Kuchi Kopi
  ```

  **Linda**
  ```
  Favorite Animal: Akkorokamui
  ```

  When **Louise** merges her changes into the deployment branch, she won't encounter a merge conflict.

  ![louise laughing over fire](https://media.giphy.com/media/dfIQG68floQuY/giphy.gif)
  
  However, when **Linda** tries to merge her changes into the deployment branch, she is going to encounter a merge conflict.

  ![linda screaming](https://media.giphy.com/media/l0IyoieFSfr2Xcbza/giphy.gif)
---
