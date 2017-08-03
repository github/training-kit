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

  ## Walkthrough of Process

  - `npm install electron-packager --save-dev`
  - Add build script `"build": "electron-packager . app-name --ignore=node_modules/electron-*"` in "scripts" of package.json (ignore all dependency apps the same way)
  - `npm run build`

show-me-how:
tell-me-why:

---
