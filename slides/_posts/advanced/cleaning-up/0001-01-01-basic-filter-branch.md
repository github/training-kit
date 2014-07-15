---
chapter: Cleaning up
layout: slide
title: ''
tags:
- cleaning-up
---

{% capture notes %}
Notes placeholder
{% endcapture %}
{% include hydeslides/core/notes %}

```
$ git filter-branch
	--subdirectory-filter [dir]
	-- --all
```

```
$ git filter-branch --index-filter
	'git rm --cached
	--ignore-unmatch [file]' HEAD
```
