[//]: # "This is used in the Git Out of Trouble course"

## Reset

 `Reset` allows us to rewind our branch to look like it did at a previous point in history.

 ![](/on-demand/images/reset-visual.jpg){: .align-center}

### How Reset Works

 When you use `git reset` you are overwriting one or more of the three trees git uses to manage your work.

 ![](/on-demand/images/two-stage-commit-a.jpg){: .align-center}

 The trees that are overwritten are determined by the mode of reset you use.

 - `--soft`: The history is overwritten to look like it did at the selected point in time, but the other two trees are untouched. This means the changes you made in the commits between the old branch tip and the new branch tip will be sitting in your staging area.
 - `--mixed`: The history and the staging area are overwritten, but the working directory is untouched. This means your changes will be waiting in the working directory. **This is the default mode of reset**
 - `--hard`: All three trees (history, staging, and working) are re-written to look like the repository at the selected point in time. **`--hard` can be destructive!** Modified files that have not been committed will be overwritten by a hard reset.

 ![](/on-demand/images/reset-modes.jpg){: .align-center}

### Are They Really Gone?

 The good news is, git keeps a running log of every commit HEAD has pointed to. You can find this log with `git reflog`.

 A couple caveats though:

 - The reflog isn't pushed to the remote. So the only place you can access it is in your local repository.
 - The reflog only displays activity for the last 30 - 90 days. 90 days applies to any commit that is currently part of a branch. 30 days applies to commits that are "unreachable" - in other words, they are not currently on a branch.

## Important Reminder

 The `reset` command will change the commit history for your project which can cause problems for your collaborators if you have already pushed. Alternatively, `revert`, a command we use in other exercises, provides a non-destructive method to modify changes made to your repository and should be considered in place of reset when the commit(s) have already been pushed to the remote.
