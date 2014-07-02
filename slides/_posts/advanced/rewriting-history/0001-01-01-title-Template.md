---
chapter: Rewriting history
layout: slide
title: ''
tags:
- rewriting-history
---

{% capture notes %}
* Branch Preparation
* Rebasing __is not__ merging
* Conflicts can occur
* Resolution is simple
* Small variation to merge conflict
{% endcapture %}
{% include hydeslides/core/notes %}

Re-playing branch-specific commits against a base

```bash
$ git checkout <featurebranch>
$ git rebase master
```

Configuring all `pull` for tracking branches to replay local commits ahead of upstream

```bash
$ git config pull.rebase true
```

Resolving a conflict during a rebase

```bash
$ git add [conflicting-file]
$ git rebase --continue
```
