---
lang: en
ref: gh-desktop-07
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Make Local Changes With GitHub Desktop
permalink: /github-desktop/make-changes-github-desktop
next-page: /github-desktop/add-commits-github-desktop
facilitator: false
sidebar:
  nav: "github-desktop-nav"
main-content: |

  It's time to create the home page for your website.

  ![gif of following the directions below](../images/gifs/github-desktop/add-commits-locally.gif)

  1. Make sure you are checked out to the new branch you just created. You change branches by clicking the **Current Branch** button at the top of the application, then selecting a branch.
  1. Open your preferred text editor.

  The next steps are determined by if you used a GitHub Pages theme or decided to just enable GitHub Pages on your repository.

  ### I am using a GitHub Pages theme

  1. Open the file named `README.md`.
  1. Remove the template text that was added to the `README.md` when you selected your theme.
  1. In the `README.md` file include at least the following two lines: `# Hello World!` and `My name is GITHUB_USERNAME`. Bonus points for including more information.
  1. When you are finished, save your changes and close the text editor.

  ### I am not using a GitHub Pages theme

  1. Create a new file named `index.html`.
  1. In your `index.html` file, include at least the following two lines: `<h1> Hello World! </h1>` and `<p> My name is GITHUB_USERNAME </p>`. Bonus points for including more information, or using [Jekyll Themes](http://jekyllthemes.org/) to create a more robust site.
  1. When you are finished, save your file inside your repository folder, and close the text editor.

show-me-how:
tell-me-why:
  includes:
    - tell-me-why/create-file-locally.md

---
