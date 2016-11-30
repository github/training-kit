After you have finished making your changes, it is time to commit them.

1. Type `git status`. Remember that Git status allows us to see the status of the files on our branch at any given time.
1. View status output. When you have saved the changes to your file, you will see that your file is listed under the heading _Changes not staged for commit_ and the file says it has been modified.
1. Type `git add FILE-NAME`. The first command we will use is git add, followed by the name of the file.
1. Type `git status`. Now, type git status again to see what has changed.
1. View status output. Notice that your file is listed under the heading _Changes to be committed_. This tells us that the file is in the staging area.
1. Type `git commit`. This tells git to collect all of the files in the staging area and commit them to version control as a single unit of work. Git will open your default text editor where you can enter the commit message.
1. Type the commit message. Any line without a # will be included in the commit message.
1. Click `Save > Quit`.When you are happy with your commit message, simply save it and close your text editor.
1. To see the history of commits, type `git log`.
