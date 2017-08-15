---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Run Your First Electron App
permalink: /electron/starting-with-electron/running-the-app
next-page: /electron/starting-with-electron/add-to-html
facilitator: false
sidebar:
  nav: "electron-getting-started"
main-content: |

  Now, let's spin up the application locally.

  1. Type `electron-forge start` and press enter.

  Your app should open up. Dev Tools might also be open on the right side, by default. Quit the app by pressing `Ctrl` + `C` in your Command Line Interface.


show-me-how:
tell-me-why: |
  ### Dev Tools
  You may be familiar with [Chrome Developer Tools](https://developer.chrome.com/devtools) if you've ever built a web page. If you're not, they're a set of tools that allow you to see behind the scenes of what a browser displays, giving you visibility into the HTML, CSS, and Javascript that makes up a web application alongside a number of performance analysis tools.

  When working in Electron, Dev tools is also available to you. Open it at any time by selecting "View" from the top level drop down menu of the application, then clicking "Toggle Developer Tools", or use the shortcuts described in the official documentation.

---
