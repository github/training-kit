---
layout: module
leadingpath: ../
title: Basic Command Line Interface (CLI) Configuration
pre-requisites: CONT-05_Merging-pull-requests
learning-objective: Configure the CLI to work effectively with Git.
screens:
  - image-slide:
      title: Git Configuration Levels
      image: config-levels.jpg
      presenter-script:
        - If you prefer to work on the command line, you can easily integrate GitHub into your current workflow. The first thing you should do when you get started using git is to set your configuration options.
        - Git allows you to set configuration options at three different levels.
        - --system - These are system-wide configurations. They apply to all users on this computer.
        - --global - These are the user level configurations. They only apply to your user account.
        - --local - These are the repository level configurations. They only apply to the specific repository where they are set.
        - The default value for git config is --local.
        - We will revisit our configuration setting throughout the class; right now we are only setting the essentials to get us started.
  - image-slide:
      title: Checking Git Version
      image: git-version.jpg
      presenter-script:
        - "Git is OS agnostic; the commands are essentially the same whether you are on Mac, Windows or Linux. You can use your favorite application to interact with the command line. Follow along with the commands in this video to make sure your computer is configured correctly."
        - "First, let's check the version of Git currently installed on your system. At the very least you should have a version greater than 1.9.5 installed."
  - image-slide:
      title: Pre-viewing Configuration Settings
      image: config-list.jpg
      presenter-script:
        - "If you would like to see which config settings have been added automatically, you can type `git config --list`. This will automatically read from each of the storage containers for config settings and list them."
  - image-slide:
      title: Configuring User Name and Email
      image: config-username-email.jpg
      presenter-script:
        - "Go ahead and follow along as we set up our basic configurations. Git uses the config settings for your user name and email address to generate a unique fingerprint for each of the commits you create, so let's set our user name and email address first. Type `git config --global user.name \"<user name>\"` and Type `git config --global user.email \"<user email>\"`"
  - image-slide:
      title: Configuring Default Editor
      image: config-editor.jpg
      presenter-script:
        - "Next, we will add a default text editor. This is the text editor git will use when you need to edit things like commit messages or handle merge conflicts. Typing `git config --global core.editor \"atom --wait\"` will tell Git to use the open source atom text editor. If you would like to use a different editor you can look for instructions at https://help.github.com/articles/associating-text-editors-with-git/"
  - image-slide:
      title: Configuring Autocrlf
      image: config-autocrlf.jpg
      presenter-script:
        - "`autocrlf` stands for auto carriage return line feed. Different systems handle line endings and line breaks differently. If you open a file created on another system and do not have this config option set, git will think you made changes to the file based on the way your system handles this type of file. Type `git config --global core.autocrlf` If you are on a Windows machine, you will want to set this option to `true`. If you are on a Mac or Linux machine, you will set it to `input`."
  - image-slide:
      title: Configuring Default Push Behavior
      image: config-push-default.jpg
      presenter-script:
        - "One final configuration option we will want to set is our default value for push. When you push changes from your local computer to the remote you can choose whether you want git to automatically push all of the local branches to their matching branches on the remote or whether you only want the currently checked out branch to be pushed. The config setting we use to set this option is push.default. We can set the default to `matching` if we want to push all branches automatically. OR, we can set it to `simple` if we only want to push the branch we are on. For now, let's use `git config --global push.default simple`."
  - image-slide:
      title: Viewing Configuration Settings
      image: config-list.jpg
      presenter-script:
        - "Now that we have set some of our own configuration options, let's take another look at `git config --list`. You may notice duplicate settings if the same variable is set in multiple locations. The lowest value on the list takes precedence."
additional-labs:
additional-questions:
resources:

---