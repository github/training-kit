---
chapter: Customizing Remotes
layout: slide
tags: ['remote']
---
 
	# Retrieve Pull Requests
	# Using `git config`
	git config --add remote.origin.fetch 
		'+refs/pull/*/head:refs/remotes/origin/pull/*

	# Editing .git/config with editor
    fetch = +refs/pull/*/head:refs/remotes/<remote>/pull/*
    