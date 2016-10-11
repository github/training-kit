---
layout: intro-to-github
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Editing Files
permalink: /intro-to-github/07/
sidebar:
  nav: "intro-nav"
---

# Editing Files in Pull Requests

If you have received comments on your pull request, you may need to make a few changes. This video will show you how:

<iframe width="560" height="315" src="https://www.youtube.com/embed/F0IvcyTwDt4" frameborder="0" allowfullscreen></iframe>


## Help: My Build Failed

The class repository is using continuous integration through [Travis CI](https://travis-ci.org) to run tests on the code you have entered. To put it simply, it is checking to make sure the syntax is correct in your TopoJson file.

TopoJson is very picky. If you made any mistakes, you will see a message that your build has failed. This usually means that the TopoJson you entered is incorrect. Check the syntax carefully against the instructions and edit your file as needed.

When you commit your changes, Travis CI will re-check your file.

Keep doing this until you see a message that the build has passed. If you need help, don't forget you can find us in chat or @ mention githubteacher in your pull request.

## Help: Something Else is Wrong

This is a busy repository with a lot of contributors. If you see a different message, check the troubleshooting guide below:

| Message | What to do? |
| -------- | ---------- |
| **This branch is out-of-date with the base branch** | This message is telling you that changes have been made on master that need to be applied to your branch before it can be merged. You will see an `Update Branch` button to the right of this message. Click that button and you will be in business. |
| **This branch has conflicts and cannot be merged** | This message is telling you that someone has made a change to master that conflicts with the changes you made in your file. In this class, it is usually because someone has created a file for the same city and the process to pull it in to the main file has not completed. Give it a few minutes to finish. If the message is still there, @ mention githubteacher and we will help you get it resolved! |

[Continue with this class](../08){: .btn}
