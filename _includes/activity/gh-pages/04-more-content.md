{% capture activity-text %}
# Activity: Additional Challenges

Below are some projects that you can take on that will challenge your templating skills. We're leaving them more open-ended instead of giving you step-by-step instructions, so feel free to ask a mentor if you need help.

### Add Nav Links

"Edit your project so that you can have pages which have a `title:` element but which don't show up in the nav bar. You'll need to come up with a system (a mentor can help) and edit the `_includes/header.html` page, as well as the front matter in all of your site pages."

### Work History with Style

Earlier you created a Work History page. This isn't very well formatted though. Try using CSS and templates to clean up the page. If you create a Work History template you can wrap the content in a new div, and then format the elements using CSS so that formatting only applies to that page.

### Collections

You might also look into the "collections" functionality in Jekyll. This would let you create a different markdown file (and front matter data) for each job description. How might this make formatting the page easier?




{% endcapture %}

<div class="notice--warning">
  {{ activity-text | markdownify }}
</div>

Need help? **Open an issue** [in our class repository](https://github.com/githubschool/on-demand-github-pages/issues/new) for answers from GitHub trainers!
{: .notice--success}
