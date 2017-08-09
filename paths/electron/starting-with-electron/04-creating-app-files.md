---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Creating App Files
permalink: /electron/starting-with-electron/create-app-files
next-page: /electron/starting-with-electron/running-the-app
facilitator: false
sidebar:
  nav: "electron-getting-starting"
main-content: |

  Since we used a boilerplate, the most important files are already there. These files are the:

  - `package.json`
  - `src/index.html`
  - `src/index.js`

  We're going to be using other css and Javascript for our project, so let's add those files now.

  1. Create a new file in the `src` directory named `style.css`.
  1. Create a new file in the `src` directory named `script.js`.

  It's OK that these are empty now, we'll add more later. Now, link those files to the main `index.html` by adding the following lines of code:

  1. Add `<link rel=stylesheet type="text/css" href="./style.css">` on a new line after the existing `<title></title>` line.
  1. Add `<script type="text/javascript" src="script.js"></script>` on a new line directly above the line with `</body>`.


show-me-how:
tell-me-why:

---
