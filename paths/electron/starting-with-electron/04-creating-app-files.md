---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Create your App's Files
permalink: /electron/starting-with-electron/create-app-files
next-page: /electron/starting-with-electron/running-the-app
facilitator: false
sidebar:
  nav: "electron-getting-starting"
main-content: |

  Since we used a boilerplate, the most important files are already there. These files are:

  - `package.json`
  - `src/index.html`
  - `src/index.js`

  We're going to be using other CSS and Javascript for our project, so let's add those files now.

  1. Create a new file in the `src` directory named `style.css`.
  1. Create a new file in the `src` directory named `script.js`.

  It's OK that these are empty now, we'll add more later. Now, link those files to the main `index.html` by adding the following lines of code to the `index.html`:

  1. Add the following code on a new line after the existing `<title></title>` tags.

          <link rel=stylesheet type="text/css" href="./style.css">
  1. Add the following code on a new line directly above `</body>`.

          <script type="text/javascript" src="script.js"></script>


show-me-how:
tell-me-why:

---
