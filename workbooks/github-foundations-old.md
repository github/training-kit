##  A Brief Tour of Git <a href="http://git-scm.com/book/en/Getting-Started-Git-Basics" class="booklink">Pro Git Book: Git Basics</a>

Git has a unique twist on version control in which each _cloned_ copy of the repository contains all branches, tags, and commits ever saved to the project. This provides local-disk speed for almost any operation. Network operations are performed in batch and compressed before sending, thus making over-the-wire operations seem incredibly fast.

### Details
Git is an open source version control system that was built by Linus Torvalds and used to version the Linux kernel in 2005.  It has gained in popularity ever since and is now the leading version control system for open source projects by some surveys.  It shares some behavioral similarities to CVS and Subversion, though departs from their centralized form by its distributed nature.

### Details
<blockquote class="studentquestion">
It is common to get a request for a table of Subversion-to-Git command comparisons. We caution against this conceptual one-to-one mapping because it is most effective to understand Git's unique three-stage thinking from the ground up. Files are chosen, via the `add` command, to participate in the repository and explicitly asked to participate in each commit (transaction), also by the `add` command. Grouped transactions of changes to files are permanently recorded by the `commit` command. Local storage of commits are distinct from transmitting them over the network, thus providing the ability to use Git fully offline. Commits are sent via the `push` command when ready to be sent to the central server.
</blockquote>


## Beginning version control

### With a local repository
Create a repository in the current directory of an existing project:


``` shell
git init my-project
cd my-project
```

### From an existing project
Create a repository in a brand new subdirectory:

``` shell
cd existing-project
git init
git add .
```

### Hosted on GitHub

``` shell
git clone github-repo-url local-project-name
cd local-project-name
```

## Versioning changes
By staging (preparing) paths

Any time a change is to be committed, or preserved in history, it must first be _staged_.

``` shell
git add path-file
```

### With message for history

``` shell
git commit -m "your commit message"
```


## Containing work in context
Wrapping commits, or Git version history, within branches is a fast, local, and easy way to focus work and commits within a repository.


### By branching per work endeavor
Create a new branch from your current commit

``` shell
git branch your-topic-name
```

### Changing a branch name

``` shell
git branch -m old-topic-name new-topic-name
```

### Listing all local branches

``` shell
git branch
```

### Switching branches

``` shell
git checkout any-local-branch
```

## Sharing repository history

### Checking for remotes
Before adding a remote, check if your repository already has the expected one setup.


``` shell
git remote -v
```

### Adding an upstream
To allow Git to `push` your local repository's commits to a collaborative, centralized one, you will need a remote.

``` shell
git remote add [alias] [url]
```

Quickly `fetch` and `merge` the retrieved commits from the upstream into the current local branch, if it has tracking setup.

``` shell
git pull
```

Retrieve all non-local commits from the specified remote and branch, them merge them into the current branch.

``` shell
git pull [alias] [branch]
```

Retrieve any upstream (remote) branches and commits.

``` shell
git fetch [alias]
git merge [alias]/[branch]
```

### Comparing changes
Compare all changes not yet staged.

``` shell
git diff
```

Compare all changes in staging to last commit.

``` shell
git diff --staged
```

Compare all changes not staged and in staging to last commit.

``` shell
git diff HEAD
```

``` shell
git diff [commit-ref/branch-name]
```

## Reviewing history
Inspect the full history of a specific branch, limit the output, or graphically diagram the relationship of commits.


List all commits of current branch in descending order.

``` shell
git log
```

Display summarized commits of current branch and shortened references.

``` shell
git log --oneline
```

Render ASCII art graph of all branch's commit relationships.

``` shell
git log --graph --all --decorate --oneline
```

## GitHub
TBD

* Centralized Repository
* Cloning
* Forking
* Pull Request

## Remove
TBD

* Entirely eliminating paths
* Stopping tracking

## Move
TBD

* Functionality
* Similarity index
* Following history


## Merge
TBD

* Basics
* Conflicts

## Rebase
TBD

* Merge preparation
* Interactive
