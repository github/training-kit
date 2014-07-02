---
chapter: Reviewing & synchronizing
layout: slide
title: ''
tags:
- reviewing-synchronizing
---

{% capture notes %}
* PRs to horizontal contributors
* PRs multiple levels up
* Converting issues to PRs
* PRs as Issues with code
* Automatic closing of PRs by local merges
* Merges must be _made by recursive_
* Retrieving PRs locally to resolve conflicts
(without locally merging to target branch)
{% endcapture %}
{% include hydeslides/core/notes %}

```bash
git ls-remote origin
git fetch origin refs/pull/1/head

git show FETCH_HEAD
git merge --no-commit --no-ff FETCH_HEAD
```

```bash
$ git remote -v
$ git remote show <remote-name>
$ git ls-remote
$ git branch -vv
```

```bash
$ git pull [remote] [pull-request-namespace]

$ git fetch [remote] [pull-request-namespace]
```

```bash
$ git fetch <URL> <branch>
$ git checkout FETCH_HEAD
$ git branch <newbranchname> FETCH_HEAD
```
