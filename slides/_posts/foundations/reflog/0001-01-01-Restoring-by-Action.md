---
chapter: Reflog
layout: slide
tags: ['reflog']
---

	git reflog -<n>


{% capture notes %}
* References the commit associated with the command
* Common commands include:
	* commit
	* rebase
	* reset

* `gitk --all 'git reflog | awk '{print $1}'`
* `git log --pretty=oneline --abbrev-commit --graph --decorate "git reflog | awk '{print $1}'"`

* `git reflog expire --expire=now --all`
{% endcapture %}
{% include hydeslides/core/notes %}