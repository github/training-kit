### Cloning the Repository

1. Navigate to the Code tab of the class repository.
1. Click **Clone or download**
1. Copy the **Clone URL** provided.
1. Open your terminal and `cd` into the directory where you would like to copy the repository. **Pro Tip:** Type `cd ..` to go up one level from your website repository.
1. Type `git clone URL`. Be sure to replace `URL` with the Clone URL you copied in the previous step.
1. Type `cd REPOSITORY-NAME` to move into the directory of the repository you just cloned.

### Create a Branch

1. Create a branch using the shortcut command `git checkout -b BRANCH-NAME` Something like `yourUsername-add-page` is a perfect branch name.

### Add the File

1. In your favorite text editor, add a file to the `_pages` directory. Include your GitHub handle in the filename: `username.yaml`.
1. Enter the following content into your file:

        ---
        githubHandle: YOUR-USERNAME
        pageUrl: YOUR-SITES-URL
        timestamp: TODAYS-DATE-YYYY-MM-DD
        ---

10. Ensure you've replaced `YOUR-USERNAME` with your GitHub Username, `YOUR-SITES-URL` with the URL to your site (which should be `YOUR-USERNAME.github.io`), and `TODAYS-DATE-YYYY-MM-DD` with today's date, using a 4-digit year, 2-digit month, and 2-digit day. For example, if today is October 17, 2016, you would enter: `2016-10-17`.

### Commit the Changes

11. Go back to the command line and type `git status`.
12. Add your file to the staging area: `git add FILENAME`.
13. Type `git status`.
14. Commit your changes: `git commit -m "describe your changes"`.
15. Type `git status` to ensure your work was committed.
