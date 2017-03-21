---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Edit Files on GitHub
permalink: /intro-to-github/edit-files-on-github
next-page: /intro-to-github/merge-pull-request
sidebar:
  nav: "intro-nav"
main-content: |
  The class repository uses continuous integration to ensure that the file you have created meets all of the requirements. If something is wrong, you will see a message stating **Checks have failed**. Here is what you should do:

  1. Review the details to see why the checks are failing.
  2. Click the **Files changed** tab at the top of the Pull Request.
  3. On the far right side of the file header, click the pencil icon to open the web editor.
  4. Make the necessary changes.
  5. Scroll to the bottom of the page and add the commit to your branch.
  6. This will kick off a new round of checks!

troubleshooting:
  includes:
    - help-build-fail.md
    - help-other-things.md
show-me-how:
tell-me-why: |
  ## When Should You Edit?

  If your checks are failing or you have received comments on your pull request, you may need to make a few changes. This video will show you how:

  <iframe width="560" height="315" src="https://www.youtube.com/embed/F0IvcyTwDt4" frameborder="0" allowfullscreen></iframe>
---
