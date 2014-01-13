---
layout: outline
title: Foundations Course Outline
description: A student and teacher outline to the GitHub Foundations class.
---

This outline will be your companion for the cheat sheet and slides of the GitHub Foundations class taught by the [GitHub Training Team](http://training.github.com/) and other educational groups. In this GitHub Training course, you'll learn all the necessary skills to be productive with Git and GitHub in your open source work or daily job assignments.

###  Git <a href="http://git-scm.com/book/en/Getting-Started-A-Short-History-of-Git" class="booklink">Pro Git Book: The History of Git</a>

Git is the open source, command line tool that forms a part of the workflows we'll cover in this course.  It has been called the successor to CVS and Subversion by many users, and maintains some similarity in behavior to these historical open source version control tools.

###  GitHub <a href="https://github.com/features" class="githublink">GitHub.com: Feature List</a>

GitHub is the repository hosting, collaboration, deployment, and distribution platform for your software applications.  It facilitates discussing changes-in-progress through the concepts of Issues and Pull Requests and provides a web user interface to much of Git. The web flow made possible by GitHub brings a much wider range of contributors, including documentation specialists, designers, and ops engineers into the flow of contributing to your application's lifecycle.

###  A Brief Tour of Git <a href="http://git-scm.com/book/en/Getting-Started-Git-Basics" class="booklink">Pro Git Book: Git Basics</a>

Git is an open source version control system that was built by Linus Torvals and used to version the Linux kernel in 2005.  It has gained in popularity ever since and is now the leading version control system for open source projects by some surveys.  It shares some behavioral similarities to CVS and Subversion, though departs from their centralized form by its distributed nature.

<blockquote class="studentquestion">
It is common to get a request for a table of Subversion-to-Git command comparisons. We caution against this conceptual one-to-one mapping because it is most effective to understand Git's unique three-stage thinking from the ground up. Files are chosen, via the `add` command, to participate in the repository and explicitly asked to participate in each commit (transaction), also by the `add` command. Grouped transactions of changes to files are permanently recorded by the `commit` command. Local storage of commits are distinct from transmitting them over the network, thus providing the ability to use Git fully offline. Commits are sent via the `push` command when ready to be sent to the central server.
</blockquote>

## Setup

###  GitHub Account
GitHub accounts are free for an unlimited quantity of public repositories. Only private repositories cost to host on the service. Private repositories are typically used for closed-source consulting client or corporate products, whereas public repositories are typically used for open source.

Sign up for a free GitHub account at https://github.com/join.

###  GitHub Installers <a href="http://git-scm.com/book/en/Getting-Started-Installing-Git" class="booklink">Pro Git Book: Installing Git</a>

The command line verison of Git has a very light footprint. For most platforms, you can simply copy the binaries to a folder that is on the executable search $PATH. Git is primarily written in C, which means there is a unique installer for each operating system.

###  Git version
Maintaining a current version of Git is important. While you'll accurately hear that Git is generously backwards-compatible, the latest versions offer error message enhancements, performance tunings, and usability features that make using Git ever more quick and plesant.

Verifying that Git is installed and operational can be done by requesting Git to display it's current version using this command:

```
$ git --version
```


## Config
Git stores all its configuration in plain test files. This makes configuration easy to read with a text editor and portable across machines by simply copying the configuration file.

Git's configuration is saved at one of three levels:

Level | Precedence | Location
--- | --- | ---
`system` | lowest | alongside the `git` binary
`global` | middle | in your home directory as `.gitconfig`
`local` | highest | in your project's `.git/config` file


### User information <a href="http://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup" class="booklink">Pro Git Book: First Time Git Setup</a>

### Scopes
### Viewing all
### Useful settings
### Settings video

## Init
### Repository from scratch
### Repository from existing dir

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
