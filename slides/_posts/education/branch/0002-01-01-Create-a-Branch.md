---
chapter: Branch
layout: slide
tags: ['education/branch']
---

    # Create a branch and then switch to it
    git branch <branchname>
    git checkout <branchname>

    # Create & Checkout branch
    git checkout -b <branchname>


{% capture notes %}

Branch as experiments
What do cheap branches enable?
Create a branch for an experiment; Delete the failed experiment
Branches cost a mere 20 bytes

Branch from the master branch
Merge from the topic branch
Destroy the topic branch
{% endcapture %}
{% include hydeslides/core/notes %}

