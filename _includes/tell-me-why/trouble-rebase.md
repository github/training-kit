[//]: # "This is used in the Git Out of Trouble course"

## Rebase

The `git rebase` command is a powerful tool that can be used to reorder commits, edit commits, or even pick up entire branches and move them.

### How Rebase Works

Let's start with a fairly common use case for rebase:

![](/on-demand/images/git-rebase-before.png){: .align-center}

 In the above image, we created a branch called `test` and did some work. The branch `test` is "based" on the first commit on `master`: `e137e`. While we were working on our `test` branch, some of our collaborators merged their work into `master`. If we want to merge in our `test` branch, git would need to **recursively** combine the history on the two branches. This recursive merge strategy would result in a new commit being made as you see below:

 ![](/on-demand/images/git-merge-recursive.png){: .align-center}

 Alternatively, you can use `rebase` to move the "base" of your `test` branch to the current tip of master:

 ![](/on-demand/images/git-rebase-after.png){: .align-center}

 As you can see from the diagram, git picked up the commits on our original test branch `a55e`, `97d6` and `1c70` and replayed the entire branch as if we had just created it from master. However, you should also notice the commits that occurred on the `test` branch have new SHA-1 hashes because the "base" commit for the branch has changed.

 If we were to merge these two branches now, git would do a **fast-forward** merge, giving us a nice linear history (without the recursive merge commit).

### Rebase Interactive

 Rebase includes an interactive option that allows us to make changes to the commits as they are being replayed. For example, we can edit our commit messages as well as combine (squash), re-order, and even delete commits.  
