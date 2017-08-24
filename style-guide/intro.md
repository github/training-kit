---
layout: single
title: Style Guide for Writing Training Content
permalink: /style
header:
  overlay_color: "#137bce"
---

{% include toc %}

# Welcome!

This is a style guide for writing :sparkles: training content for GitHub's [On Demand Training Platform]({{ site.baseurl }}/). This guide makes some assumptions about you and what you're trying to do:

1. You've gone through at least one of the available training courses.
1. You want to contribute.
1. Your contribution is composed of written content. So you want to contribute words on the page, not necessarily the back end of how this all works.

Is that you? Let's get started!

# Keep it simple, silly :kiss:

You should strive to keep text on the page short and to the point. Why? Because people are easily distracted. No training page should require the user to scroll when viewing it on a standard desktop resolution.

# Use color to guide learners

This is how color is used throughout the training courses.

Blue is used to highlight screenshots, screen captures, or any visual demonstration.
{: .notice--info}

Yellow is used to expand on the short and to-the-point instructions. These areas can lead to additional context or links to external resources.
{: .notice--warning}

Green guides learners to getting help.
{: .notice--success}

Red helps learners troubleshoot errors or roadblocks.
{: .notice--danger}

# Style text to convey meaning

Text is styled minimally:

- Vocabulary is italicized to help learners identify their importance and help with cognition.
  - Example: A *query* is a request for specific information.
- Button names are bolded to indicate they should be clicked.
  - Example: Accept the filler text and click **Commit Changes**.
- Names of repositories, files, branches, variables, or user handles are wrapped in \`backticks\`.
  - Example: Initialize the repository with a `README.md` file.
- Code that the learner should type, copy, or execute should be in a fenced code block:
  - Example: To see the version of your Git installation, type:

        git --version

# Use the proper terminology

- Use given names for complicated concepts, and then explain them.
- We "click" buttons, we don't press them.
