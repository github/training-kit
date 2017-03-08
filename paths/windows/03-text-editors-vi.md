---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Explore the GitHub Repository
permalink: /windows/01
next-page: /windows/02
sidebar:
  nav: "windows"
main-content: |
  If you haven't defined a `core.editor` for git to use, it defaults to using VI for commit messages, interactive rebases, and other commands that require user input. Before we identify how to setup a `core.editor` you might need the following information:

  ### How the *$#@& do I get out of VI?
  First, don't worry, everyone gets stuck in VI. Second, it is _really_ easy to get out of VI using the following:
  1. Press the `esc` key.
  1. Enter `:wq` to save (or `w`rite) your commit message, or `:q` to `q`uit without saving your commit message.

  You have successfully gotten out of VI, nicely done.

  ### Changing `core.editor`
  To change the default editor that git uses, you can use the `git config core.editor` setting. Every text editor is assigned to the `core.editor` setting differently, but thankfully there is a [GitHub Help](https://help.github.com/articles/associating-text-editors-with-git/) article about how to associate a specific editor as your default editor. Using the [Atom](www.atom.io) text editor as an example it would look something like this:

  1. Install Atom
  1. Enter the following in your terminal application: `git config --global core.editor "atom --wait"`
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
