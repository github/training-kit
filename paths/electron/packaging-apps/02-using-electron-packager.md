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

  Now that we have installed `electron-packager`, we're ready to use it. We could type out the entire command every time, but it's best practice to add a build script to the `package.json` file. This means that every time we run the default build script, our specific list of commands will be run.

  1. In the `package.json` file, add a build script `"build": "electron-packager <app-name> --all --ignore=node_modules/electron-*"` in "scripts" of package.json. (Ignore all dependency apps the same way.)
  1. Run the new build script with `npm run build`

show-me-how:
tell-me-why:
  When we use [electron-packager](https://github.com/electron-userland/electron-packager#usage), we have some options about how and what we build the applications.

  The typical form is:
  `electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]`

  However, when we use the `--all` flag, `electron-packager` creates bundles for all valid combinations of target platforms/architectures.

---
