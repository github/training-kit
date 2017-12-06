---
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Review the Local GitHub Flow in the Command Line
permalink: /github-cli/github-flow-cli
next-page: /github-cli/git-push-open-pull-request
facilitator: false
sidebar:
  nav: "github-cli"
main-content: |

  Now that you are a collaborator, use the local workflow we just learned to make changes to this repository. This exercise is a bit of a review, but if you need assistance with any of the required steps, more detailed directions are available in **I need a refresher** below! Good luck!

  ![gif of following the directions below](../images/gifs/github-cli/clone-class-repo.gif)

  1. Clone the repository to your local machine.
  1. Create a new branch in the cloned repository. Something like `yourUsername-add-page` is a perfect branch name.
  1. Checkout to your new branch.
  1. Create a file in the `_pages` directory titled: `<username>.yaml`. Replace `<username>` with your GitHub username.
  1. Enter the following content into your file:

         ---
         githubHandle: <YOUR-USERNAME>
         pageUrl: <YOUR-USERNAME>.github.io
         timestamp: <TODAYS-DATE-YYYY-MM-DD>
         ---

        > - Replace `<YOUR-USERNAME>` with your GitHub username.
        > - Replace `<YOUR-USERNAME>.github.io` with your web site's URL (leave out the `https`).
        > - Replace `<TODAYS-DATE-YYYY-MM-DD>` with today's date using a 4 digit year, 2 digit month, and 2 digit day format.

  1. Commit your changes.
  1. Ensure your work was committed.

          git status

show-me-how:
refresh:
   includes:
      - /refresh/github-CLI/local-review.md
tell-me-why: |
  ## Reviewing the GitHub Flow

  Now you will see all of the great pages that have been made by others, and share your page with the world in our class repository! To do that, we'll follow the same 5 steps of the GitHub workflow, but on the [class repository](https://github.com/githubschool/open-enrollment-classes-introduction-to-github).

  Remember, the 5 steps are:

  1. **Create a branch** :arrow_left: _(This section deals with this step.)_
  2. **Make commits** :arrow_left: _(And this one.)_
  3. Open a Pull Request
  4. Collaborate, and make more commits
  5. Merge the Pull Request

  You've followed this workflow twice so far; once in the [Introduction to GitHub](../intro-to-github/) course, and once in this course.
---
