---
layout: workbook
title: GitHub Intermediate Workbook: Leveraging Git and GitHub from the command line
description: A student and teacher outline to the GitHub Advanced class.
---


## Git Configuration
* Scopes
* Excludesfile

```
git config --list
git config user.name
git config user.email
git config --global core.autocrlf <value>
git config --global color.ui auto
```

## Starting on the command line
* New project
* Existing project
* Cloning

```
git init [project-name]

cd [dir]
git init

git clone [url] [optional-name]
```

## Repository internals
* Exploring fundamentals
  * `.git`
    * All history stored locally
    * Distributed nature, simultaneous changes
    * No locking
    * Optimized for text, small files
* HEAD
* Index/Staging
* `refs/heads/`
* Efficiency of storage (zlib)

## Commits at the command line
* Three stage thinking

```
git status
git add <filename>
git commit
git commit -m"<message>"
```

## Comparing changes
* Basic diff command
* Compare only a subset of paths
* Compare against specific revision
* Dependent upon file state
* Useful option switches

```
git diff
git diff --staged
git diff HEAD
git diff [file]
git diff --stat -w --color-words
```

## Reviewing history
* Basic review
* Narrowing results
* Filtering by message
* Filtering by patch

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
* Creating feature or prototype
* Showing local branches
* Creating
* Deleting
* Renaming

```
git branch
git branch <name> <ref>
git branch -d <name>
git branch -m <old> <new>
git branch --merged
git branch --no-merged
```

## Switching branches & discarding changes
* `Checkout` as a multi-use command
* Changing branches
* Exploring detached `HEAD`s
* Discarding dirty working tree paths

```
git checkout [branch]
git checkout -- [file]
git checkout [ref]

```

## Remotes
* Explain convention of `origin`
* Aliasing, bookmark to server URL
* Removing connections

```
git clone -o github <URL>
git remote add <name> <path>
git ls-remote <name>
git remote rm <name>
```

## Publishing changes
* Publishing commit history
* Showing remote branches
* Showing all branches

```
git push -u origin master
git config --global push.default matching
git config --global push.default simple
git branch -r
git branch -a`
```

## Merging at the command line
* Folding in branches
* Resolving conflicting merges (manually edit)
* Resolving file with shortcuts

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
* Comparing without merge
* Merging selectively

```
git fetch [remote]
git branch -a
```

## Removing files
* Git observation of filesystem removals
* Removing files
* Un-tracking files

```shell
git add -u .
git rm <file>
git rm --cached -- <filename>
```

## Moving files
* Moving generates new tree, not a new blob
* Similarity Index engaged when committing

```shell
mv <file> <newfilename>
git add -A .
# or
git mv <file> <file>
git log --stat -M
git log --follow <file>
```

## Undoing commits
* Generating commit to restore past patch set
* Clearing index and working directory
* Reseting index, updating working directory
* Reseting index only
* By commit ref, branch name, remote
* Why the different flavors (deep dive)

```shell
git revert <REF>
git reset --hard
git reset --mixed
git reset --soft

```

## Ignoring temporary files
* Creating a .gitignore
* Adding patterns
* Within _sub directories_
* Negation of ignore pattern
* Global/external ignore

```
git config --global core.excludesfile
```

## Stashing in-progress changes
* Temporarily store tracked changes
* Restoring by popping
* Move aside untracked files

```
git stash
git pop
git stash --include-untracked
```

## Recovering almost anything
* Tracing Git action "history"
* Explore last actions

```
git reflog
git reflog --all
git config --global alias.undo "reset HEAD@{1}"
git checkout HEAD@{1}
```

## Pull requests
* Pushing branch to repo
* Creating GH pull request

## GitHub Issues
* Basic use cases
* Cross referencing with `#` and `username/reponame#ISSUE`

## Command shortcut aliases
* Faster to type
* Quicker access to complex commands
* Compatible with zsh completions

```
git config --global alias.l "log --oneline --stat"
git config alias.s "status -s"
git s
```
