---
layout: workbook
title: GitHub Intermediate Workbook
description: This student and teacher workbook will be your companion to the GitHub Intermediate class taught by the GitHub Training Team and other educational groups. In this course, you'll learn how to extensively leverage Git and GitHub from the command line.
---


## Git configuration basics

### Summary
* Scopes
* Excludesfile

#### Details

Git's configuration is saved in one of three plain text files and one of three levels and is easily editable with a text editor and portable to other machines by copying the configuration files.

Level | Precedence | Location
--- | --- | ---
`system` | lowest | alongside the `git` binary
`global` | middle | in your home directory as `.gitconfig`
`local` | highest | in your project's `.git/config` file

```
$ git config --list
$ git config user.name
$ git config user.email
$ git config --global core.autocrlf <value>
```


## Configuing the Git User
### Summary
* [Pro Git Book: First Time Git Setup](http://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup)
* Username
* Email address
* No password

#### Details
Your name and email address are configured locally in Git and are attached to each commit. Set these accurately to receive proper attribution for your work.

To inspect the current settings, individually query two configuration values:

``` shell
$ git config user.name
Firstname Lastname

$ git config user.email
someaccount@example.com
```

To set the same values to apply to any of your repositories:

``` shell
$ git config --global user.name "your name"
$ git config --global user.email "your@email"
```

Line endings and color display are two of the most common settings users choose to set early in their use of Git.
</span>

``` shell
# Set line endings to LF for Mac and Linux
$ git config --global core.autocrlf input

# Set line endings to CRLF for Windows
$ git config --global core.autocrlf auto
```

Reviewing all configuration

``` shell
$ git config --list
```

## Starting on the command line

### Summary
* New project
* Existing project
* Cloning

#### Details
```
# Create a new project directory
$ git init [projectname]
$ cd [projectname]

# or initialize an existing directory
$ cd [existingprojectname]
$ git init

# or clone an existing repository
$ git clone [url] [optional-name]
```

## Repository internals

### Summary
* Exploring the fundamentals
* `.git` folder
* All history stored locally
* Distributed nature, simultaneous changes
* No locking
* Optimized for text, small files
* `HEAD` symbol
* Staging area (index file)
* `refs/heads/`
* Efficiency of storage (zlib)

## Commits at the command line

### Summary
* Three stage thinking
* edit, select, save

#### Details
```
$ git status
$ git add <filename>
$ git commit
$ git commit -m"<message>"
```

## Comparing changes

### Summary
* Basic diff command
* Compare only a subset of paths
* Compare against specific revision
* Dependent upon file state
* Useful option switches

#### Details
```
$ git diff
$ git diff --staged
$ git diff HEAD
$ git diff [file]
$ git diff --stat -w --color-words
```

## Reviewing history

### Summary
* Basic review
* Narrowing results
* Filtering by message
* Filtering by patch

#### Details
```
$ git log
$ git log -<n>
$ git log --stat
$ git log --patch
$ git log --all
$ git log --author=<author>
$ git log --committer=<committer>
$ git log --format=full
$ git log --format=fuller
$ git log --format=raw
$ git log --diff-filter=[A|M|D]
$ git log -S<StringInPatch>
$ git log -G="<regexpattern>"
$ git log --word-diff --patch
$ git log --graph
$ git log --decorate
```

## Branching on the command line

### Summary
* Creating feature or prototype
* Showing local branches
* Creating
* Deleting
* Renaming

#### Details
```
$ git branch
$ git branch <name> <ref>
$ git branch -d <name>
$ git branch -m <old> <new>
$ git branch --merged
$ git branch --no-merged
```

## Switching branches & discarding changes

### Summary
* `Checkout` as a multi-use command
* Changing branches
* Exploring history (detached `HEAD`)
* Discarding dirty working tree paths


#### Details
```
# Check out (toggle to) an existing branch
$ git checkout [branch]

# Check out a single file from HEAD
$ git checkout -- [file]

# Check out a detatched HEAD (unnamed point in time)
$ git checkout [ref]
```

## Remotes

### Summary
* Explain convention of `origin`
* Aliasing, bookmark to server URL
* Removing connections

#### Details
```
$ git clone -o github <URL>
$ git remote add <name> <path>
$ git ls-remote <name>
$ git remote rm <name>
```

## Publishing changes

### Summary
* Publishing commit history
* Showing remote branches
* Showing all branches

#### Details
```
$ git push -u origin master
$ git config --global push.default matching
$ git config --global push.default simple
$ git branch -r
$ git branch -a
```

## Merging at the command line

### Summary
* Folding in branches
* Resolving conflicting merges (manually edit)
* Resolving file with shortcuts
* Updating topic branch from a base branch
* Integrating separate repo history

#### Details
```
$ git pull origin
$ git pull
$ git pull --rebase

$ git merge
$ git merge -m<message>

$ git checkout --ours [file]
$ git checkout --theirs [file]

$ git add [file]
$ git commit

$ git merge [base]

$ git pull [repository] [branch]
```

## Fetching changes

### Summary
* Comparing without merge
* Merging selectively
* Retrieving from other repositories

#### Details
```
$ git fetch [remote]
$ git branch -a

$ git fetch [repository] [branch]
$ git show FETCH_HEAD
```

## Removing files

### Summary
* Git observation of filesystem removals
* Removing files
* Un-tracking files

#### Details
```shell
$ git add -u .
$ git rm <file>
$ git rm --cached -- <filename>
```

## Moving files

### Summary
* Moving generates new tree, not a new blob
* Similarity Index engaged when committing

#### Details
```shell
$ mv <file> <newfilename>
$ git add -A .

# or

$ git mv <file> <file>
$ git log --stat -M
$ git log --follow <file>
```

## Undoing commits with `revert` and `reset`

### Summary
* Generating commit to restore past patch set
* Clearing index and working directory
* Reseting index, updating working directory
* Reseting index only
* By commit ref, branch name, remote
* Why the different flavors (deep dive)

#### Details
```shell
$ git revert <REF>

$ git reset --hard
$ git reset --mixed
$ git reset --soft
```

## Ignoring temporary files

### Summary
* Create a `.gitignore` file
* Add ignore patterns to the file
* `.gitignore` files can also live in _subdirectories_
* `!` is a negation of ignore pattern
* Global ignore with `core.excludesfile` configuration

#### Details
```
$ touch .gitignore
$ echo '*.log' >> .gitignore
$ git add .gitignore
$ git commit -m "Ignoring log files"
```

Global ignore file configuration:

```
$ git config --global core.excludesfile <filepathandname>
```

## Stashing in-progress changes

### Summary
* Temporarily store tracked changes
* Restoring by popping
* Move aside untracked files

#### Details
```
$ git stash
$ git pop
$ git stash --include-untracked
```

## Recovering almost anything with `reflog`

### Summary
* Tracing Git action "history"
* Explore last actions

#### Details
```
$ git reflog
$ git reflog --all
$ git config --global alias.undo "reset HEAD@{1}"
$ git checkout HEAD@{1}

$ git reset --hard HEAD@{1}

$ git branch [name] HEAD@{1}
```

## Pull requests

### Summary
* Pushing a branch to GitHub
* Using the GitHub interface
* Retrieving locally

```
$ git push -u [remote] [branch]

$ git fetch [remote] refs/pull/[issue-number]/head
```

## GitHub Issues

### Summary
* Basic use cases
* Cross referencing with `#` and `username/reponame#ISSUE`

## Command shortcut aliases

### Summary
* Faster to type
* Quicker access to complex commands
* Compatible with zsh completions

#### Details
```
$ git config --global alias.lol "log --graph --all --oneline --decorate"
$ git config --global alias.l "log --oneline --stat"
$ git config alias.s "status -s"
$ git s
```
