{% capture activity-text %}
# Activity: Find or Create an Issue for Your City

First, let's see if an issue already exists for your city:

1. Click on the <a href="https://github.com/githubschool/open-enrollment-classes-introduction-to-github/issues" target="_blank">Issues tab</a> in the class repository.
2. Using the search field at the top of the issues view, type the name of the city you call home.
3. Press enter and check the results. Is there already an issue for your city? Remember to check the closed Issues too!
4. If an issue **already exists for your city**, comment on the issue to let others know that you will be adding your name to the same city!
5. If the issue is closed, re-open it. You'll close it later in the process, so don't worry about that for now.

If an issue **does not exist** for your city, you get to start one!

1. Click the `New Issue` button.
2. Complete the pre-populated issue template, adding a subject to the issue and replacing the placeholders for <your-city> name.
3. If you need help finding your city's coordinates to complete the issue template, [Click here](http://mynasadata.larc.nasa.gov/latitudelongitude-finder/) and search for your city.

{% endcapture %}

<div class="notice--warning">
  {{ activity-text | markdownify }}
</div>
