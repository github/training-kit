# GitHub Git Concepts

Git is an open source, distributed version control system founded in command line interaction. This guide provides the day-to-day setup and commands to utilize Git locally and connecting repositories  to GitHub.com for a complete collaboration workflow.

## Understanding terms & Processes descriptions of GitHub and Git

With a language all its own, this quick guide to common terms of GitHub and Git will have you collaborating in no time.

### Repository
A repository is the most basic element of Git and GitHub. Imagine it as a project's folder. A repository contains all of the project files (including documentation), and stores each file's revision history.

### Commit
An individual change to a file (or set of files). With Git, every time you save it creates a unique ID (a.k.a. the "SHA" or "hash") that allows you to keep record of what changes were made when and by who. Commits usually contain a commit message which is a brief description the changes made.

### Branch
A parallel version of repository. It is contained within the repository, but does not affect the primary or master branch allowing you to work freely without disrupting the "live" version.

### Remote
This is the connection of a repository hosted on a server, most likely GitHub.com. It can be connected to local repositories so that changes can be synchronized.

## Configuring
The first thing to setup when using Git is two important fields about the user. This allows appropriate credit and traceability for project contributions.

```
git config --global user.name "Mona Lisa Octocat"
git config --global user.email "mona@github.com"
```

## Versioning Files
Versioning project files begins by initializing Git from within the directory and the first commit consisting of all content.

```
git init
git add .
git commit -m 'initial commit'
```

Traditional  development effort consists of a short-lived branch which will ultimately be merged into a production-worthy branch.

```
git branch feature-enhancement
git checkout feature-enhancement
git add [files]
git commit -m 'Add feature enhancement'

```

As commits can be efficiently made, the state of any new, modified, or missing files can be verified and quickly validated.

```
git status
git diff [modified-file]
```

## Integrating Changes
Commits can be made against any branch and in any order. Commonly, this is performed against the  master branch as means of feature or bug-fix integration.

```
git checkout master
git merge feature-enhancement
git branch -d feature-enhancement
```

[PLACEHOLDER - Recursive Merge Diagram]

The last step deletes the branch. Merges result in all commit history becoming traversible, and eliminating the need for the branch label to remain.


## Sharing & Retrieving
Sharing commit history requires only a destination repository, one on GitHub.com, and a single setup step.

```
git remote add origin [repo-url]
git remote -v
```

[PLACEHOLDER - Local-Upstream Diagram]

With a remote setup, and the traditional name of "origin" aliased to the URL, publishing local commits is simple.

```
git push origin [branch-name]
```

Retrieving changes from a shared repository and automatically merging in any new commits locally is performed in a multi-step operation run by one command.

```
git checkout [target-branch]
git pull origin [upstream-branch]
```

## Bonus Materials
TBD
