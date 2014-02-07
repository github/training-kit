---
layout: workbook
title: Foundations Workbook
description: This workbook will be your companion for the slides of the GitHub Foundations class taught by the [GitHub Training Team](http://training.github.com/) and other educational groups. In this GitHub Training course, you'll learn all the necessary skills to be productive with Git and GitHub in your open source work or daily job assignments.
---

###  Git <a href="http://git-scm.com/book/en/Getting-Started-A-Short-History-of-Git" class="booklink">Pro Git Book: The History of Git</a>


<span class="outline">
http://git-scm.com
</span>


<span class="summary">
__Git is an open source distributed__ version control system invented by Linus Torvalds in 2005.  It is used to version the Linux kernel and is shown to be, by some research, the most popular modern version control system.
</span>

<span class="details">
Git is the open source, command line tool that forms a part of the workflows we'll cover in this course.  It has been called the successor to CVS and Subversion by many users, and maintains some similarity in behavior to these historical open source version control tools.
</span>


<span class="details">
Maintaining a current version of Git is important. While you'll accurately hear that Git is generously backwards-compatible, the latest versions offer error message enhancements, performance tunings, and usability features that make using Git ever more quick and plesant.
</span>

<span class="summary">
Verifying that Git is installed and operational can be done by requesting Git to display its current version using this command:
</span>

<pre class="summary">
<code>
$ git --version
</code>
</pre>


###  GitHub <a href="https://github.com/features" class="githublink">GitHub.com: Feature List</a>

<span class="outline">
GitHub accounts are free. Sign up for one at https://github.com/join.
</span>

<span class="summary">
GitHub is a Git repository hosting and code collaboration platform for both open source and private projects.</span>

<span class="details">
GitHub accounts are free for an unlimited quantity of public repositories. Only private repositories cost to host on the service. Private repositories are typically used for closed-source consulting client or corporate products, whereas public repositories are typically used for open source.
</span>
<span class="details">
Sign up for a free GitHub account at https://github.com/join.
</span>

<span class="summary">
Git can be installed as a unified GitHub GUI and command line or merely via a stand-alone command line.
</span>

###  GitHub Installers <a href="http://git-scm.com/book/en/Getting-Started-Installing-Git" class="booklink">Pro Git Book: Installing Git</a>

<ul class="summary">
<li>**Windows**: The GitHub for Windows installer can be found at http://windows.github.com.</li>
<li>**Mac**: The GitHub for Mac installer can be found at http://mac.github.com.</li>
<li>**Linux**: Git's source code and a listing of supported package managers can be found at http://git-scm.com/download/linux.</li>
</ul>

<span class="details">
The command line verison of Git has a very light footprint. For most platforms, you can simply copy the binaries to a folder that is on the executable search $PATH. Git is primarily written in C, which means there is a unique installer for each operating system.
</span>






<span class="details">GitHub is the repository hosting, collaboration, deployment, and distribution platform for your software applications.  It facilitates discussing changes-in-progress through the concepts of Issues and Pull Requests and provides a web user interface to much of Git. The web flow made possible by GitHub brings a much wider range of contributors, including documentation specialists, designers, and ops engineers into the flow of contributing to your application's lifecycle.

###  A Brief Tour of Git <a href="http://git-scm.com/book/en/Getting-Started-Git-Basics" class="booklink">Pro Git Book: Git Basics</a>

<span class="summary">
Git has a unique twist on version control in which each _cloned_ copy of the repository contains all branches, tags, and commits ever saved to the project. This provides local-disk speed for almost any operation. Network operations are performed in batch and compressed before sending, thus making over-the-wire operations seem incredibly fast.
</span>

<span class="details">
Git is an open source version control system that was built by Linus Torvals and used to version the Linux kernel in 2005.  It has gained in popularity ever since and is now the leading version control system for open source projects by some surveys.  It shares some behavioral similarities to CVS and Subversion, though departs from their centralized form by its distributed nature.
</span>

<blockquote class="studentquestion details">
It is common to get a request for a table of Subversion-to-Git command comparisons. We caution against this conceptual one-to-one mapping because it is most effective to understand Git's unique three-stage thinking from the ground up. Files are chosen, via the `add` command, to participate in the repository and explicitly asked to participate in each commit (transaction), also by the `add` command. Grouped transactions of changes to files are permanently recorded by the `commit` command. Local storage of commits are distinct from transmitting them over the network, thus providing the ability to use Git fully offline. Commits are sent via the `push` command when ready to be sent to the central server.
</blockquote>

## Git Setup & Configuration
<span class="summary">
Git's configuration is saved in one of three plain text files and is easily editable with a text editor and portable to other machines by copying the configuration files.
</span>

<span class="details">
Git stores all its configuration in plain text files. This makes configuration easy to read with a text editor and portable across machines by simply copying the configuration file.
</span>

<span class="details">
Git's configuration is saved at one of three levels:
</span>

<span class="details">
{% capture table %}
Level | Precedence | Location
--- | --- | ---
`system` | lowest | alongside the `git` binary
`global` | middle | in your home directory as `.gitconfig`
`local` | highest | in your project's `.git/config` file
{% endcapture %}
{{ table | markdownify }}
</span>

### User information <a href="http://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup" class="booklink">Pro Git Book: First Time Git Setup</a>

<span class="summary">
Your name and email address are configured locally in Git and are attached to each commit. Set these accurately to receive proper attribution for your work.
</span>

<span class="summary">
To inspect the current settings, individually query two configuration values:
</span>

<pre class="summary">
<code>
$ git config user.name
Firstname Lastname

$ git config user.email
someaccount@example.com
</code>
</pre>

<span class="summary">
To set the same values to apply to any of your repositories:
</span>

<pre class="outline">
<code>
git config --global user.name "your name"
git config --global user.email "your@email"
</code>
</pre>

<span class="details">
Line endings and color display are two of the most common settings users choose to set early in their use of Git.
</span>

<pre class="details">
<code>
# Set line endings to LF for Mac and Linux
$ git config --global core.autocrlf input

# Set line endings to CRLF for Windows
$ git config --global core.autocrlf auto

# Set color display in the command prompt
$ git config --global color.ui auto
</code>
</pre>

### Reviewing all configuration
<pre class="summary">
<code>
$ git config --list
</code>
</pre>

## Beginning version control

### With a local repository
<span class="summary">
Create a repository in the current directory of an existing project:
</span>

<pre class="outline">
<code>
git init my-project
cd my-project
</code>
</pre>

### From an existing project
<span class="summary">
Create a repository in a brand new subdirectory:
</span>

<pre class="outline">
<code>
cd existing-project
git init
git add .
</code>
</pre>

### Hosted on GitHub
<pre class="outline">
<code>
git clone github-repo-url local-project-name
cd local-project-name
</code>
</pre>

## Versioning changes

### By staging (preparing) paths
<span class="summary">
Any time a change is to be commited, or preserved in history, it must first be _staged_.
</span>
<pre class="outline">
<code>
git add path-file
</code>
</pre>

### With message for history
<pre class="outline">
<code>
git commit -m "your commit message"
</code>
</pre>

### To correct the prior commit
<pre class="outline">
<code>
git commit --amend -m "updated message"
</code>
</pre>

## Containing work in context

<span class="summary">
Wrapping commits, or Git version history, within branches is a fast, local, and easy way to focus work and commits within a repository.
</span>

### by branching per work endeavor
<span class="summary">
Create a new branch from your current commit
</span>

<pre class="outline">
<code>
git branch your-topic-name
</code>
</pre>

### Changing a branch name
<pre class="outline">
<code>
git branch -m old-topic-name new-topic-name
</code>
</pre>

### Listing all local branches
<pre class="outline">
<code>
git branch
</code>
</pre>

### Switching branches
<pre class="outline">
<code>
git checkout any-local-branch
</code>
</pre>

## Sharing repository history

### Checking for remotes
<span class="summary">
Before adding a remote, check if your repository already has the expected one setup.
</span>

<pre class="outline">
<code>
git remote -v
</code>
</pre>

### Adding an upstream
<span class="summary">
To allow Git to `push` your local repository's commits to a collaborative, centralized one, you will need a remote.
</span>

<pre class="outline">
<code>
git remote add [alias] [url]
</code>
</pre>

<span class="summary">
Quickly `fetch` and `merge` the retrieved commits from the upstream into the current local branch, if it has tracking setup.
</span>
<pre class="outline">
<code>
git pull
</code>
</pre>

<span class="summary">
Retrieve all non-local commits from the specified remote and branch, them merge them into the current branch.
</span>
<pre class="outline">
<code>
git pull [alias] [branch]
</code>
</pre>


<span class="summary">
Retrieve any upstream (remote) branches and commits.
</span>
<pre class="outline">
<code>
git fetch [alias]
</code>
</pre>

<pre class="outline">
<code>
git merge [alias]/[branch]
</code>
</pre>

### Comparing changes

<span class="summary">
Compare all changes not yet staged.
</span>
<pre class="outline">
<code>
git diff
</code>
</pre>

<span class="summary">
Compare all changes in staging to last commit.
</span>
<pre class="outline">
<code>
git diff --staged
</code>
</pre>

<span class="summary">
Compare all changes not staged and in staging to last commit.
</span>
<pre class="outline">
<code>
git diff HEAD
</code>
</pre>

<pre class="outline">
<code>
git diff [commit-ref/branch-name]
</code>
</pre>

## Reviewing history
<span class="summary">
Inspect the full history of a specific branch, limit the output, or graphically diagram the relationship of commits.
</span>

<span class="summary">
List all commits of current branch in decending order.
</span>
<pre class="outline">
<code>
git log
</code>
</pre>

<span class="summary">
Display summarized commits of current branch and shortened references.
</span>
<pre class="outline">
<code>
git log --oneline
</code>
</pre>

<span class="summary">
Render ASCII art graph of all branch's commit relationships.
</span>
<pre class="outline">
<code>
git log --graph --all --decorate --oneline
</code>
</pre>



## GitHub
### Centralized Repository
### Cloning
### Forking
### Pull Request



## Remove
### Entirely eliminating paths
### Stopping tracking

## Move
### Functionality
### Similarity index
### Following history

## Ignore
### Basic setup
### Standard patterns
### Global configuration


## Checkout
### Switching branches
### Discarding changes
### Exploring History

## Merge
### Basics
### Conflicts

## rebase
### Merge preparation
### Interactive

## reset
### Hard
### Mixed
### Soft

## Revert

## gui

## reflog
