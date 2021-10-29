# Git Clone

The `git clone` command is used to create a copy of a specific repository or branch within a repository.

Git is a distributed version control system. Maximize the advantages of a full repository on your own machine by cloning.

### What Does `git clone` Do?

```sh
git clone https://github.com/github/training-kit.git
```

When you clone a repository, you don't get one file, as you may in other centralized version control systems. By cloning with Git, you get the entire repository – all files, all branches, and all commits.

Cloning a repository is typically only done once, at the beginning of your interaction with a project. Once a repository already exists on a remote, like on GitHub, then you would clone that repository so you could interact with it locally. Once you have cloned a repository, you won't need to clone it again to do regular development.

The ability to work with the entire repository means that all developers can work more freely. Without being limited by which files you can work on, you can work on a feature branch to make changes safely. Then, you can:
-  later use `git push` to share your branch with the remote repository
- open a pull request to compare the changes with your collaborators
- test and deploy as needed from the branch
- merge into the `main` branch.

## How to Use `git clone`

### Common usages and options for `git clone`

* `git clone [url]`: Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits.
* `git clone --mirror`: Clone a repository but without the ability to edit any of the files. This includes the refs or branches. You may want to use this if you are trying to create a secondary copy of a repository on a separate remote and you want to match all of the branches. This may occur during configuration using a new remote for your Git hosting, or when using Git during automated testing.
* `git clone --single-branch`: Clone only a single branch
* `git clone --sparse`: Instead of populating the working directory with all of the files in the current commit recursively, only populate the files present in the root directory. This could help with performance when cloning large repositories with many directories and sub-directories.
*   `git clone --recurse-submodules[=<pathspec]`: After the clone is created, initialize and clone submodules within based on the provided pathspec (or all submodules if no pathspec is given). This may be a good option if you are cloning a repository that you know to have submodules, and you will be working with those submodules as dependencies in your local development.

You can see all of the many options with `git clone` in [git-scm's documentation](https://git-scm.com/docs/git-clone).

## Examples of `git clone`

### `git clone [url]`

The most common usage of cloning is to simply clone a repository. This is only done once, when you begin working on a project, and would follow the syntax of `git clone [url]`.

### `git clone` A Branch

`git clone --single-branch`: By default, `git clone` will create remote tracking branches for all of the branches currently present in the remote which is being cloned. The only local branch that is created is the default branch.

But, maybe for some reason, you would like to _only_ get a remote tracking branch for one specific branch, or clone one branch which _isn't_ the default branch. Both of these things happen when you use `--single-branch` with `git clone`.

This will create a clone that only has commits included in the current line of history. This means no other branches will be cloned. You can specify a certain branch to clone, but the default branch, usually `main`, will be selected by default.

To clone one specific branch, use:

`git clone [url] --branch [branch] --single-branch`

_Cloning only one branch does not add any benefits unless the repository is very large and contains binary files that slow down the performance of the repository. The recommended solution is to optimize the performance of the repository before relying on single branch cloning strategies._


### `git clone` With SSH

Depending on how you authenticate with the remote server, you may choose to clone using SSH.

If you choose to clone with SSH, you would use a specific SSH path for the repository instead of a URL. Typically, developers are authenticated with SSH from the machine level. This means that you would probably clone with HTTPS or with SSH – not a mix of both for your repositories.

## Related Terms

- `git branch`: This shows the existing branches in your local repository. You can also use `git branch [branch-name]` to create a branch from your current location, or `git branch --all` to see all branches, both the local ones on your machine and the remote tracking branches stored from the last `git pull` or `git fetch` from the remote.
- `git pull`: Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. `git pull` is a combination of `git fetch` and `git merge`.
- `git push`: Uploads all local branch commits to the remote.
- `git remote -v`: Show the associated remote repositories and their stored name, like `origin`.
