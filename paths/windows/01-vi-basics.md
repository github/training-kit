---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: vi Basics
permalink: /windows/vi-basics
next-page: /windows/configure-editors
sidebar:
  nav: "windows"
main-content: |
  If you haven't defined a `core.editor` for git to use, it defaults to using [vi](https://en.wikipedia.org/wiki/Vi) for commit messages, interactive rebases, and other commands that require user input. Before we identify how to setup a `core.editor` you might need the following information:

  ### How the *$#@& do I get out of VI?
  First, don't worry, everyone gets stuck in VI. Second, it is _really_ easy to get out of VI using the following:

  ### Saving the Commit
  1. Press the `esc` key.
  1. Enter `:wq` to save (or `w`rite) your commit message, or `:q` to `q`uit without saving your commit message.

  ### Discarding the Commit
  1. Press the `esc` key.
  1. Enter, `:q!`. This will discard the commit without discarding your changes. If you want to double check that your changes still exist, enter `git status` and your changes will still be displayed.

  You have successfully gotten out of VI, nicely done.

show-me-how: "images/gifs/intro/example.gif"
tell-me-why: |
  ## Why --global?

  Git allows you to set configuration options at three different levels.

    - `--system` These are system-wide configurations. They apply to all users on this computer.
    - `--global` These are the user level configurations. They only apply to your user account and will be applied to every repository you create or clone under your account.
    - `--local` - These are the repository level configurations. They only apply to the specific repository where they are set.

  The default value for git config is `--local`. `--local` has precedence so setting something at the local level will override settings at global or system level.
  ![](/on-demand/images/config-levels.jpg){: .align-center}
---
