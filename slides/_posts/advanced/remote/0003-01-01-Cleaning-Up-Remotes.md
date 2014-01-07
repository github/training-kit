---
chapter: Customizing Remotes
layout: slide
tags: ['advanced/remote']
---

	# Delete a remote branch with a refspec
	git push <remote> :<branch>

	# Review remote tracking
	git remote show <remotename>

	# Tidy remote (local) tracking branches
	git remote prune
	git fetch --prune

	# Delete remote branches not local
	git push --prune
