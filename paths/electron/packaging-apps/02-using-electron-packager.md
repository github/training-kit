---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Using electron-packager
permalink: /electron/packaging-apps/using-electron-packager
next-page: /electron/packaging-apps/adding-an-icon
facilitator: false
sidebar:
  nav: "electron-packaging-apps"
main-content: |

  ## Using `electron-packager`

  - `npm install electron-packager --save-dev`
  - Add build script `"build": "electron-packager . app-name --ignore=node_modules/electron-*"` in "scripts" of package.json (ignore all dependency apps the same way)
  - `npm run build`

show-me-how:
tell-me-why:

---
