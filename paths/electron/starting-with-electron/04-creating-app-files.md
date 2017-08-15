---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Create your App's Files
permalink: /electron/create-an-app/create-your-apps-files/
next-page: /electron/create-an-app/run-your-first-electron-app/
facilitator: false
sidebar:
  nav: "create-an-app-in-electron"
main-content: |

  Since we used a boilerplate, the most important files are already there. These files are:

  - `package.json`
  - `src/index.html`
  - `src/index.js`

  We're going to be using other CSS and Javascript for our project, so let's add those files now.

  ![gif of following the directions below](<% SITEURL %>/<% BASEURL %>/images/gifs/electron/electron1-create-files.gif)

  1. Create a new file in the `src` directory named `style.css`.
  1. Create a new file in the `src` directory named `script.js`.

  It's OK that these are empty now, we'll add more later. Now, link those files to the main `index.html` by adding the following lines of code to `index.html`:

  1. Add the following code on a new line after the existing `<title></title>` tags.

          <link rel=stylesheet type="text/css" href="./style.css">
  1. Add the following code on a new line directly above `</body>`.

          <script type="text/javascript" src="script.js"></script>


show-me-how:
tell-me-why:

---
