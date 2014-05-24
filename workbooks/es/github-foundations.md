---
layout: workbook
title: GitHub Foundations Workbook
description: This student and teacher workbook will be your companion to the GitHub Foundations class taught by the GitHub Training Team and other educational groups. In this course, you'll learn basic collaboration skills towards a productive use of Git and GitHub in your open source work and daily job assignments.


---

## Conceptos de Control de Versiones

### Resumen
* Git, el rastreador de informacion
* GitHub, la plataforma de colaboracion
* Control de versiones distribuido
* [Una breve historia de Git](http://git-scm.com/book/en/Getting-Started-A-Short-History-of-Git)
* [La pagina principal del proyecto de github](http://git-scm.com)

### Detalles 
__Git es un sistema de código abierto y distribuido__ de control de versiones inventado por Linus Torvalds en 2005. Se utiliza para versionar el kernel de Linux y se demuestra que es, por un poco de investigación, el sistema de control de versiones modernas más popular.

Git es la herramienta de fuente abierta, de línea de comandos que forma parte de los flujos de trabajo que cubriremos en este curso. Se le ha llamado el sucesor de CVS y Subversion por muchos usuarios, y mantiene cierta similitud en el comportamiento de estas herramientas de control de versiones históricas de código abierto.

El mantenimiento de una versión actual de Git es importante. Mientras se escucha con precisión que Git es generosamente compatible con versiones anteriores, las últimas versiones ofrecen mejoras de mensajes de error, afinaciones de rendimiento y características de usabilidad que hacen que usar Git cada vez más rápido y agradable.

Verificar que Git está instalado y en funcionamiento se puede hacer solicitando a Git que muestre su versión actual, usando este comando:

``` shell
$ git --version

git version 1.8.2
```

##  Instaladores de GitHub
* [Instalador de GitHub para Windows ](http://windows.github.com)
* [Instalador de GitHub para Mac](http://mac.github.com)
* [Libro Pro Git: Instalando Git](http://git-scm.com/book/en/Getting-Started-Installing-Git)
* **Windows**: El instalador de GitHub para Windows puede ser encontrado en http://windows.github.com.
* **Mac**: El instalador de GitHub para Mac puede ser encontrado en http://mac.github.com.
* **Linux**: El código fuente de Git y un listado de gestores de paquetes puede ser encontrado en http://git-scm.com/download/linux.

### Details
The command line version of Git has a very light footprint. For most platforms, you can simply copy the binaries to a folder that is on the executable search $PATH. Git is primarily written in C, which means there is a unique installer for each operating system.


## The GitHub platform
* [GitHub.com feature list](https://github.com/features)
* [How to sign up for GitHub](https://www.youtube.com/watch?v=ezxRcdJ8glM&list=PLg7s6cbtAD17rhrz2BJWAPJMjR71B3IDx)

### Details
GitHub accounts are free. Sign up for one at [github.com/join](https://github.com/join).

GitHub is the repository hosting, collaboration, deployment, and distribution platform for both open source and private software projects.  It facilitates discussing changes-in-progress through the concepts of Issues and Pull Requests and provides a web user interface to much of Git. The web flow made possible by GitHub brings a much wider range of contributors, including documentation specialists, designers, and ops engineers into the flow of contributing to your application's life cycle.

GitHub accounts are free for an unlimited quantity of public repositories. Only private repositories cost to host on the service. Private repositories are typically used for closed-source consulting client or corporate products, whereas public repositories are typically used for open source.

Sign up for a free GitHub account at https://github.com/join.

Git can be installed as a unified GitHub GUI and command line or merely as a stand-alone command line interface.


## Interacting with repositories

### Summary
* [GitHub web flow](https://guides.github.com/overviews/flow/)
* GitHub GUIs for Mac, Windows
* Command line

## Getting to know Git & GitHub

### Summary
* Repository initialization
  * New project and new repository
  * Repository based on existing content
  * Through web interface
  * Web interface and GUI client

## Acquiring repos

### Summary
* Clone from web (Clone in Desktop button)
* Clone via personal repo list in GitHub Desktop
* Complete "copy" explanation

## Version control basics

### Summary
* Commits
  * History marker for file(s), change(s)
  * Record of author, time, and message
* Branches
  * Container for grouped commits
  * Simpler means to integrate change
  * Cleaner code review possibilities
* GitHub, local repositories

## GitHub repository interaction

### Summary
* Commits (GitHub.com)
  * Actionable steps (Create, Edit, Remove, Move)
  * Commit messages
  * Listing page on GitHub
* Branches (GitHub.com)
  * Selection menu
  * Listing page
  * Comparison view

## Local repository interaction

### Summary
* Changes (with text editor)
* Comparison (diff via GHfD)
* Commits
* Branches
* History
* Syncing (GHfD)

* Commits (GitHub for Desktop)
  * Managing file on system, reviewing results
  * Line-level tracking
  * Grouping files
  * Synchronizing local commits
* Branches (GitHub for Desktop)
  * Create
  * Change
  * Publish

## GitHub workflows

### Summary
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

## GitHub visualizations

### Summary
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

## GitHub Wikis

### Summary
* Fast documentation authoring for repositories
* Standalone repository
* Easy access from repository navigation

## GitHub Pages

### Summary
* Web page for your repository
* Web page for your account
* Author, edit, launch from GitHub

## GitHub Features

### Summary
* Notifications
* Watching repositories
* Starring repositories
* Gist
* GitHub Flavored Markdown
  * Basics
  * Emoji
  * Checklists (Issues, Gists)

## GitHub shortcuts

### Summary

* `/` command bar
* `?` help
* `t` fuzzy file search

## Project management basics

### Summary
* GitHub Issues
* Milestones
* Network
* Pulse
* Tags, Releases
* Collaborators
* Organizations
* Teams

## Special Repository Features of GitHub
* Contributing.md
* License.md
  * During repository creation
  * `+` a file with existing repository (special dropdown)
* .gitignore
  * During repository creation
  * `+` a file with existing repository (special dropdown)
* Readme.md
  * In root
  * In subfolders
