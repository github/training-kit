---
layout: curriculum
title: GitHub Foundations
description: Discovering the GitHub collaboration platform
---

### Git concepts
{% capture svg_path %}../assets/diagrams/distributed-version-control.svg{% endcapture %}
{% include svg %}

#### Key vocabulary
Three important words that are key to learning Git are:

* Repository
* Commit
* Branch

#### Key concepts
Three important concepts of this version control system are:

* Distributed version control is the concept of full copies of the repository on every contributing machine
* Git is the file and information tracker
* GitHub is the collaboration platform

#### Deeper study
* [A short history of Git](http://git-scm.com/book/en/Getting-Started-A-Short-History-of-Git)
* [The Git project homepage](http://git-scm.com)

#### Installers
* **Windows**: [GitHub for Windows installer](http://windows.github.com)
* **Mac**: [GitHub for Mac installer](http://mac.github.com)
* **Linux**: Git's source code and a listing of supported package managers can be found [on the git-scm.com site](http://git-scm.com/download/linux).
* **Any platform**: [Pro Git Book: Installing Git](http://git-scm.com/book/en/Getting-Started-Installing-Git)

### GitHub Concepts
The five 

* **Repository**: a location to store related code and files
* **Branch**: a named variation on the code or enhancement-in-progress
* **Pull Request**: discussion associated with a branch
* **Issues**: an integrated bug and enhancement tracker
* **Organizations**: groups of repositories and team members
* **Teams**: named sets of users that grant access levels and group by talent, focus, and reporting

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

#### Resources
* [GitHub.com feature list](https://github.com/features)
* [How to sign up for GitHub](https://www.youtube.com/watch?v=ezxRcdJ8glM&list=PLg7s6cbtAD17rhrz2BJWAPJMjR71B3IDx)


### Repository Creation
* Via GitHub
* With GUI
* On command line

{% capture svg_path %}../assets/diagrams/repo-clone.svg{% endcapture %}
{% include svg %}

### Web Flow
* Browse projects
* Start branches
* Create files
* Edit content
* Change paths
* Open Pull Requests

### Local Repository
* Initialize repositories
* Craft file versions
* Create branches

### History Synchronization
```
$ git pull --rebase
$ git push origin [master|branch]
```

### Branches
{% capture svg_path %}../assets/diagrams/what-is-a-branch.svg{% endcapture %}
{% include svg %}


### Merges
* Integrate with Pull Requests
* Combine locally with GUIs

### Collaboration

* Forking
	* [Guide to Forking](https://guides.github.com/overviews/forking/)
	* Reason for forks
	* What it encourages
	* How it insulates
	* Keeping up to date (too advanced?)
	* Original (base) and Fork (individual copy)
* The GitHub Flow
	* Branch
	* Commit
	* Compare
	* Pull Request
	* Discuss
	* Animated GIF
	* Line by line code review conversation
	* Clone locally with GHfD (optional)

{% capture svg_path %}../assets/diagrams/fork-structure.svg{% endcapture %}
{% include svg %}

{% capture svg_path %}../assets/diagrams/direct-contribution.svg{% endcapture %}
{% include svg %}

### Project Management
* GitHub Issues
* Milestones
* Network
* Pulse
* Tags, Releases
* Collaborators
* Organizations
* Teams

#### Lab

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

* Visit GitHub.com
* Project access control (public/private)
* Repository creation
* Seed files (`README`, `.gitignore`, `license.md`)
* Edits/commits through web interface
* Concepts of hosted repository
* Repository based on existing content
* Web interface and GUI client
* Clone command explanation

### GitHub Features
Test
