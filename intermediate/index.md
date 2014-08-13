---
layout: curriculum
title: GitHub Intermediate
description: Leveraging Git and GitHub from the command line
---
 

This curriculum will be your companion to the GitHub Intermediate class taught by the GitHub Training Team and other educational groups. In this course, you'll learn how to extensively leverage Git and GitHub from the command line.

### Git Configuration
Git is configured through name-value pairs saved in an [INI file format](http://en.wikipedia.org/wiki/INI_file). The name-value pairs can be read and written through the `git config` command.

The very first Git elements often suggested to set are the user's name and email address. If not set, Git will fall back to an automatically derived name and email from the host machine's network node name.

```bash
$ git config user.name "[your full name]"
$ git config user.email "[youremail@yourdomain.country]"
```

If using the GitHub for Windows or GitHub for Mac GUIs, these values are set, system-wide, by each GUI's configuration dialog.

![GitHub for Mac Advanced Preferences](../assets/screenshots/github-for-mac-advanced-preferences.png)

Configuration scopes:

```bash
$ git config --system [name] [value]
$ git config --global [name] [value]
$ git config --local [name] [value]
```

Listing configuration:

```bash
$ git config --list --[scope] 
```


```bash
# Enable automatic use of color coding in output in older versions of Git
$ git config --[scope] color.ui auto
```



```bash
# Enable line ending conversions
$ git config --[scope] core.autocrlf [input|true]
```

#### Further reading
* [Book chapter on Configuring Git](http://git-scm.com/book/en/Customizing-Git-Git-Configuration)
* [Git documentation on the config command](http://git-scm.com/docs/git-config)

##### Lab: Configuration

1. Verify the current value of your username and email address as known by Git.
2. If needed, set your username and email address using the `git config` command.
3. If on Windows, set your line ending behavior to `core.autocrlf true`
4. If on Mac, set your line ending behavior to `core.autocrlf input`
5. List out all your remaining Git configuration values.

### Start a repository
Git provides an easy way to get started versioning any prototype, prose or project with a terse command line recipe.

Initialize a repository and create a top level project directory:

```bash
# For a new project...

$ git init newproject
$ cd newproject

# ...start coding
```

Initialize a repository inside a top level project directory:

```bash
# For an existing project...

$ cd existingproject
$ git init

# ...start coding
```

Acquire a project:

```bash
$ git clone [repository-url]
```

### Versioning content

```bash
$ git status
```


```bash
$ git add [filename]
```

```bash
$ git commit -m "[your description]"
```

![](../assets/diagrams/commit-three-stage.svg)

![](../assets/diagrams/commit-versions.svg)

![](../assets/diagrams/commit-dag.svg)




### Review pending modifications
Git advocates precision in each commit's contents and commit message.  This is facilitated by easy reviewing of in-flight changes prior to describing them and making them permanent.

![](../assets/diagrams/diff.svg)

The simplest invocation of `diff` is the most common.  It displays

```bash
$ git diff
```

Git creates a distinction between what is modified and unselected and what has been staged for commit. A well-named `diff` option switch allows for the inspection of each of these two groups of changes.

```bash
$ git diff --staged
```

The default line-level difference indicators are sometimes insufficient for prose and small variable-name changes. An option instructs Git to perform and highlight intra-line comparisons.

```bash
# Highlight word changes on lines
$ git diff --color-words
```

Diff, by default, performs comparisons on all modified files. If inspection of just a subset is called for, `diff` accepts a precise or wildcard-ed filename or path as an option.

```bash
# By specific file
$ git diff [file-path]
```

### Review historical changes
Lorem ipsum dolor sit amet, vitae risus eu. Risus pede. Etiam facilisi quis, iaculis cum sed, eu mauris. Magna turpis. Etiam sed voluptatem.

```bash
$ git log
```

Some simple option flag additions to the `log` invocation can make the output more information-dense.

```bash
# Simple commit summaries
$ git log --oneline
```

And if displaying the full contents of the change and word-level comparision are helpful, there are option switches for that too.

```bash
# Option switches common with `diff`
$ git log --patch --color-words
```

### Local workflows
Lorem ipsum dolor sit amet, vitae risus eu. Risus pede. Etiam facilisi quis, iaculis cum sed, eu mauris. Magna turpis. Etiam sed voluptatem.

### Distributed repositories
Lorem ipsum dolor sit amet, vitae risus eu. Risus pede. Etiam facilisi quis, iaculis cum sed, eu mauris. Magna turpis. Etiam sed voluptatem.

### Remote workflows
Lorem ipsum dolor sit amet, vitae risus eu. Risus pede. Etiam facilisi quis, iaculis cum sed, eu mauris. Magna turpis. Etiam sed voluptatem.

### Utilities and shortcuts
Lorem ipsum dolor sit amet, vitae risus eu. Risus pede. Etiam facilisi quis, iaculis cum sed, eu mauris. Magna turpis. Etiam sed voluptatem.

### File lifecycle
Lorem ipsum dolor sit amet, vitae risus eu. Risus pede. Etiam facilisi quis, iaculis cum sed, eu mauris. Magna turpis. Etiam sed voluptatem.

### Undoing changes
Lorem ipsum dolor sit amet, vitae risus eu. Risus pede. Etiam facilisi quis, iaculis cum sed, eu mauris. Magna turpis. Etiam sed voluptatem.

### Recovering anything
Lorem ipsum dolor sit amet, vitae risus eu. Risus pede. Etiam facilisi quis, iaculis cum sed, eu mauris. Magna turpis. Etiam sed voluptatem.
