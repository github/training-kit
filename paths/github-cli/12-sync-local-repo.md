---
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Git Push & Git Pull
permalink: /github-cli/git-push-git-pull
next-page: /github-cli/add-github-pages-site-showcase
facilitator: false
sidebar:
  nav: "github-cli"
main-content: |

  After you merge your Pull Request, you will need to update your local copy of the repository.

  ![gif of following the directions below](../images/gifs/github-cli/keep-things-in-sync.gif)

  1. In your command line, type:

          git checkout master

  2. Type:

          git pull

show-me-how:
tell-me-why: |
  ## Keeping the Local Repository in Sync

  As we discussed previously, Git doesn't require an internet connection which means it doesn't communicate with remote repositories unless explicitly instructed to do so.

  When you merge your Pull Request on GitHub.com, the changes you made locally are merged into the `master` branch on the remote repository on GitHub.

  However, you won't automatically see those changes reflected in your local copy until you do a `git pull`.

  ## Git Pull

  Frequently, collaborators will make changes to our files during the Pull Request process. Before we can go on, we will need to update our local copies of the files.

  Similar to how we use `push` to send our changes to the remote, we use `pull` to retrieve changes from the remote. When we pull the files from the remote, Git downloads a copy of the new commits that have been added to the branch since our last pull and then attempts to merge them into our local branch.

  You should pull your repository regularly to ensure you are always working with the most recent copies of the files in the repository.

---
