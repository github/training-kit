---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Electron Boilerplate
permalink: /electron/starting-with-electron/boilerplate
next-page: /electron/starting-with-electron/init-git-repository
facilitator: false
sidebar:
  nav: "electron-getting-starting"
main-content: |

  Right now, our directory has no files. We want it to be set up as a base electron boilerplate called [electron-forge](https://electronforge.io/). To do that, we need to go through a few steps.

  Important files to watch out for:
  - package.json
  - src/index.html
  - src/index.json

  1. Find the terminal and create a directory for the project: `npm install -g electron-forge`
  1. Initialize a new project: `electron-forge init electron-app`
  1. CD into that app: `cd electron-app`

show-me-how:
tell-me-why:

---
