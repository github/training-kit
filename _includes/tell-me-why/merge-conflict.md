[//]: # "This is used in both the CLI and Desktop course"

## Examing Merge Conflicts

Looking at an example merge conflict from our [help](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/) documentation, we can discuss the different pieces that encompass a merge conflict.

    If you have questions, please
    <<<<<<< HEAD
    open an issue
    =======
    ask your question in IRC.
    >>>>>>> branch-a

The <, =, and > symbols simply identify where the merge conflict occurred. We can see that both HEAD and branch-a are listed in the merge conflict. HEAD is pointing to the branch that you are currently checked out to, so it might say the branch you currently are on or HEAD. The other branch listed, in this example, branch-a identifies that changes exist on another branch that conflict with the changes we made.
