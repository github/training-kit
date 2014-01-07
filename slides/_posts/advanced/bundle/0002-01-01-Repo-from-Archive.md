---
chapter: Bundle
layout: slide
tags: ['advanced/bundle']
---

Create a new repo from archive file

	git clone -b <main-branch> <archive-path> <repo-name>

Verify remote setup to archive path

	git remote -v

{% capture notes %}
	git bundle list-heads <filepath>
{% endcapture %}
{% include hydeslides/core/notes %}