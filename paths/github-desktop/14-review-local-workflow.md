---
lang: en
ref: gh-desktop-14
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Review the Local GitHub Flow
permalink: /github-desktop/review-github-flow
next-page: /github-desktop/push-pull-request-github-desktop
facilitator: false
sidebar:
  nav: "github-desktop-nav"
main-content: |

  Now that you are a collaborator, let's use the local workflow we just learned to make changes to this repository.

  ![gif of following the directions below](../images/gifs/github-desktop/review-local-workflow.gif)

  1. Start from the Code tab of the [class repository on GitHub.com](https://github.com/githubschool/on-demand-github-pages/).
  1. Click on `Clone or Download`.
  1. Click `Open in Desktop`. This will open GitHub Desktop.
  1. Confirm the `Local Path` as the place you'd like to store the repository locally.
  1. Create a branch by clicking "Branch > New Branch" and label it with your username, something like `yourUsername-add-page`.
  1. In your favorite text editor, add a file to the `_pages` directory. Include your GitHub handle in the filename: `username.yaml`.
  1. Enter the following content into your file:

         ---
         githubHandle: YOUR-USERNAME
         pageUrl: YOUR-HANDLE.github.io
         timestamp: TODAYS-DATE-YYYY-MM-DD
         ---

  1. Ensure you've replaced `YOUR-USERNAME` with your GitHub Username, `YOUR-SITES-URL` with the URL to your site (which should be `YOUR-USERNAME.github.io`), and `TODAYS-DATE-YYYY-MM-DD` with today's date, using a 4-digit year, 2-digit month, and 2-digit day. For example, if today is October 17, 2016, you would enter: `2016-10-17`.
  1. On GitHub Desktop, within the `Changes` side bar, ensure your file is checked.
  1. On GitHub Desktop, enter a commit message describing the change you're introducing to the project.
  1. On GitHub Desktop, click the `Commit to YOUR-BRANCH` button -- ensure `YOUR-BRANCH` includes your username.

show-me-how:
tell-me-why: |
  ## Reviewing the GitHub Flow

  Remember, the 5 steps of [GitHub Flow](https://guides.github.com/introduction/flow/) are:

  1. **Create a branch** :arrow_left: _(This section deals with this step.)_
  2. **Make commits** :arrow_left: _(And this one.)_
  3. Open a Pull Request
  4. Collaborate, and make more commits
  5. Merge the Pull Request

  Hopefully this looks familiar since you've followed this workflow (at least) twice. Now you will follow it once more to add your page to our directory.
---
