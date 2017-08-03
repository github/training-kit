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

  ## Adding an Icon
  - Including the icon image for the program
  - give recommendations on what type of image is allowed (open or public domain) and what size would be best.
  - possibly include [icon library](https://useiconic.com/open) suggestions
  - Replace icon in Contents>Resources directory in build script: "build": "electron-packager . app-name && cp Icon.icns Path/To/New/Icon"
  - Delete app: `rm -rf AppName.app`
  - Rebuild: `npm run build`


show-me-how:
tell-me-why:

---
