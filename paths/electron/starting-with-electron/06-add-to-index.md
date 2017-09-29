---
layout: simple-class
help: https://github.com/githubschool/on-demand-electron-app/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
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

  On Codepen, you can see there are three main sections of code; `html`, `css`, and `js`. These will map out to be our `src/index.html`, `src/style.css`, and `src/renderer.js`.

  _Note: This Codepen works for our demo, but feel free to use any Codepen that you like if you want to try an extension exercise on your own! You'll need to be careful of any that use dependencies, though. In fact, we re-wrote this exercise to use vanilla JS instead of using jQuery for stability and less steps._

  ![gif of following the directions below](<% SITEURL %><% BASEURL %>/images/gifs/electron/electron1-add-index.gif)

  1. Copy the code from the `html` tab on Codepen into the `src/index.html` file locally. Paste the code so it replaces the existing text ("Well hey there!!!") between `<body>` and `</body>`.
  1. Save and commit your changes.
  1. Start the app again by typing `npm start`. At this point, you should only see text without graphics or functionality.
  1. Quit the app by pressing `Ctrl` + `C` in your Command Line Interface.

  See [this commit](https://github.com/githubschool/on-demand-electron-app/commit/ef39ab6714fe755f646f2b855bdc83b4830b0921) as an example of what to take away and what to add in this step.

  > If you don't understand everything in the `.html` file, that's okay. Remember the resources listed [at the beginning of the course](./#software-skills), and know you can always go back and learn more!

show-me-how:
tell-me-why:

---
