---
chapter: Hot Tips
layout: slide
tags: ['advanced/hot-tips']
---

Using Ref Ranges

	# List commits only reachable by downstream
	git log <rev1>..<rev2>

	# List commits of both, not upstream of each other 
	git log <rev1>...<rev2>


{% capture notes %}
{% endcapture %}
{% include hydeslides/core/notes %}

