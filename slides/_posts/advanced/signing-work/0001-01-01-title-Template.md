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

Using an auto-inserted text block to commit messages
```
git commit -s
git commit --signoff
```

Using GPG

```
git commit -S
```

```
git log --show-signature
```

```
git config --global user.signingkey
```

```
git merge --verify-signatures
```

```
git tag -s [tag-name] [commit]

git tag -v [tag-name]
