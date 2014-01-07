---
chapter: Submodule
layout: slide
tags: ['advanced/submodule']
---

`git submodule add <url>`
    
{% capture notes %}
git submodule update --init --recursive
git fetch --recurse-submodules=yes
git clone --recurse-submodules
git push --recurse-submodules=check
{% endcapture %}
{% include hydeslides/core/notes %}