---
chapter: Fixing branches
layout: slide
title: ''
tags:
- fixing-branches
---

{% capture notes %}
* [Rebasing chapter of Pro Git book](http://git-scm.com/book/ch3-6.html)
* [Git rebase --onto section of Pro Git book](http://git-scm.com/book/ch3-6.html#More-Interesting-Rebases)
* Changing where branch history begins
* Moving blocks of history around
* Breadcrumbs for later fixups and squashes
{% endcapture %}
{% include hydeslides/core/notes %}

Change which base a branch belongs to

```bash
$ git rebase --onto <newbase> <upstream> <HEAD|branch>
```
