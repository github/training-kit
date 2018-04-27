---
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Make Local Changes With Git
permalink: /github-cli/make-local-changes-git
next-page: /github-cli/add-commits-git
facilitator: false
sidebar:
  nav: "github-cli"
main-content: |
  It's time to create the home page for your website.

  ![gif of following the directions below](../images/gifs/github-cli/local-files.gif)

  The next steps are determined by if you used a GitHub Pages theme or decided to just enable GitHub Pages on your repository.

  <details markdown="1">
    <summary>I am using a GitHub Pages theme</summary>

    1. Open the file named `README.md`.
    1. Remove the template text that was added to `README.md` when you selected your theme.
    1. In `README.md`, include at least the following two lines. Bonus points for including more information.

           # Hello World!

           My name is <GITHUB-USERNAME>

    1. Save your changes and close the text editor.
  </details>

  <details markdown="1">
    <summary>I am not using a GitHub Pages theme</summary>

    1. Create a new file named `index.html`.
    1. In `index.html`, include at least the following two lines. Bonus points for including more information, or using [Jekyll Themes](http://jekyllthemes.org/) to create a more robust site.

           <h1> Hello World! </h1>

           <p> My name is <GITHUB-USERNAME> </p>

    1. Save your file inside your repository folder, and close the text editor.
  </details>

show-me-how:
tell-me-why:
  includes:
    - tell-me-why/create-file-locally.md
---
