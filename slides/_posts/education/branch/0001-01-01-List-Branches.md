---
chapter: Branch
layout: slide
tags: ['education/branch']
---

    #List (Local) Branches
    git branch

{% capture notes %}
# List remote branches
git branch -r

# List all branches
git branch -a

# List upstream branches
git ls-remote origin
{% endcapture %}
{% include hydeslides/core/notes %}
