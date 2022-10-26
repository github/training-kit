# GitHub Repository Fundamentals

Git is an open source, distributed version control system founded in command line interaction. This guide provides the day-to-day setup and commands to use Git locally and connect repositories to GitHub for a complete collaboration workflow.

## Understanding terms & Processes descriptions of GitHub and Git

With a language all its own, this quick guide to common terms of GitHub and Git will have you collaborating in no time.

### Repository

A repository is the most basic element of Git and GitHub. Imagine it as a project's folder. A repository contains all of the project files (including documentation), and stores each file's revision history.

### Commit

An individual change to a file (or set of files). With Git, every time you save it creates a unique ID (a.k.a. the "SHA" or "hash") that allows you to keep record of what changes were made when and by who. Commits usually contain a commit message which is a brief description the changes made.

### Branch

A parallel version of repository. It is contained within the repository, but does not affect the main branch, allowing you to work freely without disrupting the "live" version.

### Remote

The connection of a local repository with one on GitHub. It permits revision history to be synchronized by publishing local commits and downloading any new changes from GitHub.

### Pull Request

A  feature on GitHub which provides conversation, line-by-line code review, change history analysis, and summaries of modified files.

## Configuring

The first thing to setup when using Git is two important fields about the user. This allows appropriate credit and traceability for project contributions.

```
git config --global user.name "Mona Lisa Octocat"
git config --global user.email "mona@github.com"
```

## Versioning Files

Versioning files begins by creating a repository on your GitHub account. File authoring and editing can be performed through the web interface or by acquiring the repository locally from the command line.

```
git clone [url] [project-name]
cd [project-name]
```

Repository contributions are commonly made through branches and commits focused on small pieces of work.

```
git branch [name]
git switch [name]
git add [file]
git commit -m [commit message]
```

When the feature work reaches completion, the branch can be merged locally or pushed to GitHub for code review.

```
git switch main
git merge [branch]

git push -u origin [branch]
```

As commits can be efficiently made, the state of any new, modified, or missing files can be verified and quickly validated.

```
git status
git diff [modified-file]
```

## Integrating Changes

Commits can be made against any branch and in any order. Commonly, this is performed against the main branch as means of feature or bug-fix integration.

```
git switch main
git merge feature-enhancement
git branch -d feature-enhancement
```

[PLACEHOLDER - Recursive Merge Diagram]

The last step deletes the branch. Merges result in all commit history becoming traversible, and eliminating the need for the branch label to remain.

## Sharing & Retrieving

Sharing commit history requires only a destination repository, one on GitHub, and a single setup step.

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
git switch [target-branch]
git pull origin [upstream-branch]
```
