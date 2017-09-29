---
layout: simple-class
help: https://github.com/githubschool/on-demand-electron-app/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Push your project to GitHub
permalink: /electron/create-an-app/push-your-project-to-github/
next-page: /electron/create-an-app/create-your-apps-files/
facilitator: false
sidebar:
  nav: "create-an-app-in-electron"
main-content: |
  Throughout this tutorial, we won't guide you too much on using Git. For all of the code, we recommend using branches and atomic commits, as well as pushing to the remote frequently.

  > Not sure what to do with Git or GitHub? [Check out some of the on-demand courses to learn more!](../../)

  Let's create our first commit, and push our project to GitHub :octocat:.

  ![gif of following the directions below](<% SITEURL %><% BASEURL %>/images/gifs/electron/electron1-push-to-github.gif)

  ### Create your first commit
  1. Type `git status`, and see that all of your files are currently untracked in the working tree.
  1. Type `git add .gitignore`. This command stages our first commit using a special file called `.gitignore`, which lets us specify the parts of our project that should be pushed to GitHub, and those that should remain just on our machine.
  1. Type `git commit -m "initial commit with gitignore"` to craft our first commit.
  1. Stage the rest of the files, using `git add .`.
  1. Create your commit using `git commit -m "add electron boilerplate files"`.

  ### Push to GitHub
  1. [Create a new repository](https://help.github.com/articles/creating-a-new-repository/) on GitHub.com. To avoid errors, do not initialize the new repository with `README`, `license`, or `.gitignore` files. You can add these files after your project has been pushed to GitHub.
  1. Follow the steps shown in your new project for pushing an existing repository from the command line. See _Tell my why_ if you'd like some extra resources to help you along.

show-me-how:
tell-me-why: |
  By default, the boilerplate initialized this directory as a Git repository, so we won't need to do any extra work to get this set up. But we did need to do a little work to get it pushed up to GitHub.com, where we can show off our code to others, and backup our work.

  ### Understanding the `.gitignore` file
  There's a [file in your repository named .gitignore](https://help.github.com/articles/ignoring-files/). Git uses this to determine which files and directories to ignore, before you make a commit.

  We want to use a `.gitignore file` built for Node projects, since Electron is a Node based project. Typically, we would do this manually. Since we used a boilerplate, this is already done. If you're interested in learning about different `.gitignore` files, the [github/gitignore repository](https://github.com/github/gitignore) contains examples for many common programming languages.

  ### More about pushing to GitHub
  Repositories can live locally on your machine, but also on a remote like GitHub.com. The steps had you push your repository to GitHub, but if you need some assistance on performing some of the steps we described, you may find the following links helpful:

    1. [Adding a remote](https://help.github.com/articles/adding-a-remote/).
    1. [Pushing to a remote](https://help.github.com/articles/pushing-to-a-remote/).


---
