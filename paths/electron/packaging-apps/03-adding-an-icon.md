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

  To find an image for your application, keep a few things in mind.

  - Ownership of the image (Public domain or self-owned)
  - Size of image (recommedation here)

  Not sure where to start? [Check out this icon library](https://useiconic.com/open)!

  ### Converting the Image

  Every operating system will prefer a different format of image.

  | Operating System | Image Format |
  |-----|-----|
  | macOS | .icns |
  | Windows | .ico |
  | Linux | .png |

  To convert the image to the appropriate format, we recommend [this tool](TBD).

  ### Including the Image in the Build
  1. From your project's root directory in the CLI, type 'mkdir Icon' to create a new Icon directory.
  1. Generate an icon file for Windows (.ico), macOS (.icns), and Linux (.png).
  1. Add all of the image files to the `Icon` directory. 
  1. Create a new script specifically for each type of icon, so that your build script section now looks like this. If you didn't name your image "unicorn", make sure to replace that for your own process.

                  "build-darwin": "electron-packager . aug-11 --platform=darwin --icon Icons/unicorn.icns --overwrite --ignore=node_modules/electron-*",
                  "build-mas": "electron-packager . aug-11 --platform=mas --icon Icons/unicorn.icns --overwrite --ignore=node_modules/electron-*",
                  "build-linux": "electron-packager . aug-11 --platform=linux --icon Icons/unicorn.png --overwrite --ignore=node_modules/electron-*",
                  "build-win32": "electron-packager . aug-11 --platform=win32 --icon Icons/unicorn.ico --overwrite --ignore=node_modules/electron-* ",
                  "build": "npm run build-darwin && npm build-mas && npm build-linux && npm-build-win32"

  1. Rebuild: `npm run build`

show-me-how:
tell-me-why:

---
