---
layout: curriculum
title: GitHub Advanced
description: Mastering Git and GitHub
---

### Mastering Shortcuts
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


### Isolating Work
* Version patches of large change sets
* Stage interactively on command line
* Revise to-be-committed patch

```bash
# Stage by patch
$ git add -p [file]
```


### Understanding Git
{% capture svg_path %}../assets/diagrams/commit-data-structure.svg{% endcapture %}
{% include svg %}

* Directed acyclic graph
* Tree object
* Blob object
* SHA1

{% capture svg_path %}../assets/diagrams/commit-dag.svg{% endcapture %}
{% include svg %}

* Linked list of commits
* First commit has `nil` parent
* Integrity checking with `git gc`


### Best Practices
* Collapsing commits during merge
* Checking merge state
* Cleaning up branches

```shell
$ git merge --squash [branch]

$ git branch --contains [commit]

$ git branch --merged [commit]

$ git branch --no-merged [commit]
```


### Ignoring content

#### Repository-specific ignores
* Ignoring files from repo & system level
* Reviewing ignored files with custom command
* Forcing a staging of ignored files

```shell
$ vi .gitignore
```

#### System-wide ignores
```shell
$ git config core.excludesfile [path]
```

#### Listing ignored files
```shell
$ git config alias.show-ignored \
    "ls-files --exclude-standard 
    --others --ignored"
```

#### Staging ignored files
```shell
$ git add -f [path]
```

#### Video
<iframe src="//player.vimeo.com/video/99804597" width="100%" height="350" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


### Navigating History

```bash
$ git log --author [author-name]

$ git log --since [integer].days.ago

$ git log -S [string-in-patch]

$ git log -G [regex-pattern-in-patch]

$ git log --grep=[regex-in-message]

$ git log --diff-filter=[A|M|D]

$ git log --follow --stat --diff-filter=[A|M|D] -- <filename>

$ git log --oneline --left-right master..other

$ git log --oneline --left-right master...other

$ git name-rev [commit-ref]
```

* Log is like a search engine.
* Search for person, time, change, contents, message.
* Dramatically narrows human search time when using `log` search filters.

#### Further reading
* [Git revision specificat
ion syntax](https://www.kernel.org/pub/software/scm/git/docs/gitrevisions.html)

#### Video
<iframe src="//player.vimeo.com/video/95811891" width="100%" height="350" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Temporary Changes

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


### Incorporating History

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

```shell
# Generate new commit on current branch
# with patch of specified commit

$ git cherry-pick [commit]
```

#### Identifying incorporated commits
```shell
# List branches containing same patch

$ git cherry [comparison-branch]
```

#### More examples
```shell
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


### Rewriting history with rebase

{% capture svg_path %}../assets/diagrams/rebase.svg{% endcapture %}
{% include svg %}

#### What is rebase?
* Branch Preparation
* Rebasing __is not__ merging
* Conflicts can occur
* Resolution is simple
* Small variation to merge conflict

#### Rebasing a branch
Re-playing branch-specific commits against a base is the most common use case for rebase.

```shell
$ git checkout <featurebranch>
$ git rebase master
```

#### Rebase configuration
The behavior of `pull` can be configured to replay all local commits ahead of the incoming upstream ones.

```shell
$ git config pull.rebase true
```

#### Handling conflicts
Resolving a conflict during a rebase requires intervention, and then signaling that the conflict is resolved.

```shell
$ git add [conflicting-file]
$ git rebase --continue
```

### Reordering History

* Reorder commits
* Rewrite history entirely
* Discard commits
* Revise/edit commits
* Safe patterns for rebasing local history
* Verbs (cheat sheet of commands)

```bash
$ git rebase -i <REF>
```

#### Reordering all commits on a branch

```bash
$ git rebase -i [remote]/[branch]
```

#### Rebase markers
Automatically arrange commits and rebase with `fixup!` and `squash!` message prefixes

```bash
$ git rebase -i --autosquash [ref]
```


### Fixing Branches
* This mode of rebase change where branch history begins
* Moving blocks of history around

To change which base a branch is placed upon:

```bash
$ git rebase --onto <newbase> <upstream> <HEAD|branch>
```

#### Further reading
* [Rebasing chapter of Pro Git book](http://git-scm.com/book/ch3-6.html)
* [Git rebase --onto section of Pro Git book](http://git-scm.com/book/ch3-6.html#More-Interesting-Rebases)


### Cutting Releases

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

{% capture svg_path %}../assets/diagrams/tag.svg{% endcapture %}
{% include svg %}

#### Reference tags
```shell
$ git tag [TAGNAME] [commit]
```

#### Annotated tags
```shell
$ git tag -a [TAG_NAME] [commit|branch]
$ git tag -a -m [TAG_NAME] [commit|branch]
```

#### Other tag options
```shell
$ git tag -s -m[message] [TAGNAME]
$ git tag -f [TAGNAME]
$ git tag -d [TAGNAME]
$ git describe
$ git describe [SHA]
$ git tag -d 12345
$ git push origin :[tag-name-to-delete]
```


### Reviewing synchronizing

#### Reviewing remote branches
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

#### Examining remote branches
```shell
$ git remote -v
$ git remote show <remote-name>
$ git ls-remote
$ git branch -vv
```

#### Retrieving arbitrary commits
To merely retrieve the commits to `FETCH_HEAD`:

```shell
$ git fetch [remote] [pull-request-namespace]
```

To merge the retrieved commits into a branch:

```shell
$ git pull [remote] [pull-request-namespace]
```

#### Leveraging FETCH_HEAD
```shell
$ git fetch <URL> <branch>
$ git checkout FETCH_HEAD
$ git branch <newbranchname> FETCH_HEAD
```


### Customizing Interaction
* Specification for retrieval and pushing
* Implied on fetch, pull, and push
* Altered by option switches like `--tags`
* Stored in `.git/config`
* Ability to retrieve Pull Request branches

```shell
$ git fetch [repo-url] [source]:[destination]
$ git config --add remote.[upstream].fetch "+refs/pull/*/head:refs/remotes/[upstream]/pull/*"
```


### Maintaining Remotes
* Remove non-matching _local_ remote branches
* Remove non-matching remote upstream branches
* Remove only remote upstream branch

```shell
# Discard remote local branches
# not present on upstream
$ git fetch --prune

# Delete an upstream branch
$ git push origin :<branch-name>
```


### Aggregating repositories

#### Adding submodules
Add a separate repository as a subdirectory:

```
$ git submodule add [repo-url] [folder]
```

#### Using submodules
For a freshly cloned repository with submodules

```
$ git submodule init
$ git submodule update
```

or

```
$ git submodule update --init --recursive
```


### Incorporating dependencies with subtree

* Alternative to submodule
* All files available advantage

First a remote connecting to the dependency and a branch in which to read from is needed.

```shell
$ git remote add
    [dependency-bookmark]
    [repository-url]

$ git fetch [dependency-bookmark]

$ git branch [branch]
    [dependency-bookmark]/[branch]
```

* Notice the working tree content differs between the dependency and the main project.
* Establishing the association of a subdirectory and the branch is necessary when creating the association.
* Whenever the branch needs updating, switch to it, retrieve the changes and commit them against the main project branch(es).

```shell
$ git read-tree
  --prefix=[directory]/
    -u [branch]
```

```shell
$ git merge --squash
  -s subtree [branch]
```


### GitHub CLI
* Uses the API for interfacing with your repos
* Stores OAUTH token, credentials
* Highly efficient for power-users
* Hub and GH merging into one project

```shell
$ gh create
$ gh pull-request
$ gh fork
$ gh compare
$ gh browse
```


### Signing work

#### By commit message
Adds a rigorously formatted text block to commit messages:

#### Configuring GPG
```shell
$ gpg --list-keys
pub   1024D/627CBB21 2014-08-01
uid                  Matthew McCullough

# Use 627CBB21 as the signing key's ID
$ git config --global user.signingkey [ID]
```


#### Using GPG signatures on commits
```shell
$ git commit --signoff
# or the shorthand invocation...
$ git commit -S

$ git log --show-signature
```

#### Using GPG signatures on tags
```shell
$ git merge --verify-signatures
```

```shell
$ git tag -s [tag-name] [commit]

$ git tag -v [tag-name]
```


### Cleaning up history
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


### Avoiding Repetitive Conflicts
* *Re*use *re*corded *re*solution
* Preserves pre-image to simplify conflicts

```shell
$ git config rerere.enable true
```

### The GitHub API

```shell
# Anonymous
$ curl <URL>

# Pass credentials on CLI
$ curl -u <user:password> <URL>

# Use .netrc file
$ curl -n <URL>
```
