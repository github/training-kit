---
chapter: Init
layout: slide
tags: ['init']
---

	# Legacy project tree
	$ cd existingproject
	$ git init

	# Add all the code
	$ git add .
	$ git commit -m ”Initial import” 

{% capture notes %}

If you already have an existing repository:

* Change directory into the root project
* type git init
*  Add all files

{% endcapture %}
{% include hydeslides/core/notes %}