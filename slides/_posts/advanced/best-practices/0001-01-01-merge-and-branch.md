---
chapter: Best practices
layout: slide
title: ''
tags:
- best-practices
---

{% capture notes %}
* Collapsing commits during merge
* Checking merge state
* Cleaning up branches
{% endcapture %}
{% include hydeslides/core/notes %}

```bash
$ git merge --squash [branch]

$ git branch --contains [commit]

$ git branch --merged [commit]

$ git branch --no-merged [commit]
```
