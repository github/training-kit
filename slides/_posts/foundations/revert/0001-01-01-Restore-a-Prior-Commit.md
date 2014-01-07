---
chapter: Revert
layout: slide
tags: ['revert']
---

Restore past patch set via new commit

	git revert <REF>

{% capture notes %}
Not to be confused with `reset`

Not the same as `git commit --amend`

Revert creates a new commit based on a prior REF
{% endcapture %}
{% include hydeslides/core/notes %}

