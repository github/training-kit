---
chapter: Filter-Branch
layout: slide
tags: ['advanced/filter-branch']
---

### By Filesystem Commands

`git filter-branch --tree-filter 'rm -f <filenamepattern>' <branch>`

{% capture notes %}

All Filter-Branch Options:

* --env-filter
	* GIT_AUTHOR_NAME
	* GIT_AUTHOR_EMAIL
	* GIT_AUTHOR_DATE
	* GIT_COMMITTER_NAME
	* GIT_COMMITER_EMAIL
	* GIT_COMMITTER_DATE
	* `git filter-branch --env-filter 'export GIT_AUTHOR_NAME=something'`
* --tree-filter
	* `git filter-branch --tree-filter 'rm <filenamepattern>' <branch>`
* --index-filter
	* `git filter-branch --index-filter 'git rm --cached --ginore-unmatch <filename>' <branch>`
* --parent-filter
* --msg-filter
	* `git filter-branch --msg-filter 'cat && echo "custom message"' <branchorrange>`
* --commit-filter
* --tag-name-filter
* --subdirectory-filter

{% endcapture %}
{% include hydeslides/core/notes %}