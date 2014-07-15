---
chapter: Signing work
layout: slide
title: ''
tags:
- signing-work
---

{% capture notes %}
Notes placeholder
{% endcapture %}
{% include hydeslides/core/notes %}

```
$ git config --global user.signingkey
```

```
$ git merge --verify-signatures
```

```
$ git tag -s [tag-name] [commit]

$ git tag -v [tag-name]
```
