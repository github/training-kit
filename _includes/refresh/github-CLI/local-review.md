### Clone the Repository

1. Navigate to your repository's **Code** tab.
1. Click **Clone or download**.
1. Copy the URL provided.
1. Open your command line or Terminal application and enter the directory where you would like to copy the repository. This can be anywhere in your local file system, like your home directory. For example:

        cd ~/

      > Pro Tip: Type `cd ..` to go up one level from your website repository.

1. Clone the repository by replacing `<URL>` with clone URL you copied in the previous step. The repository will be cloned into a new directory in this location.

        git clone <URL>

1. Navigate into the directory of the repository you just created. Replace <REPOSITORY-NAME> with your own repository's name.

        cd <REPOSITORY-NAME>

### Create a Branch

1. Create a branch. Replace `<BRANCH-NAME>` with your branch's name.

        git checkout -b <BRANCH-NAME>

### Add the File

1. In your favorite text editor, add a file to the `_pages` directory. Include your GitHub handle in the filename: `username.yaml`.
1. Enter the following content into your file:

        ---
        githubHandle: <YOUR-USERNAME>
        pageUrl: <YOUR-USERNAME>.github.io
        timestamp: <TODAYS-DATE-YYYY-MM-DD>
        ---

10. Ensure you've replaced `<YOUR-USERNAME>` with your GitHub Username, `<YOUR-USERNAME>.github.io` with the URL to your site, and `TODAYS-DATE-YYYY-MM-DD` with today's date, using a 4-digit year, 2-digit month, and 2-digit day. For example, if today is October 17, 2016, you would enter: `2016-10-17`.

### Commit the Changes

11. Go back to the command line and type:

        git status

12. Add your file to the staging area:

        git add FILENAME

13. Type:

        git status

14. Commit your changes:

        git commit -m "describe your changes"

15. Ensure your work was committed:

        git status
