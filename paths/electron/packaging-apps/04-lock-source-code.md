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

  When people download the application, you may or may not want them to have direct access to the source code. With an option in `electron-packager`, you can control this. If you're not concerned with this, you can skip this step.

  1. In your build scripts, add the flag `--asar` after `--overwrite`
  1. Run `npm run build`
  
show-me-how:
tell-me-why:

---
