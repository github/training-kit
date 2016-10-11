{% capture activity-text %}

# Activity: Make Changes & Add Commits Locally

- Double check that you're checked out to your branch on GitHub Desktop.
- Open your preferred text editor.
- Create a new file with the title `USERNAME-webpage.md` in the `_pages` directory. _(Make sure you replace USERNAME with your own username)_
- Copy the following text into your file:
  - replace `YOUR_USERNAME` with your GitHub handle
  - replace `YOUR_WEBSITE_URL` with the web address people need to type to go to your webpage; the URL on GitHub Pages
  - replace `TODAYS_DATE_YYYY_MM_DD` with today's date in the format `YYYY-MM-DD` (four digit year, two digit month, two digit day)

```
---
githubHandle: YOUR_USERNAME
url: YOUR_WEBSITE_URL
timestamp: TODAYS_DATE
---
```

- When you are finished, save the file and close the text editor.
- Let's take a look at what we have just done. Go back to GitHub Desktop and ensure you're still on your new branch.
- Click the changes tab to see a list of the files that have been changed or added since the last commit.
- Use the checkboxes to indicate which files should be part of the commit. In this case, we'd like to select `_pages/YOUR-USERNAME_webpage.md`.
- When you have selected the appropriate files, type your commit message in the Summary field, describing your commit.
- You will notice that GitHub has already populated the commit button with the current branch. Simply click the button to commit your changes.

{% endcapture %}

<div class="notice--warning">
{{ activity-text | markdownify }}
</div>

Need help? Click **open chat** below for answers from GitHub trainers!
{: .notice--success}
