{% capture activity-text %}
# Activity: Adding Yourself to the Map

## Adding a New Pin

- In your new branch, add a new file named: `_pins/YOUR-USERNAME.json`.
- Enter the following code in your file:

```
---
githubHandle: YOUR_USERNAME
latitude: YOUR_LATITUDE
longitude: YOUR_LONGITUDE
---
```

- Ensure you've replaced:

  - `YOUR_USERNAME` with your GitHub username.
  - `YOUR_LATITUDE` with your north/south coordinate.
  - `YOUR_LONGITUDE` with your east/west coordinate.

- Enter a commit message that describes your addition.
- Commit your change to your branch.

{% endcapture %}

<div class="notice--warning">
  {{ activity-text | markdownify }}
</div>

Need help? Click **open chat** below for answers from GitHub trainers!
{: .notice--success}
