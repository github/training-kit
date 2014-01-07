---
chapter: Commit
layout: slide
tags:
- commit
- short-commit
---

	git add <filename>
	git status
	git commit -m "Helpful message"

{% capture notes %}
Leave off -m to edit commit message in vi

Cleared out the entire message? Commit will abort
{% endcapture %}
{% include hydeslides/core/notes %}