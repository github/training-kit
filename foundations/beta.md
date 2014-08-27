---
layout: curriculum-beta
title: GitHub Foundations
description: Discovering the GitHub collaboration platform
---
{% capture slide %}
### The Git VCS
Verifying that Git is installed and operational can be done by requesting Git to display its current version using this command:

```shell
$ git --version

git version 1.8.2
```
{% endcapture %}
{% include slide-section %}
{% capture slide %}
{% capture svg_path %}../assets/diagrams/distributed-version-control.svg{% endcapture %}
{% include svg %}
{% endcapture %}
{% include slide-section %}


#### Git key vocabulary
Three important words that are key to learning Git are:

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

The six core concepts in the GitHub ecosystem are:

* **Repository**: a location to store related code and files
* **Branch**: a named variation on the code or enhancement-in-progress
* **Pull Request**: discussion associated with a branch
* **Issues**: an integrated bug and enhancement tracker
* **Organizations**: groups of repositories and team members
* **Teams**: named sets of users that grant access levels and group by talent, focus, and reporting
{% endcapture %}
{% include slide-section %}

#### Details & Resources

GitHub accounts are free. Sign up for one at [github.com/join](https://github.com/join).

GitHub is the repository hosting, collaboration, deployment, and distribution platform for both open source and private software projects.  It facilitates discussing changes-in-progress through the concepts of Issues and Pull Requests and provides a web user interface to much of Git. The web flow made possible by GitHub brings a much wider range of contributors, including documentation specialists, designers, and ops engineers into the flow of contributing to your application's life cycle.

GitHub accounts are free for an unlimited quantity of public repositories. Only private repositories cost to host on the service. Private repositories are typically used for closed-source consulting client or corporate products, whereas public repositories are typically used for open source.

Sign up for a free GitHub account at https://github.com/join.

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


{% capture slide %}
### Repository creation
{% endcapture %}
{% include slide-section %}


Repositories can be created in numerous ways, including:

* With the GitHub web user interface
* With a GitHub GUI
* With `git init` at the command line

{% capture svg_path %}../assets/diagrams/repo-clone.svg{% endcapture %}
{% include svg %}

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



{% capture slide %}
### Acquiring repos

* Clone from web (Clone in Desktop button)
* Clone via personal repo list in GitHub Desktop
* Clone via SSH or HTTPS URL
{% endcapture %}
{% include slide-section %}
{% capture slide %}
{% capture svg_path %}../assets/diagrams/what-is-a-commit.svg{% endcapture %}
{% include svg %}
{% endcapture %}
{% include slide-section %}

#### Details & Resources

In many cases, working with a code project means retriving it to the local disk so that you can leverage your language-specific IDE when making changes. To retrieve a repository to the local disk is to `clone` it, in Git parlance.  Some of the most common sources and means of cloning include:


{% capture slide %}
### The Web flow

The GitHub Web Flow allows you to:

* Browse projects
* Start branches
* Create files
* Edit content
* Change paths
* Open Pull Requests
{% endcapture %}
{% include slide-section %}


The GitHub Web Flow is a path through the GitHub user interface that facilitates governed, named, and reviewed sets of changes. This flow can be performed entirely from a web browser, with no need to download the code to a desktop machine, and yet still having the benefit of syntax highlighting and pre-merge code reviews and discussions.



#### Drive by contributions
<iframe src="//player.vimeo.com/video/88472114" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

{% capture slide %}
### Local repositories

A commit is a transactionally grouped set of changes, described by an brief message explaining the "why" of the attached changes.
{% endcapture %}
{% include slide-section %}


Git enables repositories to be created both on GitHub, or locally on a developer's PC. A repository created locally can be synced to a network destination at a later time, preserving all the timestamps and comments in the local commits during the synchronization.

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
### Syncing history

{% capture svg_path %}../assets/diagrams/sync.svg{% endcapture %}
{% include svg %}
{% endcapture %}
{% include slide-section %}

Since Git facilitates making and saving changes without a network connection, syncing changes with an upstream server is a frequent operation once connected back to a network.  Git accomplishes the syncing through the `pull` and `push` commands.



A repository must have fully incorporated all upstream changes before it can successfully push changes out. This pattern encourages breakages to happen at the leaf nodes of the repository network, thus reducing stop-work merge activity and aiding those tasks being performed asynchronously and potentially even offline.

To retrieve all upstream changes, and then transmit all local changes, type:

```shell
$ git pull
$ git push origin [master|branch]
```


{% capture slide %}
### Branches


{% endcapture %}
{% include slide-section %}


A branch is an divergent path in the history of the code base. It may contain an experiment, fix, or enhancement, and is generally intended to be merged back to the `master` branch after being thoroughly reviewed by a colleague.

![](../assets/diagrams/what-is-a-branch.svg)

#### Branching video
<iframe src="//player.vimeo.com/video/100128962" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
