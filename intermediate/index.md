---
layout: curriculum
title: GitHub Intermediate
description: Leveraging Git and GitHub from the command line
---
 

This curriculum will be your companion to the GitHub Intermediate class taught by the GitHub Training Team and other educational groups. In this course, you'll learn how to extensively leverage Git and GitHub from the command line.

### Git Configuration
Git is configured through name-value pairs saved in an [_INI_ file format](http://en.wikipedia.org/wiki/INI_file). The name-value pairs can be read and written through the `git config` command.

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

### Getting started
Lorem ipsum dolor sit amet, vitae risus eu. Risus pede. Etiam facilisi quis, iaculis cum sed, eu mauris. Magna turpis. Etiam sed voluptatem.

### Versioning content
Lorem ipsum dolor sit amet, vitae risus eu. Risus pede. Etiam facilisi quis, iaculis cum sed, eu mauris. Magna turpis. Etiam sed voluptatem.

### Reviewing modifications
Lorem ipsum dolor sit amet, vitae risus eu. Risus pede. Etiam facilisi quis, iaculis cum sed, eu mauris. Magna turpis. Etiam sed voluptatem.

### Reviewing changes
Lorem ipsum dolor sit amet, vitae risus eu. Risus pede. Etiam facilisi quis, iaculis cum sed, eu mauris. Magna turpis. Etiam sed voluptatem.

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
