---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Lock Source Code
permalink: /electron/packaging-apps/lock-source-code
next-page: /electron/packaging-apps/testing
facilitator: false
sidebar:
  nav: "electron-packaging-apps"
main-content: |

  ## Lock Source Code

  When people download the application, you may or may not want them to have direct access to the source code. With a node package called [`asar`](https://www.npmjs.com/package/asar), you can control this. If you're not concerned with this, you can skip this step.

  1. Archive capability with asar
  1. `npm install asar --save-dev`
  1. Create another script in package.json called "package": "asar pack AppName.app/Contents/Resources/app MyApp.app/Contents/Resources/app.assar"
  1. Run `npm package`, and delete the app directory

show-me-how:
tell-me-why:

---
