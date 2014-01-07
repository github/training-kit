---
chapter: Diff
layout: slide
tags: ['diff']
---

	git diff --color-words
	git diff --word-diff
	git diff --stat



{% capture notes %}
	# Added (A)
	# Copied (C)
	# Deleted (D)
	# Modified (M)
	# Renamed (R)
	# Type changed (T)
	# Unmerged (U)
	# Unknown (X)
	# Pairing Broken (B)
	# Only show changes in modified files
	git diff --diff-filter=M
{% endcapture %}
{% include hydeslides/core/notes %}