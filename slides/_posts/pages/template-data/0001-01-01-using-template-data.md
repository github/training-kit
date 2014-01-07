---
chapter: "Template Data"
cover: true
layout: hydesides
tags:
  - "pages/template-data"
---

* In addition to layouts, Jekyll also provides some more advanced template features
* Any field in the YML front matter can be displayed in the page using the format of <br /><code>&#123;{ page.property }}</code> where property is the value before the colon
* This helps to further separate the page's layout from information about the page
* You can also add YAML to a file named `_config.yml`, and it will be available to all templates as <code>&#123;{ site.key }}</code> using the same format

{% capture notes %}
* Now that we've mastered the basics, let's take a look at some of Jekyll's advanced functionality
{% endcapture %}

{% include hydeslides/core/notes %}