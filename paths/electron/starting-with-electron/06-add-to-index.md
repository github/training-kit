---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Add your index.html
permalink: /electron/create-an-app/add-your-index-html/
next-page: /electron/create-an-app/add-css/
facilitator: false
sidebar:
  nav: "create-an-app-in-electron"
main-content: |

  For our app, we are going to build a [memory game](https://en.wikipedia.org/wiki/Concentration_(game)). You can find the code for the web application [here on Codepen](https://codepen.io/githubteacher/pen/brRvVz).

  On Codepen, you can see there are three main sections of code; `html`, `css`, and `js`. These will map out to be our `src/index.html`, `src/style.css`, and `src/script.js`.

  _Note: This Codepen works for our demo, but feel free to use any Codepen that you like if you want to try an extension exercise on your own! You'll need to be careful of any that use dependencies, though. In fact, we re-wrote this exercise to use vanilla JS instead of using jQuery for stability and less steps._
  
  ![gif of following the directions below](../../images/gifs/electron/electron1-add-index.gif)

  1. Copy the code from the `html` tab on Codepen into the `src/index.html` file locally. Paste the code so it replaces the existing text ("Well hey there!!!") between `<body>` and `</body>`.
  1. Save and commit your changes.
  1. Start the app again by typing `electron-forge start`. At this point, you should only see text without graphics or functionality.
  1. Quit the app by pressing `Ctrl` + `C` in your Command Line Interface.

  > If you don't understand everything in the `.html` file, that's okay. Remember the resources listed [at the beginning of the course](./#software-skills), and know you can always go back and learn more!

show-me-how:
tell-me-why:

---
