---
layout: workbook
title: GitHub Intermediate Workbook • Leveraging Git and GitHub from the command line
description: A student and teacher outline to the GitHub Advanced class.
---


## Git Configuration

### Summary
* Scopes
* Excludesfile

#### Details
```
git config --list
git config user.name
git config user.email
git config --global core.autocrlf <value>
git config --global color.ui auto
```

## Starting on the command line

### Summary
* New project
* Existing project
* Cloning

#### Details
```
git init [project-name]

cd [dir]
git init

git clone [url] [optional-name]
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
git status
git add <filename>
git commit
git commit -m"<message>"
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
git diff
git diff --staged
git diff HEAD
git diff [file]
git diff --stat -w --color-words
```

## Reviewing history

### Summary
* Basic review
* Narrowing results
* Filtering by message
* Filtering by patch

#### Details
```
git log
git log -<n>`
git log --stat`
git log --patch`
git log --all`
git log --author=<committer>
git log --format=` full, fuller, raw
git log --diff-filter=[A|M|D]
git log -S<StringInPatch>` Search for string match _in_ patch
git log -G="<pattern">` Listing patch change sets
git log --word-diff --patch
git log --graph
git log --decorate
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
git branch
git branch <name> <ref>
git branch -d <name>
git branch -m <old> <new>
git branch --merged
git branch --no-merged
```

## Switching branches & discarding changes

### Summary
* `Checkout` as a multi-use command
* Changing branches
* Exploring detached `HEAD`s
* Discarding dirty working tree paths

#### Details
```
git checkout [branch]
git checkout -- [file]
git checkout [ref]

```

## Remotes

### Summary
* Explain convention of `origin`
* Aliasing, bookmark to server URL
* Removing connections

#### Details
```
git clone -o github <URL>
git remote add <name> <path>
git ls-remote <name>
git remote rm <name>
```

## Publishing changes

### Summary
* Publishing commit history
* Showing remote branches
* Showing all branches

#### Details
```
git push -u origin master
git config --global push.default matching
git config --global push.default simple
git branch -r
git branch -a`
```

## Merging at the command line

### Summary
* Folding in branches
* Resolving conflicting merges (manually edit)
* Resolving file with shortcuts

#### Details
```
git pull origin
git pull
git pull --rebase

git merge
git merge -m<message>

git checkout --ours [file]
git checkout --theirs [file]

git add [file]
git commit

```

## Fetching changes

### Summary
* Comparing without merge
* Merging selectively

#### Details
```
git fetch [remote]
git branch -a
```

## Removing files

### Summary
* Git observation of filesystem removals
* Removing files
* Un-tracking files

#### Details
```shell
git add -u .
git rm <file>
git rm --cached -- <filename>
```

## Moving files

### Summary
* Moving generates new tree, not a new blob
* Similarity Index engaged when committing

#### Details
```shell
mv <file> <newfilename>
git add -A .
# or
git mv <file> <file>
git log --stat -M
git log --follow <file>
```

## Undoing commits

### Summary
* Generating commit to restore past patch set
* Clearing index and working directory
* Reseting index, updating working directory
* Reseting index only
* By commit ref, branch name, remote
* Why the different flavors (deep dive)

#### Details
```shell
git revert <REF>
git reset --hard
git reset --mixed
git reset --soft
```

## Ignoring temporary files

### Summary
* Creating a .gitignore
* Adding patterns
* Within _sub directories_
* Negation of ignore pattern
* Global/external ignore

#### Details
```
git config --global core.excludesfile
```

## Stashing in-progress changes

### Summary
* Temporarily store tracked changes
* Restoring by popping
* Move aside untracked files

#### Details
```
git stash
git pop
git stash --include-untracked
```

## Recovering almost anything

### Summary
* Tracing Git action "history"
* Explore last actions

#### Details
```
git reflog
git reflog --all
git config --global alias.undo "reset HEAD@{1}"
git checkout HEAD@{1}
```

## Pull requests

### Summary
* Pushing branch to repo
* Creating GH pull request

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
git config --global alias.l "log --oneline --stat"
git config alias.s "status -s"
git s
```
