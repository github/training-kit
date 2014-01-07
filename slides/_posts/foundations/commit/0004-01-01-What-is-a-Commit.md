---
chapter: Commit
layout: slide
tags: ['commit','diagram']
diagram_svg_path: "assets/diagrams/commit-data-structure.svg"
---

{% capture notes %}
* Git folder is a directory "database" of snapshots for every commit
* `.git` folder contains files, directories
* `.git` is the _entire_ repository
* `/objects` contains all commits, blob, trees
{% endcapture %}
{% include hydeslides/core/notes %}
