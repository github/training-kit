---
layout: workbook
title: GitHub Advanced Workbook
description: This student and teacher workbook will be your companion to the GitHub Advanced class taught by the GitHub Training Team and other educational groups. In this course, you'll learn how to leverage all of the shortcuts, commands and advanced workflows of both Git and GitHub.

---

## Common branching strategies

### Summary
* GitHub Flow
* Branch-per-feature
* Compatibility with Pull Requests
* git-flow
* Long-term release support

#### Details
These are called Branching Strategies, but are just as easily called *Team Collaboration Techniques* in an abstract discussion of version control.

* Branch by feature
* git-flow
    *  Made popular on Git by Vincent Driessen and his NVIE site
    * [Git-Flow: A Successful Branching Model](http://nvie.com/posts/a-successful-git-branching-model/)
    * [Git-Flow Source](https://github.com/nvie/gitflow)
    * Too many levels?
    * GH prefers Simplest thing that works.
* GitHub Flow
    * [How GitHub Develops](https://github.com/blog/919-how-github-develops)
    * [GitHub Flow blog post](http://scottchacon.com/2011/08/31/github-flow.html)
    * Works well with Pull Requests when one-layer deep
    * Think of features much smaller than typical
* Git's Model
    * [Git Maintenance Notes](https://sites.google.com/site/maintnotes/)
    * [Git Workflows](https://www.kernel.org/pub/software/scm/git/docs/gitworkflows.html)
    * [Git's Source Code](https://github.com/git/git)
    * Branches
        * master
        * maint
        * next (graduation from pu)
        * pu (can be rebased)
        * html
        * man
    * _"A trivial and safe enhancement goes directly on top of 'master'."_
    * _"The two branches "master" and "maint" are never rewound, and "next" usually will not be either"_
    * _"When a topic that was in 'pu' proves to be in testable shape, it graduates to 'next'."_
* Version numbers
    * `major.minor.fix`
    * [Semantic versioning](http://semver.org)
* Rebase before sharing (sending a Pull Request)
    * [Contributing to Spring Social](https://github.com/spring-projects/spring-social/wiki/Contributing)
    * [How To Merge Without Fear](http://blog.springsource.org/2010/12/21/git-and-social-coding-how-to-merge-without-fear/)
    * [What to do when things get complicated](http://blog.springsource.org/2011/07/18/social-coding-pull-requests-what-to-do-when-things-get-complicated/)

## Applying branching patterns
### Summary
* Breaking features down into pieces
* Feedback early on Pull Requests
* @mentioning teams instead of individuals
* Continuous integration


## Branch pull options
### Summary
* Fetch single branch
* Merge on pull
* Rebase on pull
* `FETCH_HEAD`
* `MERGE_HEAD`


## Inserting Commits Into Existing History
### Summary
* Reusing small pieces of code with `cherry-pick`
  * Why use `cherry-pick` instead of `merge`?
  * What happens when you `cherry-pick`?
  * Maintaining `author` and `committer` fields
  * Tracing any cherry-picks with `-x` commit message metadata
  * `-x` metadata hyperlinked on GitHub
  * `$ git cherry` to view absent commits
* Rebase interactive
  * Can include cherry-pick
  * Must remember to continue the rebase
  * Alters history

#### Details
```
$ git cherry-pick [ref]
$ git cherry-pick [ref1] [ref2]

$ git branch --contains [noncherrypickedref]
$ git cherry [upstreambranch]

+ bd650366fa8c39f03cfc9dd5290f60e7331a631d
+ ea62f9f6a7cef55a8a3028e617d28819408a63c4
+ 874628c0e405390130d6457776273451bb66d3a8
+ 046a9b8d0f2363361e45cfbc7e0f6d82968f2f9f
+ 315fe16408f9a9080527e00df3d9a8c1ba0dc97a
```


## Undoing and Re-doing Almost Anything
### Summary
* The reflog for hard resets
* Cherry-pick for retrival from the trash
* Amending a commit
* Rebasing a commit
* Resetting to a past commit (mixed, soft, hard)
* Resetting to an upstream point
* Aborting a merge
* Aborting a rebase

#### Details

To correct the prior commit:

```
$ git commit --amend -m "updated message"
```


## History searches with log
### Summary
* Log is like a search engine
* Search for person, time, change, contents, message
* Dramatically narrows search time

#### Details
```
$ git log --author Matthew
$ git log --since 2.days.ago
$ git log -S myvar
$ git log --grep=Fix
$ git log --follow --stat --diff-filter=A -- <filename>
```

## Commit data structure internals
### Summary
* Directed acyclic graph
* Parent references (0, 1, many)
* Similar to a linked list
* Orphans (and garbage collection)
* Visualizing orphans
* Garbage collection triggers

## Building Custom Commands via Aliases
### Summary
* Git-specific aliases are portable
* Auto-completion on some shells
* Can be Git commands or shell commands
* [Matthew's `.gitconfig`](https://github.com/matthewmccullough/dotfiles/blob/master/gitconfig#L41-L182)

#### Details

```
$ git config --global alias.s 'status -s'
```

## Tagging and releases

### Summary
* Why create a tag through the web UI?
* Not a branch HEAD. Points to a specific commit.
* Attaching binaries to releases (Web UI and API)
* Tag with message (defaults to annotated)
* Force existing tag to new ref
* Delete a tag
* `$ git describe` to name the most recent reachable tag
* Tag types (reference, annotated, signed)
* Deleting a tag locally
* Deleting tag on a remote

#### Details
```
$ git tag
$ git tag -a
$ git tag -a -m

$ git tag -m<message> <TAGNAME>
$ git tag -a -m<message> <TAGNAME>
$ git tag -s -m<message> <TAGNAME>
$ git tag -f <TAGNAME>
$ git tag -d <TAGNAME>
$ git describe
$ git describe <SHA>
$ git tag -d 12345
$ git push origin :<tag-name-to-delete>
```


## Project management on GitHub

### Summary
* Effective milestone
* Links to Milestones
* Pulse
* Contributor graphs
* Traffic graphs
* Issue dashboard (cross-repo view)

## Visualizations on GitHub

### Summary
* Branches page
* Compare view
* Compare with `master@{yesterday}` refs
* Network graph
* Network members

## Advanced Pull Request use

### Summary
* PRs to horizontal contributors
* PRs multiple levels up
* Converting issues to PRs
* PRs as Issues with code
* Automatic closing of PRs by local merges
* Merges must be _made by recursive_
* Retrieving PRs locally to resolve conflicts
(without locally merging to target branch)

#### Details
```
$ git ls-remote origin
$ git fetch origin refs/pull/1/head

From github.com:youruser/somereponame
 * branch            refs/pull/1/head -> FETCH_HEAD

$ git show FETCH_HEAD
$ git merge --no-commit --no-ff FETCH_HEAD
```


## GitHub API

### Summary
* Requests
* Authorization
* Octokit wrappers
* Hypermedia as the Engine of Application State (HATEOS)

## Service hooks and Webhooks

### Summary
* Pre-built service hooks
* Custom webhooks
* Specifying webhook events
* Testing webhooks

## Staging Shortcuts

### Summary
* Add parts of files
* Add files interactively

#### Details
```
# Add in patch mode
$ git add -p

# Add interactively
$ git add -i

# The GitHub for Mac desktop client
$ github
```

## Stashing with precision

### Summary
* Name your stash
* List stashes
* Use specific stashes

#### Details
```
$ git stash save "<description>"
$ git stash --include-untracked
$ git stash list
$ git stash pop <name>
$ git stash drop <name>
$ git stash apply
$ git stash clear
$ git stash -p
```

## Committing Efficiencies

### Summary
* Add and commit
* Amend existing commit

#### Details
```
$ git commit -a -m"message"
$ git commit --amend
```

## Advanced GitHub Issues

### Summary
* [Guide to Mastering Issues](https://guides.github.com/overviews/issues/)
* [Automatic closing of Issues by commit](https://help.github.com/articles/closing-issues-via-commit-messages)
* Symmetric cross-links of issue mentions
* Cross-repo Issue mentions

#### Details
* Issues can auto-close when merged to the _default_ branch
* [Keywords](https://help.github.com/articles/closing-issues-via-commit-messages) to close issues:
  * `close`
  * `closes`
  * `closed`
  * `fix`
  * `fixes`
  * `fixed`
  * `resolve`
  * `resolves`
  * `resolved`

```
$ git commit -m "This fixes #[issue]"
$ git commit -m "This closes #[issue]"
$ git commit -m "This resolves #[issue]"
```


## History analysis
### Summary
* Commit ranges to review branch differences
* Verifying merges have completed

#### Details
```
$ git log --left-right branchA...branchB
$ git branch --contains [ref]

$ git name-rev [commit-ref]
```

## Remote reviewing, synchronization

### Summary
* Determine what's on the upstream
* Identify out-of-date branches
* Review Pull Requests

#### Details
```
$ git remote -v
$ git remote show <remote-name>
$ git ls-remote
$ git branch -vv
```

Retrieving a Pull Request branch (does not matter if it is a fork or on same repo):

```
$ git pull [remote] [pull-request-namespace]

$ git fetch [remote] [pull-request-namespace]
```

Obtaining any repository's branch:

```
$ git fetch <URL> <branch>
$ git checkout FETCH_HEAD
$ git branch <newbranchname> FETCH_HEAD
```

## Upstream maintenance

### Summary
* Remove non-matching _local_ remote branches
* Remove non-matching remote upstream branches
* Remove only remote upstream branch

#### Details
```
$ git remote update --prune
$ git push <remote> --prune
$ git push origin :<branch-name>

```

## Rebasing basics

### Summary
* Branch Preparation
* Rebasing __is not__ merging

#### Details
```
$ git checkout <featurebranch>
$ git rebase master

$ git config pull.rebase true
```

* Conflicts can occur
* Resolution is simple
* Small variation to merge conflict

```
$ git add [conflicting-file]
$ git rebase --continue
```

## Interactive rebasing

### Summary
* Reorder commits
* Rewrite history entirely
* Discard commits
* Revise/edit commits
* Safe patterns for rebasing local history
* Verbs (cheat sheet of commands)

#### Details
```
$ git rebase -i <REF>
$ git rebase -i [remote]/[branch]
```

## Advanced rebasing

### Summary
* [Rebasing chapter of Pro Git book](http://git-scm.com/book/ch3-6.html)
* [Git rebase --onto section of Pro Git book](http://git-scm.com/book/ch3-6.html#More-Interesting-Rebases)
* Changing where branch history begins
* Moving blocks of history around
* Breadcrumbs for later fixups and squashes

#### Details
```
$ git rebase --onto <newbase> <upstream> <branch>
```

* Important of commit message prefix
* `fixup! [common-pattern]`
* `squash! [common-pattern]`

```
$ git rebase --autosquash [ref]
```

## Squash merging
### Summary
* Collapsing commits during merge
* Pros/cons (loss of granularity)
* Relation to branching strategies and deliverable expectations

```
$ git merge --squash [branch]
```

## Revising history safely

### Summary
* Safely resetting local history
* Guaranteeing remote history is not lost

#### Details
```
$ git reset --[option] [remote]/[branch]
```

## Cleaning

### Summary
* Purge untracked in working dir
* for directories
* for removing ignored files (useful for tidying build artifacts)

#### Details
```
$ git clean -f
$ git clean -fd
$ git clean -fx
```

## Treeish / commitish

### Summary
* Simple ways of describing history points
* Easier-to-describe and understand numerically

#### Details
```
HEAD
HEAD^^
HEAD~2
```

## Diff Tool

### Summary
* [P4Merge](http://www.perforce.com/downloads/Perforce/20-User)
* Opendiff
* KDiff
* Kaleidoscope
* Vimdiff
* Meld

#### Details
Difftool execution:

```
$ git difftool --tool-help
$ git config diff.tool <tool-name-in-config>
$ git config difftool.prompt false
$ git config difftool.<tool-name>.cmd "<path [args]>"
```

A sample `.gitconfig` file:

```
[diff]
    tool = p4merge
[difftool "p4merge"]
    cmd = "/Applications/p4merge.app/Contents/Resources/launchp4merge $LOCAL $REMOTE"
[difftool]
    prompt = false
```

## Merge Tool

### Summary
* Same as difftool, but 3-way comparison

#### Details

Mergetool execution:

```
$ git config --global merge.tool p4mergetool

$ git config --global mergetool.p4mergetool.cmd "/Applications/p4merge.app/Contents/Resources/launchp4merge \$PWD/\$BASE \$PWD/\$REMOTE \$PWD/\$LOCAL \$PWD/\$MERGED"

$ git config --global mergetool.p4mergetool.trustExitCode false

$ git config --global mergetool.keepBackup false
```

A sample `.gitconfig` file:

```
[merge]
    tool = Kaleidoscope
[mergetool "p4mergetool"]
    cmd = " /Applications/p4merge.app/Contents/Resources/launchp4merge $PWD/$BASE $PWD/$REMOTE $PWD/$LOCAL $PWD/$MERGED"
    keepBackup = false
```

## GitHub CLI

### Summary
* API for interfacing with your repos
* Where config/credentials are stored
* Reasons for usage

#### Details
```
$ gh create
$ gh pull-request
$ gh fork
$ gh compare
$ gh browse
```

## Minimizing repetitive conflict resolution with ReReRe

### Summary
* Reuse recorded resolution
* Stores solutions for a limited period of time
* Machine-local storage
* Based on diffs (not heuristics)
* Helps with "trial merges"

#### Details
```
$ git config rerere.enable true
```

## Refspecs
### Summary
* Specification for retrieval and pushing
* Implied on fetch, pull, and push
* Altered by option switches like `--tags`
* Stored in `.git/config`
* Ability to retrieve Pull Request branches

```
$ git fetch [repo-url] [source]:[destination]
$ git config --add remote.[upstream].fetch "+refs/pull/*/head:refs/remotes/[upstream]/pull/*"
```

## Git Notes
### Summary
* Supplements commit message and description
* Parallel graph
* Not cryptographically as trustworthy as the commits
* Displayed in the GitHub web UI
* Ability to namespace
* Manual publishing
* Manual retrieval

```
$ git notes add [commit]
$ git notes edit [commit]

$ git notes --ref=[namespace] add [commit]
$ git log --show-notes=[namespace]

$ git push [remote] refs/notes/*
$ git push [remote] refs/notes/[namespace]

$ git fetch [remote] refs/notes/*:refs/notes/*

```

## Credential Caching

### Summary
* Save passwords securely

#### Details
```
$ git config --global credential.helper cache
$ git config credential.helper 'osxkeychain'
$ git config credential.helper 'wincred'
$ git credential-cache exit
```

## SSH keys

### Summary
* Classic authentication with GitHub
* Diminishing in use at HTTPS increases
* Blocked by more firewalls
* [Generate SSH key](https://help.github.com/articles/generating-ssh-keys)
* [Upload public key to GitHub](https://github.com/settings/ssh)
* [Audit SSH key use](https://github.com/settings/ssh)


#### Details
```
# Generate the key
$ ssh-keygen -t rsa -C"Anything..."

# Verify that the key works
$ ssh -T git@github.com
```

## Git-core GUIs

### Summary
* for staging, committing
* for browsing history
* Tcl/Tk based

#### Details
```
$ git gui
$ gitk
$ gitk&
$ gitk --all
```

## Widely used GUIs

### Summary
* [Listing of GUIs](http://git-scm.com/downloads/guis)
* [eGit for Eclipse](http://eclipse.github.io/)
* [SmartGit for Windows, Mac, Linux](http://www.syntevo.com/smartgithg/)
