---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Packaging Apps
permalink: /electron/packaging-apps/
next-page: /electron/packaging-apps/using-electron-packager
facilitator: false
sidebar:
  nav: "electron-packaging-apps"
main-content: |


  ## Packaging Electron Applications

  We are going to use a node package named [`electron-packager`](https://github.com/electron-userland/electron-packager) to package the electron app. This means that others will be able to download and use the app natively, regardless of if they're running MacOS, Windows, or Linux.

  ### Packaging for different environments

  MacOS, Windows, and Linux all have different needs for apps to work well. We will work through the functional needs, but it's important to keep in mind that there are other needs. Packaging can be done for each operating system, but the user interface isn't automatically made to look native in the process.

  ### Why `electron-packager`?

  Many factors make the process of packaging electron applications somewhat complicated. It is a different process based on your operating system and the operating system you're trying to go to. Right now, [`electron-packager`](https://github.com/electron-userland/electron-packager) is the community's most popular choice to solve these problems.

  ### Downloading `electron-packager`

  While you are in the command line in the directory of your electron app, install the node package `electron-packager` and save it to your development dependencies in the `package.json` file

  1. `npm install electron-packager --save-dev`
  
show-me-how:
tell-me-why:

---
