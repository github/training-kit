---
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
eader:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Add Local Commits With Git
permalink: /github-cli/add-commits-git
next-page: /github-cli/open-pull-request-github
facilitator: false
sidebar:
  nav: "github-cli"
main-content: |

  After you have finished making your changes, it is time to commit them.

  ![gif of following the directions below](../images/gifs/github-cli/2-step-commit.gif)

  1. Determine your file's status. Remember that `git status` allows us to see the status of the files on our branch at any given time. Your file is listed under the heading `Untracked files`.

          git status

  1. Add your file to the *staging area* so it's prepared to become part of the next commit.

          git add <FILE-NAME>

  1. See your file's current status. Your file is now listed under the heading `Changes to be committed`. This tells us that the file is in the staging area. It also indicates this is a new file.

          git status

  1. Commit your file. A *commit* tells Git to collect all of the files in the staging area and store them to version control as a single unit of work. Git will open your default text editor where you can enter the commit message.

          git commit

  1. Type the commit message, save and quit your editor.

      > - The default text editor associated with Git is vi in most cases, which requires that you press the `Esc` key then type `:wq` to save and quit after entering your commit message.
      > - Alternatively, you can bypass vi altogether and enter your commit message inline with `git commit -m "your message"`

  1. See the history of commits:

          git log

show-me-how:
tell-me-why:
  includes:
    - ghflow-steps/02-add-commits.md
    - tell-me-why/two-stage-commit.md

---
