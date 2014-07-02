---
chapter: Ignore
layout: slide
title: ''
tags:
- ignore
---

{% capture notes %}
* Ignoring files from repo & system level
* Reviewing ignored files with custom command
* Forcing a staging of ignored files
{% endcapture %}
{% include hydeslides/core/notes %}

```bash
vi .gitignore

git config core.excludesfile [path]

git config alias.show-ignored "ls-files --exclude-standard --others --ignored"

git add -f [path]
```
