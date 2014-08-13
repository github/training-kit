---
chapter: Incorporating dependencies
layout: slide
title: ''
tags:
- incorporating-dependencies
---

{% capture notes %}
* Alternative to submodule
* All files available advantage
{% endcapture %}
{% include hydeslides/core/notes %}

First a remote connecting to the dependency and a branch in which to read from is needed.

```
$ git remote add
	[dependency-bookmark]
	[repository-url]

$ git fetch [dependency-bookmark]

$ git branch [branch]
	[dependency-bookmark]/[branch]
```
