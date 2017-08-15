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

  1. In the `package.json` file, add a build script `"build": "electron-packager . <app-name> --all --overwrite --ignore=node_modules/electron-*"` in "scripts" of package.json. (Ignore all dependency apps the same way.)
  1. In the `src/index.js` file, replace the first line with the new line `const { BrowserWindow, app } = require('electron');`. (The current line is pre-populated by `electron-forge` and doesn't play nicely with `electron-packager`.)
  1. Run the new build script with `npm run build`
    1. If this doesn't work for you, check out the troubleshooting steps below.

troubleshooting: |
  There are some inconsistencies between electron-packager and the most recent version of node. Do the following and you should be all set!

  _Note: We're using nvm here instead of rbenv. If you can duplicate successful steps to adjust your node version, please do so (and good luck!)._ 

  **macOS**

  1. Type `brew cask install xquartz`
  1. Type `brew install wine`
  1. Type `brew install nvm`
  1. Type `nvm install 6.11.2`
  1. Type `nvm use 6`
  1. Use the `npm run build` command again, and everything should work!
    - **WARNING** -- It might take a long time to build the win32 package. Leave this for 5-10 minutes and return.

show-me-how:
tell-me-why: |
  When we use [electron-packager](https://github.com/electron-userland/electron-packager#usage), we have some options about how and what we build the applications.

  The typical form is-
  `electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]`

  However, when we use the `--all` flag, `electron-packager` creates bundles for all valid combinations of target platforms/architectures.

---
