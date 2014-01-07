---
chapter: Network
layout: slide
tags: ['network']
---

	git pull <remote> <branch>

	git fetch <remote> <branch>


{% capture notes %}
* `git pull`
	* Retrieve upstream objects
	* Update remote branch
	* Merge changes into branch (HEAD)
	* Commit the merge to the local branch
* `git fetch`
	* Only retrieves upstream objects
{% endcapture %}
{% include hydeslides/core/notes %}
