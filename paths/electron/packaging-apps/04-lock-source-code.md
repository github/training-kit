---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Packaging Apps
permalink: /electron/packaging-apps/
next-page: /electron/packaging-apps/
facilitator: false
sidebar:
  nav: "electron-packaging-apps"
main-content: |

  ## Stopping people from editing source code with asar
  - Archive capability with asar
  - `npm install asar --save-dev`
  - Create another script in package.json called "package": "asar pack AppName.app/Contents/Resources/app MyApp.app/Contents/Resources/app.assar"
  - Run `npm package`, and delete the app directory

show-me-how:
tell-me-why:

---
