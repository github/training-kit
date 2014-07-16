---
chapter: Navigating history
layout: slide
title: ''
tags:
- navigating-history
---

```bash
$ git log --author [author-name]

$ git log --since [integer].days.ago

$ git log -S [string-in-patch]

$ git log -G [regex-pattern-in-patch]

$ git log --grep=[regex-in-message]

$ git log --diff-filter=[A|M|D]

$ git log --follow --stat --diff-filter=[A|M|D] -- <filename>

$ git log --oneline --left-right master..other

$ git log --oneline --left-right master...other

$ git name-rev [commit-ref]
```

{% capture notes %}
* Log is like a search engine
* Search for person, time, change, contents, message
* Dramatically narrows search time

https://www.kernel.org/pub/software/scm/git/docs/gitrevisions.html
{% endcapture %}
{% include hydeslides/core/notes %}
