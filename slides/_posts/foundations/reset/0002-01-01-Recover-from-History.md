---
chapter: Reset
layout: slide
tags: ['reset']
---



	$ git reset --soft <REF>

	$ git reset --mixed <REF>

	$ git reset --hard <REF>


{% capture notes %}
Reset modifies index, staging, and/or working dir

* `--soft` affects only the _index_
* `--mixed` is default when no option flag passed
* `--hard` clears index and working directory
{% endcapture %}
{% include hydeslides/core/notes %}
