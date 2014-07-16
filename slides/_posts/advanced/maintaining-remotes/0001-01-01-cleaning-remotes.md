---
chapter: Maintaining remotes & upstreams
layout: slide
title: ''
tags:
- maintaining-remotes
---

{% capture notes %}
* Remove non-matching _local_ remote branches
* Remove non-matching remote upstream branches
* Remove only remote upstream branch
{% endcapture %}
{% include hydeslides/core/notes %}

```bash
# Discard remote local branches
# not present on upstream
$ git fetch --prune

# Delete an upstream branch
$ git push origin :<branch-name>
```
