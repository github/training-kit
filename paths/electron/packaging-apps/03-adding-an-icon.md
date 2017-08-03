---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Adding an Icon
permalink: /electron/packaging-apps/adding-an-icon
next-page: /electron/packaging-apps/lock-source-code
facilitator: false
sidebar:
  nav: "electron-packaging-apps"
main-content: |

  ## Adding an Icon

  We have an app, but right now the app only uses the default image. Let's make it a specific, custom image.

  ### Finding an Image
  - possibly include [icon library](https://useiconic.com/open) suggestions
  - give recommendations on what type of image is allowed (open or public domain) and what size would be best.

  ### Converting the Image
  - What types of images are necessary for each operating system?
  - How can we find an image and convert into the appropriate formats?

  ### Including the Image in the Build
  - Replace icon in Contents>Resources directory in build script - "build": "electron-packager . app-name && cp Icon.icns Path/To/New/Icon"
  - Delete app - `rm -rf AppName.app`
  - Rebuild - `npm run build`

show-me-how:
tell-me-why:

---
