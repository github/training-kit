---
chapter: Config
layout: slide
tags: ['config']
---

	#Colorize console output for legibility
	git config --global color.ui auto

	#Force files to be LF on Mac/Linux
	git config --global core.autocrlf input

	#Force Windows to convert to CRLF
	# on checkout and to LF on `add`
	git config --global core.autocrlf true


{% capture notes %}
Warn, but allow line ending conversion to proceed (the default)
git config --global core.safecrlf warn

Do not allow line ending conversion to proceed
git config --global core.safecrlf true

http://help.github.com/dealing-with-lineending
{% endcapture %}
{% include hydeslides/core/notes %}