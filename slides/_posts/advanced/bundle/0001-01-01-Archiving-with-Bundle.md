---
chapter: Bundle
layout: slide
tags: ['advanced/bundle']
---

Aggregate commits and objects

	git bundle <filename> <rev>

Tag the last archive snapshot

	git tag --force LAST_ARCHIVE <rev>


{% capture notes %}
* Common solution for air-gap repos
* Rev, branch, or range
* Filepath typically outside of repo dir
{% endcapture %}
{% include hydeslides/core/notes %}

	git bundle create <file> <git-rev-list-args>
	git bundle verify <file>
	git bundle list-heads <file> [<rev>…]
	git bundle unbundle <file> [<rev>…]
