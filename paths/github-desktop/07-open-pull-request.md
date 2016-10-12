---
layout: intro-to-github
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Collaborating on Your Changes With GitHub
permalink: /github-desktop/07/
facilitator: false
sidebar:
  nav: "github-for-everyone"
---

{% include toc %}

## Distributed Version Control

Now that you have made some changes and committed them, let's talk about what has happened to the copy of your repository on GitHub. Go back to your repository on GitHub.com and look for the branch you created on GitHub Desktop. Is it there?

![](http://i.giphy.com/ly8G39g1ujpNm.gif){: .align-center}

The answer should be "No".

Congratulations, you have just discovered one of the coolest features of Git and Distributed Version Control (DVC). GitHub Desktop does not maintain a continuous connection with GitHub.com because, just like Git, it is designed for work offline. This means you can clone a repository to your desktop, hike to a remote mountain top, and enjoy hacking on your favorite project with a cup of warm coffee. When you make it back down to camp, you can connect to the internet and send your changes to the remote copy of your repository on GitHub.

## DVC with GitHub Desktop

To keep things efficient, GitHub Desktop allows you to push your new branch to the remote and create a pull request in a single click. Let's see how it is done. The main 'base' branch on your repository is `master`.

{% include activity/github-desktop/06-pull-request.md %}

[Continue](../08/){: .btn}
