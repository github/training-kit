---
chapter: GitAttributes
layout: slide
tags: ['advanced/gitattributes']
---



* Force conversion to CRLF endings for all checkouts

  `<path-pattern> crlf`

* Ensure no conversion occurrs, no diff output (e.g. binary objects)

  `<path-pattern> -crlf -diff`

* Assign specific `diff` driver

  `<pattern> diff=<diff-in-config>`



{% capture notes %}
* Diff specifically as if content were not binary
* `<pattern> diff=word`
  * `git config diff.word.textconv strings`

* `<pattern> diff=exif`
  * `git config diff.exif.textconv exiftool`
  * [http://www.sno.phy.queensu.ca/~phil/exiftool/](http://www.sno.phy.queensu.ca/~phil/exiftool/)

{% endcapture %}
{% include hydeslides/core/notes %}