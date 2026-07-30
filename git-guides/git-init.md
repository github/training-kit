# Git Init

```sh
git init
```

`git init` turns any directory into a Git repository.

## What Does `git init` Do?

`git init` is one way to start a new project with Git. To start a repository, use either `git init` or `git clone` – not both.

To initialize a repository, Git creates a hidden directory called `.git`. That directory stores all of the objects and refs that Git uses and creates as a part of your project's history. This hidden `.git` directory is what separates a regular directory from a Git repository.

## How to Use `git init`

### Common usages and options for `git init`

* `git init`: Transform the current directory into a Git repository
* `git init <directory>`: Transform a directory in the current path into a Git repository
* `git init --bare`: Create a new bare repository (a repository to be used as a remote repository only, that won't contain active development)

You can see all of the options with `git init` in [git-scm's documentation](https://git-scm.com/docs/git-init).

## Examples of `git init`

### `git init` vs `git clone`

Starting a new project can be confusing. Sometimes, it's unclear if you should use `git init`, `git clone`, or both.

#### `git init`: One Person Starting a New Repository Locally

Your project may already exist locally, but it doesn't have Git yet. `git init` is probably the right choice for you. This is only run once, even if other collaborators share the project. 

- First, initialize the repository. 
- Once you have initialized the repository, create a remote repository somewhere like GitHub.com.
- Then, add the remote URL to your local git repository with `git remote add origin <URL>`. This stores the remote URL under a more human-friendly name, `origin`.
- Shape your history into at least one commit by using `git add` to stage the existing files, and `git commit` to make the snapshot.
- Once you have at least one commit, you can push to the remote and set up the tracking relationship for good with `git push -u origin main`.

#### `git clone`: The Remote Already Exists

If the repository already exists on a remote, you would choose to `git clone` and _not_ `git init`.

If you create a remote repository first with the intent of moving your project to it later, you may have a few other steps to follow. If there are no commits in the remote repository, you can follow the steps above for `git init`. If there are commits and files in the remote repository but you would still like it to contain your project files, `git clone` that repository. Then, move the project's files into that cloned repository. `git add`, `git commit`, and `git push` to create a history that makes sense for the beginning of your project. Then, your team can interact with the repository without `git init` again.

### `git init` Existing Folder

The default behavior of `git init` is to transform the current directory into a Git repository. For an existing  project to become a Git repository, navigate into the targeted root directory. Then, run `git init`.

Or, you can create a new repository in a directory in your current path. Use `git init <directory>` and specify which directory to turn into a Git repository.

## `git init` Gone Wrong

### `git init` in the wrong directory

Running `git init` in the wrong place will create unintended repositories. You may have noticed strange error messages when using Git. Maybe you suspect that another parent directory is also a Git repository.

To fix this, you first need to track down which directory is the unintended repository. Use `git status` to see if the current directory is tracked by Git. If it is, you can either run `ls -al` and look for an otherwise hidden `.git` directory. 

If you don't see it, navigate one level up in the directory structure with `cd ..`. Use `git status` again in combination with `ls -al`. Repeat this until you find the `.git` directory.

Once you find the `.git` directory, and you are sure that you don't want that to be a Git repository, use `rm -rf .git`. This will remove the `.git` directory, effectively un-initializing that repository. Run `git status` again to confirm that Git is no longer tracking any of these files. (It could be possible that multiple layers of `.git` directories are present.)

Return to your working repository, the one that you _expect_ to be under version control. Things should be working as expected.

## Related Terms

- `git clone [url]`: Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits.
- `git status`: Always a good idea, this command shows you what branch you're on, what files are in the working or staging directory, and any other important information.
- `git remote -v`: Show the associated remote repositories and their stored name, like `origin`.
- `git remote add origin <url>`: Add a remote so you can collaborate with others on a newly initialized repository.
- `git push`: Uploads all local branch commits to the remote.
- `git push -u origin main`: When pushing a branch for the first time, this type of push will configure the relationship between the remote and your local repository so that you can use `git pull` and `git push` with no additional options in the future.
