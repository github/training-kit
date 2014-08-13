---
chapter: Aggregating dependencies
layout: slide
title: ''
tags:
- aggregating-dependencies
---

{% capture notes %}
Notes placeholder
{% endcapture %}
{% include hydeslides/core/notes %}

Add a separate repository as a subdirectory

```
$ git submodule add [repo-url] [folder]
```

For a freshly cloned repository with submodules

```
$ git submodule init
$ git submodule update
```

or

```
$ git submodule update --init --recursive
```
