After you have finished making your changes, it is time to commit them.

1. Type `git status`. Remember that `git status` allows us to see the status of the files on our branch at any given time.
Your file is listed under the heading _Untracked files_.
1. Type `git add FILE-NAME`. This adds the file to the staging area and prepares it to become part of the next commit.
1. Type `git status` again to see what has changed. Your file is now listed under the heading _Changes to be committed_. This tells us that the file is in the staging area. It also indicates this is a new file.
1. Type `git commit`. This tells git to collect all of the files in the staging area and commit them to version control as a single unit of work. Git will open your default text editor where you can enter the commit message.
1. Type the commit message, save and quit your editor.
    - The default text editor associated with git is `vi` in most cases, which requires that you press the `Esc` key then type `:wq` to save and quit after entering your commit message.
    - Alternatively, you can bypass `vi` altogether and enter your commit message inline with `git commit -m "your message"`
1. To see the history of commits, type `git log`.
