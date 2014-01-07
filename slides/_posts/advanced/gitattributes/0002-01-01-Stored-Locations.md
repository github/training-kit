---
chapter: GitAttributes
layout: slide
tags: ['advanced/gitattributes']
---

### Traditional Location
* Stored as .gitattributes in root

### Alternative Locations
* Per Repository in .git/info/attributes
* Via external configured file 

{% capture notes %}
* `git config core.attributesfile <path>`
{% endcapture %}
{% include hydeslides/core/notes %}