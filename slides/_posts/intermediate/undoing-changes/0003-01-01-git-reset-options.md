---
chapter: Undoing changes
layout: slide
title: ''
tags:
- undoing-changes
---

```bash
# Move HEAD, keep changes in staging
$ git reset --soft [commit|branch|tag]

# Move HEAD, keep changes, clear staging area
$ git reset --mixed [commit|branch|tag]

## Move HEAD, discard all uncommited changes
$ git reset --hard [commit|branch|tag]
```
