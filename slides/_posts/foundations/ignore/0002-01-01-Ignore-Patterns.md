---
chapter: Ignore
layout: slide
tags: ['ignore']
---

	# Anything ending ".log"
	*.log

	# Directories with specific name
	archives/

	# Directory-name patterns
	log*/


{% capture notes %}
* Glob patterns, one per line
* Ignores only apply to `dir`s with file content
{% endcapture %}
{% include hydeslides/core/notes %}
