---
layout: simple-class
help: https://github.com/githubschool/on-demand-electron-app/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Package Your App for Downloads
permalink: /electron/package-your-app/
next-page: /electron/package-your-app/use-electron-packager/
facilitator: false
sidebar:
  nav: "electron-package-your-app"
main-content: |


  ## Packaging Electron Applications

  We are going to use a node package named [`electron-packager`](https://github.com/electron-userland/electron-packager) to package the Electron app. This means that others will be able to download and use the app natively, whether they're running macOS, Windows, or Linux.

  _Note: There are absolutely other tools to package Electron apps, but we're using this one because it's widely adopted and consistently maintained within the community. Feel free to branch out and explore others after this demo if you're interested!_

  ### Packaging for different environments

  macOS, Windows, and Linux all have different technical needs for apps to work well. We will work through those technical needs, but it's important to keep in mind that there's much more to building apps for multiple operating systems. Packaging can be done for each operating system, but the user interface isn't automatically made to look native in the process. It's good practice to be mindful of a user's experience with the interface of their native OS. As you begin to ramp up on desktop app development, you should consider designing interfaces that fit into the user's mental model of their OS.

  ### Why `electron-packager`?

  Many factors make the process of packaging Electron applications somewhat complicated. It is a different process based on your operating system and the operating system you're trying to package for. Right now, [`electron-packager`](https://github.com/electron-userland/electron-packager) is the community's most popular choice to solve these problems.

  ### Downloading `electron-packager`

  While you are in the command line in the directory of your electron app, install the node package `electron-packager` and [save it to your development dependencies in the `package.json` file](https://github.com/githubschool/on-demand-electron-app/blob/master/package.json#L60).

  ![gif of following the directions below](<% SITEURL %><% BASEURL %>/images/gifs/electron/electron2-packaging.gif)

  1. `npm install electron-packager --save-dev`

  Since we run this command with `--save-dev`, it will be installed for this directory _and_ added to the `package.json` file, the important file that guides Node and `npm` packages for the life of the project.

  ### Getting Help

  If you have any issues and need help, we've created a repository for you! If you have any questions throughout this course, go here to open an issue and ask a question: [On Demand Electron App Repo](https://github.com/githubschool/on-demand-electron-app).

show-me-how:
tell-me-why:

---
