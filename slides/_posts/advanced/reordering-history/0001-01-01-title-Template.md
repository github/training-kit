---
chapter: Reordering history
layout: slide
title: ''
tags:
- reordering-history
---

{% capture notes %}
* Reorder commits
* Rewrite history entirely
* Discard commits
* Revise/edit commits
* Safe patterns for rebasing local history
* Verbs (cheat sheet of commands)
{% endcapture %}
{% include hydeslides/core/notes %}

```bash
$ git rebase -i <REF>
$ git rebase -i [remote]/[branch]
```

Automatically arrange commits and rebase with `fixup!` and `squash!` message prefixes

```bash
$ git rebase -i --autosquash [ref]
```
