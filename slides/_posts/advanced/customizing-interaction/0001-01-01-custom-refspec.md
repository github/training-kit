---
chapter: Customizing interaction
layout: slide
title: ''
tags:
- customizing-interaction
---

{% capture notes %}
* Specification for retrieval and pushing
* Implied on fetch, pull, and push
* Altered by option switches like `--tags`
* Stored in `.git/config`
* Ability to retrieve Pull Request branches
{% endcapture %}
{% include hydeslides/core/notes %}

```bash
$ git fetch [repo-url] [source]:[destination]
$ git config --add remote.[upstream].fetch "+refs/pull/*/head:refs/remotes/[upstream]/pull/*"
```
