# Git Remote

There are some operations with `git remote`, like `git remote -v`, that you may use occasionally.

But, the concept of a remote within Git is important and powers many of the other operations.

## What does Git remote do?

```sh
git remote -v
```

`git remote` manages the set of remotes that you are tracking with your local repository.

### Common `git remote` commands

- `git remote -v`: List the current remotes associated with the local repository
- `git remote add [name] [URL]`: Add a remote
- `git remote remove [name]`: Remove a remote

### What is `origin`?

If you try running `git remote -v` in your repositories, you'll probably see something called `origin`. You may notice `origin` in many messages from Git. `origin` is the human-friendly name for the URL that the remote repository is stored at. It's like a key-value pair, and `origin` is the default.

### What is `upstream`?

You may need or want to work with multiple remotes for one local repository. This can be common in open source when a contributor needs to create a fork of a repository to have permission to push changes to the remote.

In this case, it's common to create and clone a fork. Then, the default remote would be `origin`, in reference to the fork. To make it easier to pull any changes to update the local copy of the fork from the original repository, many people add the original repository as a remote also. It's typical to name this remote `upstream`.

![](https://user-images.githubusercontent.com/9906718/77051803-28625800-69cc-11ea-9533-b5387ed2d3b5.png)

## Communicating with the remote

There are four commands within Git that prompt communication with the remote. Unless you are using one of these four commands, all of your work is only happening locally.

- `git push`
- `git clone`
- `git pull`
- `git fetch`

## Branches and the remote

The concept of branches can be confusing once it is combined with the concept of remotes. Git keeps track of the branches that you work on locally, as well as each of the branches in every remote associated with your local repo.

### Remote tracking branches

If you run `git branch --all` in your repository, you will notice a long list of branches. The branches that (by default) appear in red are the _remote tracking branches_. These branches are read-only copies of the branches on the remote. These update every time you run `git fetch` or `git pull`.

These don't take up much room, so it's okay that Git does this by default. But, these will stack up over time – they are not deleted automatically.

To delete the remote tracking branches that are deleted on the remote, run `git fetch --prune`. This is safe to do if you are using GitHub, because branches merged via pull requests can be restored.

### Local working branches

When you run `git branch --all`, you will also see the local working branches. These can be linked with branches on the remote, or they could exist with no remote counterpart.


- `git clone [url]`: Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits.
- `git status`: Always a good idea, this command shows you what branch you're on, what files are in the working or staging directory, and any other important information.
- `git push`: Uploads all local branch commits to the remote.
- `git pull`: Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. `git pull` is a combination of `git fetch` and `git merge`.
