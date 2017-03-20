---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Configure Other Editors
permalink: /windows/configure-editors
next-page: /windows/visual-studio
sidebar:
  nav: "windows"
main-content: |
  If you don't want to use VI to craft your commit messages, deal with `rebase`s, or other aspects of Git, you are in luck. Changing your default editor is pretty simple, just following the instructions below:

  ## Changing `core.editor`
  To change the default editor that git uses, you can use the `git config core.editor` setting. Every text editor is assigned to the `core.editor` setting differently, but thankfully there is a [GitHub Help](https://help.github.com/articles/associating-text-editors-with-git/) article about how to associate a specific editor as your default editor. Using the [Atom](https://atom.io/) text editor as an example it would look something like this:

  1. Make sure your terminal application is closed.
  1. Install [Atom](https://atom.io/).
  1. Enter the following in your terminal application: `git config --global core.editor "atom --wait"`.

  In some instances, you will need to use the installation path of Atom when setting the config settings.   

tell-me-why: |
  ## Why --global?

  Git allows you to set configuration options at three different levels.

    - `--system` These are system-wide configurations. They apply to all users on this computer.
    - `--global` These are the user level configurations. They only apply to your user account and will be applied to every repository you create or clone under your account.
    - `--local` - These are the repository level configurations. They only apply to the specific repository where they are set.

  The default value for git config is `--local`. `--local` has precedence so setting something at the local level will override settings at global or system level.
  ![](/on-demand/images/config-levels.jpg){: .align-center}
---
