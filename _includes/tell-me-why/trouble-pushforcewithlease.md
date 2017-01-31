## Push --force-with-lease

The `push --force` command allows you to override a branch history. This can be problematic if another collaborator pushed some commits to the branch you are working on. If you forgot to fetch the latest updates before pushing with the `--force` flag, those commits will be deleted.

On the other hand, the less known `--force-with-lease` flag checks if you have fetched the latest updates before you decide to rewrite history, avoiding problematic situations. If there are updates to the branch you are working on, and you didn't fetch them, the `--force-with-lease` will make the push command fail.
