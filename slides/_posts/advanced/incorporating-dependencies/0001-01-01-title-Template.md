---
chapter: Incorporating dependencies
layout: slide
title: ''
tags:
- incorporating-dependencies
---

{% capture notes %}
* Alternative to submodule
* All files available advantage
{% endcapture %}
{% include hydeslides/core/notes %}

First a remote connecting to the dependency and a branch in which to read from is needed.

```
git remote add [dependency-bookmark] [repository-url]
git fetch [dependency-bookmark]
git branch [branch] [dependency-bookmark]/[branch]
```

From here you'll notice the working tree content differs between the dependency and the main project.

Establishing the association of a subdirectory and the branch is necessary when creating the association.

```
git read-tree --prefix=[directory]/ -u [branch]
```

Whenever the branch needs updating, switch to it, retrieve the changes and commit them against the main project's branch(es).

```
git merge --squash -s subtree [branch]
```
