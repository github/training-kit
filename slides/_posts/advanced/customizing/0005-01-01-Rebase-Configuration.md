---
chapter: Customizing
layout: slide
tags: ['advanced/customizing']
---

	# Always rebase HEAD 
	git config branch.<branchname>.rebase true
	git config branch.autosetuprebase [true|always]

{% capture notes %}
* `always` for local and remote branches
* `true` for local branches only
{% endcapture %}
{% include hydeslides/core/notes %}