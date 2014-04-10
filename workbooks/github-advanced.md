---
layout: workbook
title: GitHub Advanced Workbook • Mastering all of Git and GitHub
description: A student and teacher outline to the GitHub Advanced class.
---


## Tagging and releases

### Summary
* Why create a tag through the web UI?
* Not a branch HEAD. Points to a specific commit.
* Attaching binaries to releases (Web UI and API)
* Tag with message (defaults to annotated)
* Force existing tag to new ref
* Delete a tag
* `git describe` to name the most recent reachable tag
* Tag types (reference, annotated, signed)
* Deleting a tag locally
* Deleting tag on a remote

#### Details
```
git tag
git tag -a
git tag -a -m

git tag -m<message> <TAGNAME>
git tag -a -m<message> <TAGNAME>
git tag -s -m<message> <TAGNAME>
git tag -f <TAGNAME>
git tag -d <TAGNAME>
git describe
git describe <SHA>
git tag -d 12345
git push origin :<tag-name-to-delete>
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
git add -p

# Add interactively
git add -i

# The GitHub for Mac desktop client
github
```

## Committing Efficiencies

### Summary
* Add and commit
* Amend existing commit

#### Details
```
git commit -a -m"message"
git commit --amend
```

## GitHub

### Summary
* Closing Issues and PR by commit number
* Retrieving PRs locally to resolve conflicts
(without locally merging to target branch)

#### Details
```
git commit -m "Your message closes #[issue]"
```

## Stashing with precision

### Summary
* Name your stash
* List stashes
* Use specific stashes

#### Details
```
git stash save "<description>"
git stash --include-untracked
git stash list
git stash pop <name>
git stash drop <name>
git stash apply
git stash clear
git stash -p
```

## Cherry-pick

### Summary
* Why you want to
* What happens
* Tracing any cherry-picks

#### Details
```
git cherry-pick [ref]
git branch --contains
```

## History analysis

### Summary
* Commit ranges to review branch differences
* Verifying merges have completed

#### Details
```
git log --left-right branchA...branchB
git branch --contains [ref]

git name-rev [commit-ref]
```

## Remote reviewing, synchronization

### Summary
* Determine what's on the upstream
* Identify out-of-date branches
* Review Pull Requests

#### Details
```
git remote -v
git remote show <remote-name>
git ls-remote
git branch -vv
```

Retrieving a Pull Request branch (does not matter if it is a fork or on same repo):

```
git pull [remote] [pull-request-namespace]

git fetch [remote] [pull-request-namespace]
```

Obtaining any repository's branch:

```
git fetch <URL> <branch>
git checkout FETCH_HEAD
git branch <newbranchname> FETCH_HEAD
```

## Upstream maintenance

### Summary
* Remove non-matching _local_ remote branches
* Remove non-matching remote upstream branches
* Remove only remote upstream branch

#### Details
```
git remote update --prune
git push <remote> --prune
git push origin :<branch-name>

```

## Rebasing

### Summary
* Branch Preparation
* Rebasing __is not__ merging

#### Details
```
git checkout <featurebranch>
git rebase master

git config branch.autosetuprebase
git config branch.[master].rebase true
```

* Conflicts can occur
* Resolution is simple
* Small variation to merge conflict

```
git add [conflicting-file]
git rebase --continue
```

## Interactive Rebasing

### Summary
* Reorder commits
* Rewrite history entirely
* Discard commits
* Revise/edit commits
* Safe patterns for rebasing local history

#### Details
```
git rebase -i <REF>
git rebase -i [remote]/[branch]
```

## Rebasing and beyond

### Summary
* Changing where branch history begins
* Moving history around

#### Details
```
rebase --onto <new> <old> <target>
```

* Important of commit message prefix
* `fixup! [common-pattern]`
* `squash! [common-pattern]`

```
rebase --autosquash
```

* Collapsing commits during merge
* Pros/cons

```
merge --squash [branch]
```

## Revising history safely

### Summary
* Safely resetting local history
* Guaranteeing remote history is not lost

#### Details
```
git reset --[option] [remote]/[branch]
```

## Cleaning

### Summary
* Purge untracked in working dir
* for directories
* for removing ignored files (useful for tidying build artifacts)

#### Details
```
git clean -f
git clean -fd
git clean -fx
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
* [P4Merge](http://www.perforce.com/downloads/Perforce-Software-Version-Management/complete_list/Free%2020-User%20Edition#10)
* Opendiff
* KDiff
* Kaleidoscope
* Vimdiff
* Meld

#### Details
Difftool Execution:

```
git difftool --tool-help

git config diff.tool <tool-name-in-config>

git config difftool.prompt false

git config difftool.<tool-name>.cmd "<path [args]>"
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
```
git config --global merge.tool p4mergetool

git config --global mergetool.p4mergetool.cmd "/Applications/p4merge.app/Contents/Resources/launchp4merge \$PWD/\$BASE \$PWD/\$REMOTE \$PWD/\$LOCAL \$PWD/\$MERGED"

git config --global mergetool.p4mergetool.trustExitCode false

git config --global mergetool.keepBackup false
```

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
gh create
gh pull-request
gh fork
gh compare
gh browse
```

## ReReRe

### Summary
* Reuse recorded resolution

#### Details
```
git config rerere.enable true
```

## Credential Caching

### Summary
* Save passwords securely

#### Details
```
git config --global credential.helper cache
git config credential.helper 'osxkeychain'
git config credential.helper 'wincred'
git credential-cache exit
```

## SSH Key (Optional)

### Summary
* Classic authentication with GitHub
* Generate key
* Upload public key to GitHub

#### Details
```
ssh-keygen -t rsa -C"Anything..."
ssh -T git@github.com
```

## Git-core GUIs

### Summary
* for staging, committing
* for browsing history

#### Details
```
git gui
gitk
```
