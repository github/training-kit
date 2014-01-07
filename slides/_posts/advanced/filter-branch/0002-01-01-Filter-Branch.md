---
chapter: Filter-Branch
layout: slide
tags: ['advanced/filter-branch']
---

### By Repository Content

	git filter-branch --index-filter 'git rm --cached --ignore-unmatch <filename>' <branch>
