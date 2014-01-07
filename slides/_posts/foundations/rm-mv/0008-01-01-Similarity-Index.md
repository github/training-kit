---
chapter: Remove & Move
layout: slide
tags: ['rm-mv']
---

	# Renames shown
	git log --stat -M

	# Show commits from previous filename
	git log --follow <file>



{% capture notes %}

* Note "100%" on commit output
* Copies & renames shown with
	* (superset of -M)
	* git log --stat -C
{% endcapture %}
{% include hydeslides/core/notes %}
