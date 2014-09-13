---
layout: curriculum
title: GitHub Advanced
byline: Mastering Git and GitHub
---

This curriculum will be your companion to the GitHub Advanced class taught by the GitHub Training Team and other educational groups. In this course, you'll explore strategies for branch and history rewriting, temporary storing and recovery techniques, and Git technology mechanics for faster problem solving.

{% capture slide %}
### Understanding Git
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details


{% capture slide %}
### Branching strategies
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details
##### Applying branching patterns
##### Branch best practices



{% capture slide %}
### Git-core GUIs
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details



{% capture slide %}
### Mastering shortcuts & efficiencies
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details
##### Shortcuts
* Shortcuts to multiple steps
* Useful customized commands

Add and commit along with the commit message:

```shell
$ git commit -a -m"[message]"
```

Commit, amend, and provide the commit message:

```shell
$ git commit --amend -m "[updated message]"
```

Checkout and create a branch:

```shell
$ git checkout -b [branch] [base]
```

##### Temporary changes

* Name your stash
* List stashes
* Use specific stashes

```shell
$ git stash
$ git stash save "<description>"
$ git stash --include-untracked
$ git stash list
$ git stash pop <name>
$ git stash drop <name>
$ git stash apply
$ git stash clear
$ git stash -p
```

#### Isolating Work

* Version patches of large change sets
* Stage interactively on command line
* Revise to-be-committed patch

```bash
# Stage by patch
$ git add -p [file]

# Unstage by patch
git reset reset HEAD -p [file]
```



{% capture slide %}
### Ignoring & cleaning up files
{% endcapture %}{% include slide-section %}

{% capture lab %}
1. Setup ignore patterns to prevent accidental versioning
2. Clean working directory of untracked files
3. Tidy working directory of any `.gitignore` matched files
{% endcapture %}{% include lab %}

#### Details
##### Repository-specific ignores
* Ignoring files from repo & system level
* Reviewing ignored files with custom command
* Forcing a staging of ignored files

```shell
$ vi .gitignore
```

##### System-wide ignores
```shell
$ git config core.excludesfile [path]
```

##### Listing ignored files
```shell
$ git config alias.show-ignored \
    "ls-files --exclude-standard
    --others --ignored"
```

##### Staging ignored files
```shell
$ git add -f [path]
```

##### Removing unwanted files
* Purge untracked in working dir
* for directories
* for removing ignored files (useful for tidying build artifacts)

```
$ git clean -f
$ git clean -fd
$ git clean -fx
```

#### Video
<iframe src="//player.vimeo.com/video/99804597" width="500" height="350" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>



{% capture slide %}
### Navigating history
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details





{% capture slide %}
### Capturing pieces of history
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details
* Reusing small pieces of code with `cherry-pick`
* Why use `cherry-pick` instead of `merge`?
* What happens when you `cherry-pick`?
* Maintaining `author` and `committer` fields
* Tracing any cherry-picks with `-x` commit message metadata
* `-x` metadata hyperlinked on GitHub
* `$ git cherry` to view absent commits
* Can include cherry-pick during rebase interactive

```shell
# Generate new commit on current branch
# with patch of specified commit

$ git cherry-pick [commit]
```

##### Identifying incorporated commits
```shell
# List branches containing same patch

$ git cherry [comparison-branch]
```





{% capture slide %}
### Rewriting and crafting history
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details
##### What is rebase?
* Branch Preparation
* Rebasing __is not__ merging
* Conflicts can occur
* Resolution is simple
* Small variation to merge conflict

##### Rebasing a branch
Re-playing branch-specific commits against a base is the most common use case for rebase.

```shell
$ git checkout <featurebranch>
$ git rebase master
```

##### Rebase configuration
The behavior of `pull` can be configured to replay all local commits ahead of the incoming upstream ones.

```shell
$ git config pull.rebase true
```

##### Handling conflicts
Resolving a conflict during a rebase requires intervention, and then signaling that the conflict is resolved.

```shell
$ git add [conflicting-file]
$ git rebase --continue
```

##### Reordering History

* Reorder commits
* Rewrite history entirely
* Discard commits
* Revise/edit commits
* Safe patterns for rebasing local history
* Verbs (cheat sheet of commands)

```bash
$ git rebase -i <REF>
```

##### Reordering all commits on a branch

```bash
$ git rebase -i [remote]/[branch]
```

##### Rebase markers
Automatically arrange commits and rebase with `fixup!` and `squash!` message prefixes

```bash
$ git rebase -i --autosquash [ref]
```


{% capture slide %}
### Cutting releases
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details



{% capture slide %}
### Reviewing & synchronizing
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details
##### Reviewing remote branches
* PRs to horizontal contributors
* PRs multiple levels up
* Converting issues to PRs
* PRs as Issues with code
* Automatic closing of PRs by local merges
* Merges must be _made by recursive_
* Retrieving PRs locally to resolve conflicts
(without locally merging to target branch)

```shell
$ git ls-remote origin
$ git fetch origin refs/pull/1/head

$ git show FETCH_HEAD
$ git merge --no-commit --no-ff FETCH_HEAD
```

##### Examining remote branches
```shell
$ git remote -v
$ git remote show <remote-name>
$ git ls-remote
$ git branch -vv
```

##### Retrieving arbitrary commits
To merely retrieve the commits to `FETCH_HEAD`:

```shell
$ git fetch [remote] [pull-request-namespace]
```

To merge the retrieved commits into a branch:

```shell
$ git pull [remote] [pull-request-namespace]
```

##### Leveraging FETCH_HEAD
```shell
$ git fetch <URL> <branch>
$ git checkout FETCH_HEAD
$ git branch <newbranchname> FETCH_HEAD
```

##### What are refspecs?
* Specification for retrieval and pushing
* Implied on fetch, pull, and push
* Altered by option switches like `--tags`
* Stored in `.git/config`
* Ability to retrieve Pull Request branches

##### Refspec examples
```
# Source and destination refspecs
$ git fetch [repo-url] [source]:[destination]

$ git fetch [repo-url] master
 * branch     master     -> FETCH_HEAD

$ git fetch origin refs/pull/1/head
 * branch     refs/pull/1/head -> FETCH_HEAD
```

##### Refspec to retrieve pull requests
```
$ git config --add remote.[upstream].fetch "+refs/pull/*/head:refs/remotes/[upstream]/pull/*"
```



{% capture slide %}
### Filtering histories & externalizing dependencies
{% endcapture %}{% include slide-section %}

{% capture lab %}
1. Separate versioned content in a repository into a separate one
2. Clean up unwanted history repository-wide with `filter-branch`
3. Incorporate external repositories as dependencies with `submodule`
{% endcapture %}{% include lab %}

#### Details
```shell
$ git filter-branch
    --subdirectory-filter [dir]
    -- --all
```

```shell
$ git filter-branch --index-filter
    'git rm --cached
    --ignore-unmatch [file]' HEAD
```

##### Adding submodules
Add a separate repository as a subdirectory:

```
$ git submodule add [repo-url] [folder]
```

##### Using submodules
For a freshly cloned repository with submodules

```
# Step-by-step
$ git submodule init
$ git submodule update

# Single process with option switches
$ git submodule update --init --recursive
```





{% capture slide %}
### GitHub CLI
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details



{% capture slide %}
### Signing work
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details







{% capture slide %}
### Avoiding repetitive conflicts
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details



{% capture slide %}
### The GitHub API
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details




{% capture slide %}
### Diff & merge tool
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details



{% capture slide %}
### Additional resources
{% endcapture %}{% include slide-section %}

{% capture lab %}

{% endcapture %}{% include lab %}

#### Details
