---
chapter: Hot Tips
layout: slide
tags: ['advanced/hot-tips']
---

    # Branches Merged with HEAD
    git branch --merged
    
    # Branches Not Merged with HEAD
    git branch --no-merge

    # Branch Containing a Commit
    git branch --contains <ref>

    # Branch Rename
    git branch -m <oldbranch> <newbranch>



{% capture notes %}

* Visualizing Branches
    * `git show-branch`

{% endcapture %}
{% include hydeslides/core/notes %}

