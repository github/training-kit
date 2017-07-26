---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Electron Boilerplate
permalink: /electron/starting-with-electron/boilerplate
next-page: /electron/starting-with-electron/init-git-repository
facilitator: false
sidebar:
  nav: "electron-getting-starting"
main-content: |

  Right now, our directory has no files. We want it to be set up as a base electron boilerplate. To do that, we need to go through a few steps.

  Important files to watch out for:
  - package.json

  1. Find the terminal and create a directory for the project: `mkdir electron-app`
  1. CD into that app: `cd electron-app`
  1. Walk through the built-in process with npm to create a `package.json` for the project. To do this, type `npm init` and follow along the guided questions in the terminal. If you aren't sure what to type, just press enter. For this example, you can use these responses to fill in the form:

                  name: electron-app
                  version: (press Enter, leave default)
                  description: My first electron app
                  entry point: (press Enter, leave default)
                  test command: (press Enter, leave default)
                  git repository: (press Enter, leave default)
                  keywords: (press Enter, leave default)
                  author: Your Name
                  license: (press Enter, leave default)

        Once it's done, hit Enter to signal it's all OK.

    1. Now, we'll use NPM to get the rest of the important starting files: `npm install electron-`....? Is there a NPM module to just get a boilerplate started?

  # TODO:
  - The user should have all boilerplate files out created, filled out, and saved by the end of this page. (package.json and main.js)

show-me-how:
tell-me-why:

---
