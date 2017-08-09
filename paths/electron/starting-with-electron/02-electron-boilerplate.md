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

  - `package.json`
  - `package-lock.json`
  - `src/index.html`
  - `src/index.js`

show-me-how:
tell-me-why: |
  _Potential TODO_: Add file descriptions here?

  Any Electron app has 3 core processes that interact with each other. A package.json that initializes the main process, a main process that initializes renderer processes, and a renderer process. NPM operations trigger a package-lock.json file. [Source](https://github.com/electron/electron/blob/master/docs/tutorial/quick-start.md)

  - package.json - Points to the app's main file and lists its details and dependencies.
  - package-lock.json - _automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates._ [Source](https://docs.npmjs.com/files/package-lock.json)
  - src/index.html - A web page to render. This is the app's renderer process.
  - src/index.js - Starts the app and creates a browser window to render HTML. This is the app's main process.

  _Potential TODO_: Add node/npm description here?

---
