---
layout: curriculum
title: GitHub Foundations
byline: Discovering the GitHub collaboration platform
---

{% capture slide %}
### The Git VCS
{% endcapture %}
{% include slide-section %}


{% capture slide %}
* Explain Git as the fundamental technology
* Describe GitHub as the collaboration platform
* Review distributed version control system
* Explore GUIs/graphical clients
* Distinguish distributed approach

{% endcapture %}
{% include slide-section %}

{% capture slide %}
Verifying that Git is installed and operational can be done by requesting Git to display its current version using this command:

```shell
$ git --version

git version 1.8.2
```
{% endcapture %}
{% include slide-section %}

{% capture slide %}
![svg](../assets/diagrams/distributed-version-control.svg)

{% endcapture %}
{% include slide-section %}


#### Lab
* Launch Terminal or Git Shell
* Check Git installation with `git --version`
* Launch/open GitHub for Desktop

#### Git key vocabulary
Three important words key to learning Git are:

* Repository
* Commit
* Branch

__Git is an open source distributed__ version control system invented by Linus Torvalds in 2005.  It is used to version the Linux kernel and is shown to be, by some research, the most popular modern version control system.

#### Git key concepts
Three important concepts of this version control system are:

* Distributed version control is the concept of full copies of the repository on every contributing machine
* Git is the file and information tracker
* GitHub is the collaboration platform

#### Deeper study
* [A short history of Git](http://git-scm.com/book/en/Getting-Started-A-Short-History-of-Git)
* [The Git project homepage](http://git-scm.com)
* [Entry-level videos from the official Git site](http://git-scm.com/videos)

#### Installers
The command line version of Git has a very light footprint. For most platforms, you can simply copy the binaries to a folder that is on the executable search $PATH. Git is primarily written in C, which means there is a unique installer for each operating system.

* **Windows**: [GitHub for Windows installer](http://windows.github.com)
* **Mac**: [GitHub for Mac installer](http://mac.github.com)
* **Linux**: Git's source code and a listing of supported package managers can be found [on the git-scm.com site](http://git-scm.com/download/linux).
* **Any platform**: [Pro Git Book: Installing Git](http://git-scm.com/book/en/Getting-Started-Installing-Git)

#### What is Git?
<iframe src="//player.vimeo.com/video/41381741" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


{% capture slide %}
### The GitHub Platform

{% endcapture %}
{% include slide-section %}

{% capture slide %}
* Git repository hosting
* Code & Collaboration platform
* Issue tracking system
* Documentation distribution

{% endcapture %}
{% include slide-section %}

#### Feature overview
* Hosting repositories
* Collaborating on code, documents, text
* Controlling access & contributions
  * Permissions
  * Forks
  * Users
  * Organizations
* Tracking assignments, tickets, bugs
* Hosting supporting documentation (GH-Pages)
  * https://pages.github.com/
* Discovering trending technology (Explore)
  * https://github.com/explore
* Tracking favorite projects (Stars)
  * https://github.com/stars

#### Project management
* GitHub Issues
* Milestones
* Network
* Pulse
* Tags, Releases
* Collaborators
* Organizations
* Teams

#### GitHub features

* Notifications
* Watching repositories
* Unsubscribing (per thread)
* Subscribing (per thread)
* Starring repositories
* Gist
  * Repos in themselves
  * Embeddable (use with GH-pages content)
* GitHub Flavored Markdown
  * Basics
  * Emoji
  * Checklists (Issues, Gists)
* Cross referencing
* Commit referencing
* Issue references
* cross-repo refs org|user/repo#num
* `README.md` in any folder level
* `CONTRIBUTING.md` in root

#### GitHub visualizations

* Comparing/Diff-ing
  * Code
  * Prose
  * Images
  * Maps
  * Spreadsheets
  * models
* Branch view
* Branch ahead/behind positions
* Network graph
* Activity graph

#### GitHub Pages

* Web page for your repository
* Web page for your account
* Author, edit, launch from GitHub

The six core concepts in the GitHub ecosystem are:

* **Repository**: a location to store related code and files
* **Branch**: a named variation on the code or enhancement-in-progress
* **Pull Request**: discussion associated with a branch
* **Issues**: an integrated bug and enhancement tracker
* **Organizations**: groups of repositories and team members
* **Teams**: named sets of users that grant access levels and group by talent, focus, and reporting


#### Details & Resources

GitHub accounts are free. Sign up for one at [github.com/join](https://github.com/join).

GitHub is the repository hosting, collaboration, deployment, and distribution platform for both open source and private software projects.  It facilitates discussing changes-in-progress through the concepts of Issues and Pull Requests and provides a web user interface to much of Git. The web flow made possible by GitHub brings a much wider range of contributors, including documentation specialists, designers, and ops engineers into the flow of contributing to your application's life cycle.

GitHub accounts are free for an unlimited quantity of public repositories. Only private repositories cost to host on the service. Private repositories are typically used for closed-source consulting client or corporate products, whereas public repositories are typically used for open source.

Sign up for a free GitHub account at [github.com/join](https://github.com/join).

Git can be installed as a unified GitHub GUI and command line or merely as a stand-alone command line interface.

The GitHub collaboration platform facilitates:

* Hosting Git repositories
* Collaborating on code, documents, 3D files, maps, CSV data
* Controlling access & contributions
  * Collaborators
  * Forks
  * Organizations
  * Users
* Tracking bugs, enhancements, and features via GitHub Issues
* [Hosting documentation via GitHub pages and a `gh-pages` branch](https://pages.github.com/)
* [Discovering trending technology via Explore](https://github.com/explore)
* [Tracking favorite projects via Stars](https://github.com/stars)

#### GitHub account creation video
<iframe src="//player.vimeo.com/video/88472085" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

#### Resources
* [GitHub.com feature list](https://github.com/features)
* [How to sign up for GitHub](https://www.youtube.com/watch?v=ezxRcdJ8glM&list=PLg7s6cbtAD17rhrz2BJWAPJMjR71B3IDx)


### Repository creation

* Project access control (public/private)
* Repository creation
* Seed files (`README`, `.gitignore`, `license.md`)
* Edits/commits through web interface
* Concepts of hosted repository
* Repository based on existing content
* Web interface and GUI client
* Clone command explanation

#### Lab
* Visit GitHub.com
* Click the `+`
* Name the repository
* Choose seed files
* Discuss ways of interaction

{% capture slide %}

{% endcapture %}
{% include slide-section %}


Repositories can be created in numerous ways, including:

* With the GitHub web user interface
* With a GitHub GUI
* With `git init` at the command line

![svg](../assets/diagrams/repo-clone.svg)

#### Repository creation concepts
<!-- TODO -->
* Project access control (public/private)
* Repository creation
* Seed files (`README`, `.gitignore`, `license.md`)
* Edit/commit through web interface
* Concepts of hosted repository
* Repository based on existing content
* Web interface and GUI client
* Clone command explanation

#### Repository init-ing
<iframe src="//player.vimeo.com/video/88313612" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


### The Web flow

* Use web interface for repo and the Web Flow
* Edit files on web interface
* Create a new file through web interface
* Describe the distinction of one-file-at-a-time on Web Flow
* Editing files and small changes on the web
* Changing paths, filenames, content
* Introducing new files or sub-foldered content
* Removing unwanted files permanently

{% capture slide %}


The GitHub Web Flow allows you to:

* Browse projects
* Start branches
* Create files
* Edit content
* Change paths
* Open Pull Requests
{% endcapture %}
{% include slide-section %}


The GitHub Web Flow is a path through the GitHub user interface that facilitates governed, named, and reviewed sets of changes. This flow can be performed entirely from a web browser, with no need to download the code to a desktop machine, and yet still have the benefit of syntax highlighting and pre-merge code reviews and discussions.



#### Drive by contributions
<iframe src="//player.vimeo.com/video/88472114" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


### Local repositories

* Getting the code "locally"
* Launching GitHub for Desktop
* Showing GitHub repository list
* Cloning repository to local disk
* Reviewing history tab
* Explaining local versus remote "full" histories

* Working with local files
* Create new file with text editor
* Review new files in GHfD that are unversioned
* Commit the new file(s)

* Editing content of track file(s)
* Examining differences in GHfD
* Commiting changes as-needed

#### Lab
* Version new or modified files via graphical client
* Prepare and preserve changes with command line

```
git status
git add [file]
git commit -m"[description]"
```

{% capture slide %}


A commit is a transactionally grouped set of changes, described by a brief message explaining the "why" of the attached changes.
{% endcapture %}
{% include slide-section %}


Git enables repositories to be created both on GitHub, or locally on a developer's computer. A repository created locally can be synced to a network destination at a later time, preserving all the timestamps and comments in the local commits during the synchronization.

![](../assets/diagrams/distributed-version-control.svg)


#### Local repository benefits
* Initialize repositories while disconnected from network
* Craft file versions at your own pace
* Create branches to isolate experiments

#### Local repository definitions
* Commits
  * History marker for file(s) and change(s)
  * Record of author, time, and message
* Branches
  * Container for grouped commits
  * Simpler means to integrate change
  * Cleaner code review possibilities


{% capture slide %}
### Acquiring repos

* Clone from web (Clone in Desktop button)
* Clone via personal repo list in GitHub Desktop
* Clone via SSH or HTTPS URL
{% endcapture %}
{% include slide-section %}

{% capture slide %}
![svg](../assets/diagrams/what-is-a-commit.svg)
{% endcapture %}
{% include slide-section %}

#### Details & Resources

In many cases, working with a code project means retrieving it to the local disk so that you can leverage your language-specific IDE when making changes. To retrieve a repository to the local disk is to `clone` it, in Git parlance.  Some of the most common sources and means of cloning include:


### Syncing history

* Reviewing local history versus remote/GitHub
* Synchronizing local commits with GitHub
* Confirming commits and files now show on remote repository


#### Lab
* Click of a button through graphical clients
* One Git operation via the command line

```
git push origin [master|branch]
```

{% capture slide %}
![svg](../assets/diagrams/sync.svg)
{% endcapture %}
{% include slide-section %}

Since Git facilitates making and saving changes without a network connection, syncing changes with an upstream server is a frequent operation once connected back to a network.  Git accomplishes the syncing through the `pull` and `push` commands.



A repository must have fully incorporated all upstream changes before it can successfully push changes out. This pattern encourages breakages to happen at the leaf nodes of the repository network, thus reducing stop-work merge activity and aiding those tasks being performed asynchronously and potentially even offline.

To retrieve all upstream changes, and then transmit all local changes, type:

```shell
$ git pull
$ git push origin [master|branch]
```

### Branches

* Containing commits and efforts of work/changes
* Simplifying decision process for pieces of contributions
* Allowing better code review

* Committing thus far only to "master" branch
* Exploring local branches with GHfD
* Creating local branch
* Authoring new files, committing
* Switching branches to show how working tree is updated
* Explaining how working tree is "view" of files from specific commit

* Examine the possibility of branches from topic branches
* Quick fixes that should still be isolated before merging
* These changes do not necessarily need to be Pull Requested
* Possibilities include small changes to a branch already open in a PR
* These don't need to be pushed, but isolated just during local work
* Merge these locally with several methods
  * GitHub for Desktop
  * command line

* Checking available branches on remote
* Switching or creating new branch from drop down
* Adding new content to branch
* Syncing local repository with remote branches

* Beginning with a Compare
* Opening a Pull Request
* Self-approving or requesting peer review

* Describe collaboration/review process with Pull Requests
* With a branch and commit(s), open a Pull Request
* Assess what this means from one-collaborator repo
* Describe the effort as it pertains to work in branch
* Explain how Pull Requests "observe" any commits on that branch while open
* Make more commits to branch through web interface
* Examine commits showing on Pull Request of branch
* Make commits on local branch, sync and see commits on Pull Request
* **The GitHub Flow**
  * Branch
  * Commit
  * Compare
  * Pull Request
  * Discuss
  * Animated GIF
  * Line by line code review conversation
  * Clone locally with GHfD (optional)

* Brand new repo created by Teacher
* Direct everyone to Fork the new project
* Explain what a Fork is, its purpose, reasons
* Demonstrate who has Forked from Network Members page
* GitHub Student creates a Fork to follow along
* Perform the same branching, commiting pattern
* Open a Pull Request and see the "linkage"
* Review and create local branch relating to PRs (even from Fork) ???
* Use "Checkout this Branch for..."" to create local branch of any PR and branch
  * Show how branch cannot be synced for Forks' branches
  * Show how branch directly on repo can be changed
* Review how a Fork's branch and PR can be manipulated, merged locally into another branch, integrated, and close original PR

#### GitHub Fork workflow
* [Guide to Forking](https://guides.github.com/overviews/forking/)
* Reason for forks
* What it encourages
* How it insulates
* Keeping up to date (too advanced?)
* Original (base) and Fork (individual copy)

#### GitHub Direct Contribution workflow
* Everyone commits to same repo
* All work is done on topic branches
* All merges performed with Pull Requests

{% capture slide %}

Branch stuff here

{% endcapture %}
{% include slide-section %}


A branch is a divergent path in the history of the code base. It may contain an experiment, fix, or enhancement, and is generally intended to be merged back to the `master` branch after being thoroughly reviewed by a colleague.

![](../assets/diagrams/what-is-a-branch.svg)

#### Branching video
<iframe src="//player.vimeo.com/video/100128962" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
