---
layout: simple-class
help: https://github.com/githubschool/on-demand-electron-app/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Run Your First Electron App
permalink: /electron/create-an-app/run-your-first-electron-app/
next-page: /electron/create-an-app/add-your-index-html/
facilitator: false
sidebar:
  nav: "create-an-app-in-electron"
main-content: |

  Now, let's spin up the application locally.

  ![gif of following the directions below](<% SITEURL %><% BASEURL %>/images/gifs/electron/electron1-run-app.gif)

  1. Type `npm start` and press enter.

  Your app should open up, successfully, with a string of text. Dev Tools will also be open on the right side, due to a setting that we added by default. Quit the app by pressing `Ctrl` + `C` in your Command Line Interface.


show-me-how:
tell-me-why: |
  ### Dev Tools
  You may be familiar with [Chrome Developer Tools](https://developer.chrome.com/devtools) if you've ever built a web page. If you're not, they're a set of tools that allow you to see behind the scenes of what a browser displays, giving you visibility into the HTML, CSS, and Javascript that makes up a web application alongside a number of performance analysis tools.

  When working in Electron, Dev tools is also available to you. Open it at any time by selecting "View" from the top level drop down menu of the application, then clicking "Toggle Developer Tools", or use the shortcuts described in the official documentation.

---
