---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Lock Source Code
permalink: /electron/package-your-app/lock-source-code/
next-page: /electron/package-your-app/test-your-app/
facilitator: false
sidebar:
  nav: "electron-package-your-app"
main-content: |

  When people download the application, you may or may not want them to have direct access to the source code. With an option in `electron-packager`, you can control this. If you're not concerned with this, you can skip this step.

  ![gif of following the directions below](../<% SITEURL %>/<% BASEURL %>/images/gifs/electron/electron2-locksource.gif)

  1. In your build scripts, add the flag `--asar` after `--overwrite`:

          "build-darwin"  : "electron-packager . electron-app --platform=darwin --icon Icons/unicorn.icns --overwrite --ignore=node_modules/electron-*",
          "build-mas"     : "electron-packager . electron-app --platform=mas --icon Icons/unicorn.icns --overwrite --ignore=node_modules/electron-*",
          "build-linux"   : "electron-packager . electron-app --platform=linux --icon Icons/unicorn.png --overwrite --ignore=node_modules/electron-*",
          "build-win32"   : "electron-packager . electron-app --platform=win32 --icon Icons/unicorn.ico --overwrite --ignore=node_modules/electron-* ",
          "build"         : "npm run build-darwin && npm run build-mas && npm run build-linux && npm run build-win32"

  1. Run `npm run build`

show-me-how:
tell-me-why:

---
