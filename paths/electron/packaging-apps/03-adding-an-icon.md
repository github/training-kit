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
  | MacOS |     |
  | Windows |     |
  | Linux |      |

  To convert the image to the appropriate format, we recommend [this tool](TBD).

  ### Including the Image in the Build
  1. In your project's root directory, create a new directory called `Icon`: `mkdir Icon`
  1. Add all of the image files to the `Icon` directory
  1. Replace icon in Contents>Resources directory in build script:

                  ```json
                  "build": "electron-packager . app-name && cp Icon.icns Path/To/New/Icon"
                  ```
                  
  1. Delete app: `rm -rf AppName.app`
  1. Rebuild: `npm run build`

show-me-how:
tell-me-why:

---
