---
chapter: Remove & Move
layout: slide
tags:
- rm-mv
- short-rm-mv
---

	$ git mv <FILENAME> <NEWFILENAME>

	# Move with OS or tool,
	mv <FILENAME> <NEWFILENAME>
	# Then follow up with git add
	git add -A .

{% capture notes %}

* Moving generates new tree, not a new blob
	* Hash will be differ

{% endcapture %}
{% include hydeslides/core/notes %}