---
chapter: Cutting releases
layout: slide
title: ''
tags:
- cutting-releases
---

{% capture notes %}
* Why create a tag through the web UI?
* Not a branch HEAD. Points to a specific commit.
* Attaching binaries to releases (Web UI and API)
* Tag with message (defaults to annotated)
* Force existing tag to new ref
* Delete a tag
* `$ git describe` to name the most recent reachable tag
* Tag types (reference, annotated, signed)
* Deleting a tag locally
* Deleting tag on a remote
{% endcapture %}
{% include hydeslides/core/notes %}

```bash
$ git tag
$ git tag -a
$ git tag -a -m

$ git tag -m<message> <TAGNAME>
$ git tag -a -m<message> <TAGNAME>
$ git tag -s -m<message> <TAGNAME>
$ git tag -f <TAGNAME>
$ git tag -d <TAGNAME>
$ git describe
$ git describe <SHA>
$ git tag -d 12345
$ git push origin :<tag-name-to-delete>
```
