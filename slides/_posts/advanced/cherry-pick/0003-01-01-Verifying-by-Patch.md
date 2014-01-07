---
chapter: Cherry-Pick
layout: slide
tags: ['advanced/cherry-pick']
---

	# List commits cherry-picked, based on patch-id comparison
	git cherry <branch>
    

{% capture notes %}
* Cherry uses `patch-id`, SHA1 of patch diff
	* `-` Applied to Upstream
	* `+` Only in HEAD
{% endcapture %}
{% include hydeslides/core/notes %}

    
