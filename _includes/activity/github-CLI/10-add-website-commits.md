Now that you are a collaborator, let's use the local workflow we just learned to make changes to this repository. This exercise is a bit of a review, but if you need assistance with any of the required steps, more detailed directions are available, just click 'I need a refresher' below! Good luck!

1. Clone the repository to your local machine.
1. Create a new branch in the cloned repository using the shortcut command `git checkout -b BRANCH-NAME`. Something like `yourUsername-add-page` is a perfect branch name.
1. In your favorite text editor, add a file to the `_pages` directory. Include your GitHub handle in the filename: `username.yaml`.
1. Enter the following content into your file:

        ---
        githubHandle: YOUR-USERNAME
        pageUrl: YOUR-SITES-URL
        timestamp: TODAYS-DATE-YYYY-MM-DD
        ---
        
1. Ensure you've replaced `YOUR-USERNAME` with your GitHub Username, `YOUR-SITES-URL` with the URL to your site (which should be `YOUR-USERNAME.github.io`), and `TODAYS-DATE-YYYY-MM-DD` with today's date, using a 4-digit year, 2-digit month, and 2-digit day. For example, if today is October 17, 2016, you would enter: `2016-10-17`..
1. Create a commit that includes the file you just created. Use `git commit -m "COMMIT MESSAGE"`.
1. Type `git status` to ensure your work was committed.
