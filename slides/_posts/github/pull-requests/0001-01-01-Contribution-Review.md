---
chapter: Pull Requests
layout: slide
title: ''
tags: ['github/pull-requests']
---

* Non-Invasive Contribution Pattern
* Promotes Peer Review
* Allows for Team Sign-Off


{% capture notes %}
* Not retrieved by fetch by default
* `git ls-remote` to examine all branches
* Auto-fetch all Pull Requests
    * `git config --add remote.<name>.fetch <refspec>`
    * `+refs/pull/*/head:refs/remotes/origin/pull/*`
{% endcapture %}
{% include hydeslides/core/notes %}
