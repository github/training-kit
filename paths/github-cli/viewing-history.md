---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Viewing History With Git Log
permalink: /github-cli/98
next-page: /github-cli/99
facilitator: false
sidebar:
  nav: "github-cli"
main-content:
  includes:
    - activity/github-CLI/git-log.md
show-me-how: images/gifs/github-cli/viewing-history.gif
tell-me-why: |

  ## More About Git Log

  There are lots of ways to customize the output from the `git log` command. We will just explore a few, but you can find many more on the [git-scm.com](https://git-scm.com/docs/git-log) website.

  #### `--oneline`

  - Git log has a great deal of information, but it is a little verbose. If you would like to see a condensed version, add the --oneline option.

  #### `--graph`

  - The log command has many options and you can actually string them together to create a view that is most helpful for your situation. For example, you can add an ASCII graph of the branch and merge history of our project by adding the option --graph.

  #### `--decorate`

  - If you would like more information about the branches and where HEAD is located, you can add the --decorate option.

  #### `--all`

  - If you also want to include un-merged branches, you should add the option --all.

  #### `--stat`

  - If you would like to see which files were involved in each commit, use the --stat option.

  #### `--patch`

  - If you would like to see the actual changes that were made, use --patch.

---
