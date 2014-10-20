---
layout: curriculum
title: GitHub Foundations
byline: Discovering the GitHub collaboration platform
redirect_from:
  - ../workbooks/github-foundations.html
---

{% capture slide %}
## Understanding version control
{% endcapture %}{% include slide-section %}

{% capture slide %}
![Gitl logo](../assets/diagrams/git-logo-black.svg)
{% endcapture %}{% include slide-section %}

{% capture slide %}![Distributed version control](../assets/diagrams/distributed-version-control.svg){% endcapture %}{% include slide-section %}

{% capture slide %}![What is a commit](../assets/diagrams/what-is-a-commit.svg){% endcapture %}{% include slide-section %}

{% capture lab %}
1. Launch Terminal or Git Shell
2. Check Git installation with `git --version`
3. Launch GitHub for Desktop
{% endcapture %}{% include lab %}

### Objectives
* Understand the "distributed" aspect of Git version control
* Comprehend how *commit* objects serve as document change reference points
* Check that Git is installed and functioning on your system

### Git key vocabulary & concepts
Three important words key to learning Git are:

* Repository
* Commit
* Branch

*Git is an open source distributed* version control system invented by Linus Torvalds in 2005.  It is used to version the Linux kernel and is shown to be, by some research, the most popular modern version control system.

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

### Videos

#### What is Git?
<iframe src="//player.vimeo.com/video/41381741" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>



{% capture slide %}
## Surveying the GitHub platform
{% endcapture %}{% include slide-section %}

{% capture slide %}
![GitHub logo](../assets/diagrams/github-logo-black.svg)
{% endcapture %}{% include slide-section %}

{% capture slide %}
<span class="mega-octicon octicon-repo"></span>
#### Repositories
{% endcapture %}{% include slide-section %}

{% capture slide %}
<span class="mega-octicon octicon-git-branch"></span>
#### Branches
{% endcapture %}{% include slide-section %}

{% capture slide %}
<span class="mega-octicon octicon-git-pull-request"></span>
#### Pull Requests
{% endcapture %}{% include slide-section %}

{% capture slide %}
<span class="mega-octicon octicon-issue-opened"></span>
#### Issues
{% endcapture %}{% include slide-section %}

{% capture slide %}
<span class="mega-octicon octicon-jersey"></span>
#### Teams
{% endcapture %}{% include slide-section %}

{% capture slide %}
<span class="mega-octicon octicon-organization"></span>
#### Organizations
{% endcapture %}{% include slide-section %}

{% capture lab %}
* Describe the difference between the Git DVCS and GitHub collaboration platform
* Access the common project components of daily GitHub interactions
* Utilize project management components (Issues, Milestones, Collaborators, Teams)
* Recognize best document types for version control (code, CSV/TSV, small binaries)
{% endcapture %}{% include lab %}

### Core concepts
The six core concepts in the GitHub ecosystem are:

* **Repository**: a location to store related code and files
* **Branch**: a named variation on the code or enhancement-in-progress
* **Pull Request**: discussion associated with a branch
* **Issues**: an integrated bug and enhancement tracker
* **Organizations**: groups of repositories and team members
* **Teams**: named sets of users that grant access levels and group by talent, focus, and reporting

### Feature overview
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
* Notifications
* Watching repositories
* Subscribing (per thread)
* Unsubscribing (per thread)
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

### Details & resources
GitHub accounts are free. Sign up for one at [github.com/join](https://github.com/join).

GitHub is the repository hosting, collaboration, deployment, and distribution platform for both open source and private software projects.  It facilitates discussing changes-in-progress through the concepts of Issues and Pull Requests and provides a web user interface to much of Git. The web flow made possible by GitHub brings a much wider range of contributors, including documentation specialists, designers, and ops engineers into the flow of contributing to your application's life cycle.

GitHub accounts are free for an unlimited quantity of public repositories. Only private repositories cost to host on the service. Private repositories are typically used for closed-source consulting client or corporate products, whereas public repositories are typically used for open source.

Sign up for a free GitHub account at [github.com/join](https://github.com/join).

* [GitHub.com feature list](https://github.com/features)
* [How to sign up for GitHub](https://www.youtube.com/watch?v=ezxRcdJ8glM&list=PLg7s6cbtAD17rhrz2BJWAPJMjR71B3IDx)

### Videos

#### GitHub account creation video
<iframe src="//player.vimeo.com/video/88472085" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>



{% capture slide %}
## Creating a hosted repository
{% endcapture %}{% include slide-section %}

{% capture lab %}
* Visit GitHub.com
* Click the `+`
* Name the repository
* Choose seed files
* Discuss ways of interaction
{% endcapture %}{% include lab %}

### Details
Repositories can be created in numerous ways, including:

* With the GitHub web user interface
* With a GitHub GUI
* With `git init` at the command line

And important decision when creating your repository is in its name. Giving it a human readable, quick-to-identify, and sensible name makes it most effective and efficient for both yourself, and your colleagues to understand.



{% capture slide %}
## Touring content versioning on GitHub
{% endcapture %}{% include slide-section %}

{% capture lab %}
1. Browse to one of your repositories
2. Create file(s) and commit the new content
3. Edit an existing file's content and commit the change
4. Remove a file and commit the removal
5. Change a filename and commit the path change
6. Examine the *Commits* page of change history
{% endcapture %}{% include lab %}

### Details
The GitHub web interface allows you to interact and perform many file-affecting actions directly through your browser:

* Browse projects
* Start branches
* Create files
* Edit content
* Change paths
* Open Pull Requests



{% capture slide %}
## Acquiring repositories locally
{% endcapture %}{% include slide-section %}

{% capture slide %}![Repository clone process](../assets/diagrams/repo-clone.svg){% endcapture %}{% include slide-section %}

{% capture lab %}
* Clone from web (Clone in Desktop button)
* Clone via personal repo list in GitHub Desktop
* Clone via SSH or HTTPS URL
{% endcapture %}{% include lab %}


### Details
A commit is a transactionally grouped set of changes, described by a brief message explaining the "why" of the attached changes.

```
git status
git add [file]
git commit -m"[description]"
```

Git enables repositories to be created both on GitHub, or locally on a developer's computer. A repository created locally can be synced to a network destination at a later time, preserving all the timestamps and comments in the local commits during the synchronization.

Since Git facilitates making and saving changes without a network connection, syncing changes with an upstream server is a frequent operation once connected back to a network.  Git accomplishes the syncing through the `pull` and `push` commands.

A repository must have fully incorporated all upstream changes before it can successfully push changes out. This pattern encourages breakages to happen at the leaf nodes of the repository network, thus reducing stop-work merge activity and aiding those tasks being performed asynchronously and potentially even offline.

To retrieve all upstream changes, and then transmit all local changes, type:

```shell
$ git pull
$ git push origin [master|branch]
```

Local repositories offer several benefits:

- Initialize repositories while disconnected from network
- Craft file versions at your own pace or needing to publish changes one at a time
- Create branches to isolate experiments in moments and exclusive to your development system

Just as with the Git technology operating on GitHub, local repositories also use two identical aspects: Commits, which serve as history marker for file(s) and change(s) with a record of author, time, and message; and Branches, which serve as a container for grouped commits, making simpler means to integrate change with cleaner code review possibilities.



{% capture slide %}
## Exploring the GitHub Flow
{% endcapture %}{% include slide-section %}

{% capture slide %}![What is a branch](../assets/diagrams/what-is-a-branch.svg){% endcapture %}{% include slide-section %}

{% capture lab %}
1. Using the GitHub web UI, create a branch with an articulate feature name
2. Make two distinct commits to the branch, each contributing part of the feature's changes
3. Return to the homepage of the repository by clicking the repository's name
4. Notice the suggestion message asking if you'd like to "compare and pull request"
5. Click on *Compare and Pull Request*
6. Describe the reasoning behind the changes on this branch via the pull request
7. @mention a team or colleague, asking for a code review
8. Address the points raised by the reviewers through an additional commit to the branch
9. Ask for a final review and :+1: from a colleague
10. Merge the pull request
{% endcapture %}{% include lab %}

### Details
The GitHub Flow is a path through the GitHub user interface that facilitates governed, named, and reviewed sets of changes. This flow can be performed entirely from a web browser, with no need to download the code to a desktop machine, and yet still have the benefit of syntax highlighting and pre-merge code reviews and discussions.

A branch is a divergent path in the history of the code base. It may contain an experiment, fix, or enhancement, and is generally intended to be merged back to the `master` branch after being thoroughly reviewed by a colleague.

### Videos
<iframe src="//player.vimeo.com/video/100128962" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>



{% capture slide %}
### Contributing with Forks & Pull Requests
{% endcapture %}{% include slide-section %}

{% capture slide %}
![Fork contribution pattern](../assets/diagrams/fork-structure.svg)
{% endcapture %}{% include slide-section %}

{% capture lab %}
1. Create a Fork of a repository needing contributions
2. Follow the contribution pattern of the [GitHub Flow](https://guides.github.com/introduction/flow/), with the branch creation and commits happening on your fork of the repository
3. Observe the Network and Members graph that offer visualizations of your commits and fork
4. Merge the pull request
5. Observe your contributions in the original repository, having preserved your username as the author of the code
{% endcapture %}{% include lab %}

#### Resources
* [Guide to Forking](https://guides.github.com/overviews/forking/)



{% capture slide %}
## Syncing local and GitHub repos
{% endcapture %}{% include slide-section %}

{% capture slide %}
![Distributed repository interactions](../assets/diagrams/network.svg)
{% endcapture %}{% include slide-section %}

{% capture lab %}
1. Clone an existing GitHub repo using the GitHub for Desktop application
2. Following the GitHub Flow pattern, create a topic branch and make commits to the local repository
3. Review the local (unsynced) commits in history
4. Publish the changes via the Sync button
5. Verify the presence of the now-synced changes by refreshing the GitHub web UI of the cloned repo
{% endcapture %}{% include lab %}

### Details
In many cases, working with a code project means retrieving it to the local disk so that you can leverage your language-specific IDE when making changes. To retrieve a repository to the local disk is to `clone` it, in Git parlance.

Optionally, the process of synchronizing can be done on the command line, in addition to graphical clients like [GitHub for Windows](https://windows.github.com) and [GitHub for Mac](https://mac.github.com):

```
# Retrieve GitHub changes
git pull origin [master|branch]

# Publish local changes
git push origin [master|branch]
```



{% capture slide %}
## Visualizing changes with GitHub
{% endcapture %}{% include slide-section %}

### Details
GitHub enhances a traditional Git experience with visualizations typically thought of as the realm of desktop applications. Some of the visualizations we can look at today include:

* Comparing/Diff-ing
  * Code
  * Prose
  * Images
  * Maps
  * Spreadsheets
  * 3D models
* Branch view
* Branch ahead/behind positions
* Network graph
* Activity graph

#### Image Diff
Image diffing is typically thought of as a desktop-oriented feature. However, GitHub aims to be a web application that performs beyond desktop apps, and provides a rich 2-up, swipe, and onion skin view for changed images.

* [Image diff blog post](https://github.com/blog/817-behold-image-view-modes)
* [Image diff demo from Cameron McEfee](https://github.com/cameronmcefee/Image-Diff-View-Modes/commit/8e95f70c9c47168305970e91021072673d7cdad8)
* [Image diff demo from GitHub School](https://github.com/githubschool/hellogitworld/commit/7c0ffa9d88616972bb84befbec40a2212478149e)

Similarly, 3D file viewing, and then 3D file diffing are also part of the GitHub platform, providing a surprisingly rich experience right in the browser.

* [3D file viewing blog post](https://github.com/blog/1465-stl-file-viewing)
* [3D view demo of a RepRap part](https://github.com/reprap/huxley/blob/master/alternative-parts/x-blunt-plate-extended.stl)
* [3D file diffing blog post](https://github.com/blog/1633-3d-file-diffs)



{% capture slide %}
## Using GitHub Pages
{% endcapture %}{% include slide-section %}



{% capture slide %}
## Managing projects
{% endcapture %}{% include slide-section %}



{% capture slide %}
## Using GitHub Flavored Markdown
{% endcapture %}{% include slide-section %}

### Details
A plaintext format for writing prose and documentation. In addition to the [basic formatting options](https://help.github.com/articles/markdown-basics), Markdown files hosted and viewed on GitHub can make use of the following enhancements:

* [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)
* [Emoji](http://www.emoji-cheat-sheet.com/)
* [Checklists](https://github.com/blog/1825-task-lists-in-all-markdown-documents) (Issues, Gists)



{% capture slide %}
### Interacting with shortcuts
{% endcapture %}{% include slide-section %}
GitHub, though it is a web application, aims to behave as much like a desktop app as possible. Many of its features are accessible via keyboard shortcuts. While on any GitHub page, press `?` and a context-sensitive help menu will appear. Some of the most frequently used keyboard shortcuts include:

* `?` help
* `/` command bar
* `t` fuzzy file search
* `s` set focus to the search box
* `g` `c` go to code
* `g` `i` go to issues



{% capture slide %}
## Additional resources
{% endcapture %}{% include slide-section %}

### Details
This course covers many introductory and day-to-day uses of Git and GitHub. There are many more resources available to continue your exploration with the technology and platform, and we've included these here for you to explore.

* [Try Git by CodeSchool](https://try.github.io/)
* [O'Reilly's Mastering Git video series](http://bit.ly/ogitvid)
* [Introducing GitHub](http://shop.oreilly.com/product/0636920033059.do)
* [Git and GitHub LiveLessons (Workshop)](http://www.informit.com/store/git-and-github-livelessons-workshop-9780133991772)
