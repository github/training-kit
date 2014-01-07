---
chapter: Customizing
layout: slide
tags: ['advanced/customizing']
---

Push _only_ current HEAD ref to upstream

	git config <scope> push.default simple

Push _all_ refs that have a configured upstream

	git config <scope> push.default matching
