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

  To begin, we will set up a base electron app using a boilerplate called [electron-forge](https://electronforge.io/). To do that, we need to go through a few steps.

  1. Find the terminal and create a directory for the project: `npm install -g electron-forge`
  1. Initialize a new project: `electron-forge init electron-app`
  1. CD into that app: `cd electron-app`

  Important files to watch out for in any Electron app:

  - package.json
  - package-lock.json
  - src/index.html
  - src/index.js

show-me-how:
tell-me-why: |
  _Potential TODO_: Add file descriptions here?
  
  _Potential TODO_: Add node/npm description here?

---
