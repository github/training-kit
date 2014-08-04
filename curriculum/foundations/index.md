---
layout: curriculum
title: GitHub Foundations
description: Discovering the GitHub collaboration platform
---

### Git configuration

Git's configuration is saved in one of three plain text files and one of three levels and is easily editable with a text editor and portable to other machines by copying the configuration files.

Level | Precedence | Location
--- | --- | ---
`system` | lowest | alongside the `git` binary
`global` | middle | in your home directory as `.gitconfig`
`local` | highest | in your project's `.git/config` file

```
$ git config --list
$ git config user.name
$ git config user.email
$ git config --global core.autocrlf <value>
```

<svg version="1.1"
	width="100%"
	height="100%"
	data-path="diagrams/commit-data-structure.svg"
	id="canvas-123"
	viewBox="0 0 100 100"></svg>

``` shell
# Set line endings to LF for Mac and Linux
$ git config --global core.autocrlf input

# Set line endings to CRLF for Windows
$ git config --global core.autocrlf auto
```

#### Lab

* Check that Git is installed on your system
* Configure your user.name for the global scope
* Configure your user.email to match your GitHub.com account
* Review all configuration with the `--list` switch

### File lifecycle

```bash
# Permanently delete file, stage for commit
$ git rm [file]
```

```bash
# Stage all updated files
$ git add -u [file|pattern]

# Stage all files no matter the state
$ git add -A [file|pattern]

```

```bash
# Change the path of a file
$ git mv [path]
```
