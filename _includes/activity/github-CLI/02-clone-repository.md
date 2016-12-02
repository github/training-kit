After you've created a repository on the remote, the next step is to clone it to your local environment.

1. Navigate to the Code tab of the repository on GitHub.com.
1. Click **Clone or download**.
1. Copy the **Clone URL** provided.
1. Open your command line/terminal application and `cd` into the directory where you would like to copy the repository. This can be anywhere in your local file system.
1. Type `git clone URL`. Be sure to replace `URL` with the Clone URL you copied in the previous step. The repository will be cloned into a new directory in this location.
1. Type `cd REPOSITORY-NAME` to move into the directory of the repository you just created.
1. Type `git status`.

`git status` is a command you will use often to verify the current state of your repository and the files it contains. Right now, we can see that we are on branch `master`, everything is up to date with `origin/master` and our working directory is clean.
