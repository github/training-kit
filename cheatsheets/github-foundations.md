---
layout: cheatsheet
title: Foundations Cheat Sheet
description: A quick reference to commands use in the GitHub Foundations class.
---

This quick reference guide will be your companion for the outline and slides of the GitHub Foundations class taught by the [GitHub Training Team](http://training.github.com/) and other educational groups.

## Conventions
* `<variable>` should be replaced with an appropriate value or text
* `$` is your command prompt
* Indented lines after the `$` line are the command's expected response
* `#` is a comment within the command example

## The Commands

###  Git
Git is an open source distributed version control system invented by Linus Torvalds in 2005.  It is used to version the Linux kernel and is shown to be, by some research, the most popular modern version control system.

###  GitHub
GitHub is a Git repository hosting and code collaboration platform for both open source and private projects.

###  A Brief Tour of Git
Git has a unique twist on version control in which each _cloned_ copy of the repository contains all branches, tags, and commits ever saved to the project. This provides local-disk speed for almost any operation. Network operations are performed in batch and compressed before sending, thus making over-the-wire operations seem incredibly fast.

## Setup
Only two areas of setup are required to complete this course: A Git installation and a free GitHub account.

###  GitHub Account
GitHub accounts are free. Sign up for one at https://github.com/join.

###  GitHub Installers
Git can be installed as a unified GitHub GUI and command line or merely via a stand-alone command line.

* **Windows**: The GitHub for Windows installer can be found at http://windows.github.com.
* **Mac**: The GitHub for Mac installer can be found at http://mac.github.com.
* **Linux**: Git's source code and a listing of supported package managers can be found at http://git-scm.com/download/linux.

###  Git version
Verifying that Git is installed and operational can be done by requesting Git to display its current version using this command:

```
$ git --version
```

## Config
Git's configuration is saved in one of three plain text files and is easily editable with a text editor and portable to other machines by copying the configuration files.

### User information
Your name and email address are configured locally in Git and are attached to each commit. Set these accurately to receive proper attribution for your work.

To inspect the current settings, individually query two configuration values:

```
$ git config user.name
  Firstname Lastname

$ git config user.email
  someaccount@example.com
```

To set the same values to apply to any of your repositories:

```
$ git config --global user.name "<Firstname Lastname>"
$ git config --global user.email "<someaccount@example.com>"
```

### Scopes
Git's configuration is saved at one of three levels:

Level | Precedence | Location
--- | --- | ---
`system` | lowest | alongside the `git` binary
`global` | middle | in your home directory as `.gitconfig`
`local` | highest | in your project's `.git/config` file

### Viewing all
```
$ git config --list
```

### Useful settings
Line endings and color display are two of the most common settings users choose to set early in their use of Git.

```
# Set line endings to LF for Mac and Linux
$ git config --global core.autocrlf input
```

```
# Set line endings to CRLF for Windows
$ git config --global core.autocrlf auto
```

```
# Set color display in the command prompt
$ git config --global color.ui auto
```

### Settings video
[This video](TODO) demonstrates setting configuration values.

## Init
### Repository from scratch
Create a repository in the current directory of an existing project:
```
git init
```

### Repository from existing directory
Create a repository in a brand new subdirectory:
```
git init <projectname>
```

## Commit
### Three stage thinking
### Shopping cart
### Your first commit

### What is a commit
### Versions and files
### Current branch tip
### Parent reference
### Ancestor reference

## Diff
### Comparing changes
### Comparing to staged
### Comparing to repo
### Useful options

## Log
### Show all history
### Show history patches
### History formatting
### Limiting output
### Additional options
### Searching commits

## Remove & Move
### Tracking states map
### Tracking states in motion
### Deleting files
### Stop tracking
### Move and stage
### Similarity index

## Ignore
### Ignoring files
### Ignore patterns
### Controlling ignores
### Excludes file

## Checkout
### Purpose of checkout
### Discarding changes
### Switching branches
### Exploring history

## Branch
### Flexibility
### Listing
### Creating
### Deleting
### Renaming

## Merge
### Basics
### Recursive
### Fast forward
### Conflicting merges
### Resolution selection

## Rebase
### Reasons
### Fast forward
### Against a branch
### Interactive
### Interactive command

## Network
### Remotes
### Adding a remote
### Remotes are immutable
### Listing remote branches
### Sharing with a push
### Pull vs fetch

## GitHub
### GitHub hosted repo
### Cloning from GitHub

## Forking
### Purpose of forking

## Pull Requests
### Promoting collaboration
### Forks and pull requests

## Reset
### Losing data is difficult
### Recover from history
### Hard reset warning

## GUIs
### Native tools
### Other tools
### Diff tool
### Merge tool

## Reflog
### Restoring by action
### Reflog video
