## General Specifications

# Git Push

```sh
git push
```

`git push` uploads all local branch commits to the corresponding remote branch.

## What Does `git push` Do?

`git push` updates the remote with local changes. It is one of the four commands in Git that prompts interaction with the remote repository. Some also think of `git push` as _update_ or _publish_. 

By default, `git push` only updates the corresponding branch on the remote. So, if you are checked out to the `master` branch when you execute `git push`, then only the `master` branch will be updated. It's always a good idea to use `git status` to see what branch you are on before pushing to the remote.

## How to Use `git push`

After you make and commit changes locally, you can share them with the remote repository with `git push`. It's important to make commits on branches that are for specific purposes, so that you can push the changes frequently.

Pushing changes to the remote makes your commits accessible to others who you may be collaborating with. It also update any pull requests that are open with the branch that you're working on. 

### Common usages and options for `git push`

* `git push -f`: description
* `git push -u origin [branch]`: description
* `git push --all`: description
* `git push --tags`: description

You can see all of the options with `git push` in [git-scm's documentation](https://git-scm.com/docs/git-push).

## Why can't I push?

If you are trying to `git push` but are running into problems, there are a few common solutions.

### Check your branch

Check what branch you are currently on with `git status`. If you are working on a protected branch, like `master`, you may be unable to push commits directly to the remote. If this happens to you, it's OK! You can fix this a few ways.

#### Work was not yet on any branch

1. Create and checkout to a new branch from your current commit: `git checkout -b [branchname]`
2. Then, push the new branch up to the remote: `git push -u origin [branchname]`

#### Accidentally committed to the wrong branch

1. Checkout to the branch that you intended to commit to: `git checkout [branchname]`
2. Merge the commits from the branch that you _did_ accidentally commit to: `git merge [master]`
3. Push your changes to the remote: `git push`
4. Fix the other branch by checking out to that branch, finding what commit it _should_ be pointed to, and using `git reset --hard` to correct the branch pointer

## Related Terms

- `git commit -m "descriptive message"`: Records file snapshots permanently in version history.
- `git clone [url]`: Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits.
- `git status`: Always a good idea, this command shows you what branch you're on, what files are in the working or staging directory, and any other important information.
- `git push`: Uploads all local branch commits to the remote.
- `git push -u origin master`: When pushing a branch for the first time, this type of push will configure the relationship between the remote and your local repository so that you can use `git pull` and `git push` with no additional options in the future.
- `git pull`: Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. `git pull` is a combination of `git fetch` and `git merge`.