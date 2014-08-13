---
chapter: Incorporating history
layout: slide
title: ''
tags:
- incorporating-history
---

{% capture notes %}
* Reusing small pieces of code with `cherry-pick`
	* Why use `cherry-pick` instead of `merge`?
	* What happens when you `cherry-pick`?
	* Maintaining `author` and `committer` fields
	* Tracing any cherry-picks with `-x` commit message metadata
	* `-x` metadata hyperlinked on GitHub
	* `$ git cherry` to view absent commits
* Rebase interactive
	* Can include cherry-pick
	* Must remember to continue the rebase
	* Alters history
{% endcapture %}
{% include hydeslides/core/notes %}

```bash
# Generate new commit on current branch
# with patch of specified commit

$ git cherry-pick [commit]
```
