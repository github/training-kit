
Now that you are a collaborator, let's use the local workflow we just learned to make changes to this repository:

1. Start from the Code tab of the [class repository on GitHub.com](https://github.com/githubschool/on-demand-github-pages/).
1. Click on `Clone or Download` and select `Open in Desktop`.
1. Confirm where you'd like to save your project on GitHub Desktop.
1. Create a branch and label it with your username, something like `yourUsername-add-page`.
1. In your favorite text editor, add a file to the `_pages` directory. Include your GitHub handle in the filename: `username.yaml`.
1. Enter the following content into your file:

       ---
       githubHandle: YOUR-USERNAME
       pageUrl: YOUR-HANDLE.github.io
       timestamp: TODAYS-DATE-YYYY-MM-DD
       ---

1. Ensure you've replaced `YOUR-USERNAME` with your GitHub Username, `YOUR-SITES-URL` with the URL to your site (which should be `YOUR-USERNAME.github.io`), and `TODAYS-DATE-YYYY-MM-DD` with today's date, using a 4-digit year, 2-digit month, and 2-digit day. For example, if today is October 17, 2016, you would enter: `2016-10-17`.
1. On GitHub Desktop, within the `Uncommitted Changes` tab, ensure your file is checked.
1. On GitHub Desktop, enter a commit message describing the change you're introducing to the project.
1. On GitHub Desktop, click the `Commit to YOUR-BRANCH` button -- ensure `YOUR-BRANCH` includes your username.
