---
chapter: Rebase
layout: slide
tags: ['rebase']
---

	git checkout <feature-branch>
	git rebase <branch>


{% capture notes %}
__Retrieve upstream changes__, 

__relocate__ your local changes to the end

	git pull --rebase

The same as

	git checkout master
	git rebase origin/master

	git checkout <featurebranch>
	git rebase master
{% endcapture %}
{% include hydeslides/core/notes %}