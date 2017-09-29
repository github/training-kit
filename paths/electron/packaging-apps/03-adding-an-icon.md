---
layout: simple-class
help: https://github.com/githubschool/on-demand-electron-app/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Add an Icon
permalink: /electron/package-your-app/add-an-icon/
next-page: /electron/package-your-app/test-your-app/
facilitator: false
sidebar:
  nav: "electron-package-your-app"
main-content: |

  We have an app, but right now the app only uses the default image. Let's make it a specific, custom image.

  ### Finding an Image

  To find an image for your application, keep a few things in mind.

  - Ownership of the image (Public domain or self-owned)
  - Size of image (recommendation here)

  Not sure where to start? [Check out this icon library](https://useiconic.com/open)!

  ### Converting the Image

  Every operating system will prefer a different format of image.

  | Operating System | Image Format |
  |-----|-----|
  | macOS | .icns |
  | Windows | .ico |
  | Linux | .png |

  To convert the image to the appropriate format, we recommend [this tool](https://iconverticons.com/online/).

  ### Including the Image in the Build

  ![gif of following the directions below](<% SITEURL %><% BASEURL %>/images/gifs/electron/electron2-icon.gif)

  1. From your project's root directory in the CLI, type `mkdir Icons` to create a new Icons directory.
  1. Generate an icon file for Windows (.ico), macOS (.icns), and Linux (.png).
  1. Add all of the image files to the `Icons` directory.
  1. Replace the previous build script in your `package.json` to account for builds with different icons with the scripts below. In the example below, the app name is `electron-app`, and the icon name is `unicorn`. You can change that to match your own app and icon name.

          "build-darwin"  : "electron-packager . electron-app --platform=darwin --icon Icons/unicorn.icns --overwrite",
          "build-mas"     : "electron-packager . electron-app --platform=mas --icon Icons/unicorn.icns --overwrite",
          "build-linux"   : "electron-packager . electron-app --platform=linux --icon Icons/unicorn.png --overwrite",
          "build-win32"   : "electron-packager . electron-app --platform=win32 --icon Icons/unicorn.ico --overwrite",
          "build"         : "npm run build-darwin && npm run build-mas && npm run build-linux && npm run build-win32"

  1. Rebuild: `npm run build`

  To see an example file of this, [take a peek at our example repository](https://github.com/githubschool/on-demand-electron-app/blob/master/package.json#L12-L16).


show-me-how:
tell-me-why:

---
