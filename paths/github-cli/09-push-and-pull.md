---
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Open a Pull Request on GitHub
permalink: /github-cli/open-pull-request-github
next-page: /github-cli/merge-pull-request-github
facilitator: false
sidebar:
  nav: "github-cli"
main-content: |

  Now that you have made some local commits, it is time to send your changes to the remote copy of your repository on GitHub.com and create a Pull Request.

  ![gif of following the directions below](../images/gifs/github-cli/push-and-pull.gif)

  1. Push your commits to the remote, and set a tracking branch. Type:

          git push -u origin <BRANCH-NAME>

  1. Enter your GitHub username and password, if prompted to do so.
  1. Create a Pull Request on GitHub.
  1. Fill out the body of the Pull Request with information about the changes you're introducing.

refresh:
  includes:
    - refresh/github-CLI/create-pr.md
show-me-how:
tell-me-why: |
  ## Pushing Changes

  1. :white_check_mark: Create a branch
  1. :white_check_mark: Add commits
  1. **Open a Pull Request** :arrow_left: _(This section deals with this step.)_
  1. Collaborate, and make more commits
  1. Merge the Pull Request

  We just created a branch locally and added commits. The remote repository that's hosted on GitHub.com isn't aware of these changes automatically.

  In fact, there are only 4 network commands that actually cause the **local** or **remote** repositories to update.

  - `git clone`
  - `git fetch`
  - `git pull`
  - `git push`

  This won't happen automatically, so when we are ready to open a pull request, we need to push up our branch. The command we will use is `git push -u origin <BRANCH-NAME>`.

  The syntax is a little complicated here. Let's break it down.

  `git push` is the root part of the command. It tells Git that you want to update the remote branch with your current, local branch.

  `-u` is short for `--set-upstream`. This sets a relationship between the branch on the remote and your branch locally, so that in the future you only need to type `git push`.

  `origin` tells Git _where_ you want to push. `origin` is just a shortcut for the URL of the repository. You can type `git remote -v` to see what it is pointing to.

  `<BRANCH-NAME>` tells Git to create a branch on the remote with the same name as your local branch. You should replace this with your branch's name.

  The good news is, you only need to do this long command once. If you have pushed this branch before or it already exists on the remote, you can simply type `git push`.

---
