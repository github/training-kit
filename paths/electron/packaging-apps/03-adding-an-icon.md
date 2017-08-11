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
  | MacOS | .icns |
  | Windows | .ico |
  | Linux | .png |

  To convert the image to the appropriate format, we recommend [this tool](TBD).

  ### Including the Image in the Build
  1. In your project's root directory, create a new directory called `Icon`: `mkdir Icon`
  1. Add all of the image files to the `Icon` directory. Let's say that the image is called "Icon" as well. If you don't name your image "Icon", make sure to replace that as you follow the next few steps.
  1. Create a new script specifically for each type of icon, so that your build script section now looks like this.

                  "build-darwin": "electron-packager . aug-11 --platform=darwin --icon Icons/unicorn.icns --ignore=node_modules/electron-*",
                  "build-mas": "electron-packager . aug-11 --platform=mas --icon Icons/unicorn.icns --ignore=node_modules/electron-*",
                  "build-linux": "electron-packager . aug-11 --platform=linux --icon Icons/unicorn.png --ignore=node_modules/electron-*",
                  "build-win32": "electron-packager . aug-11 --platform=win32 --icon Icons/unicorn.ico --ignore=node_modules/electron-* ",
                  "build": "npm run build-darwin && npm build-mas && npm build-linux && npm-build-win32"

  1. Delete app: `rm -rf appname-darwin-x64/` for Darwin, and do the same for each built application folder.
  1. Rebuild: `npm run build`

show-me-how:
tell-me-why:

---
