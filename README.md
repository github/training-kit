# GitHub Training Materials

This is the official courseware for the [GitHub Training Team](http://training.github.com). This repository provides open source outlines, slides, and cheat sheets for teaching GitHub Classes under the [_CC BY 3.0_ license](http://creativecommons.org/licenses/by/3.0/).

We know that part of effectively sharing GitHub and Git with the world goes beyond our team's course offerings. We are excited to provide you with training materials that you can also use to teach these same concepts at your company, for a user group, or even at a conference.

## Download

We know that many of the users of this repository are just focused on getting the materials and teaching from them.  We've made that easy.

1. You can view and teach from the materials, hosted on GitHub, at http://training.github.com/materials
2. You can download an offline copy of the materials via the green button at https://github.com/github/training-materials/releases


## Contribute

We’re eager to have your help in improving these materials. If you have an idea for a change, start by opening a new [Issue](https://github.com/github/training-materials/issues) so we can discuss and help guide your contribution to the right location. If you have corrections or materials contributions, we'd be glad to receive them via a [Pull Request](https://help.github.com/articles/using-pull-requests). For materials contributions, we ask you to share in our mindset of minimalism.  We aim to keep the outlines, slides, and cheat sheets as synchronized triads.

The educational content exists in three top level directories:

1. [`outlines`](https://github.com/github/training-materials/tree/master/outlines)
2. [`slides`](https://github.com/github/training-materials/tree/master/slides)
3. [`cheatsheets`](https://github.com/github/training-materials/tree/master/cheatsheets)


## File Format

The majority of the site materials are written in [Markdown](http://whatismarkdown.com), a [lightweight markup language](http://en.wikipedia.org/wiki/Lightweight_markup_language) supported in the GitHub web application user interface. There is a syntax guide to the original [Markdown format](http://daringfireball.net/projects/markdown/syntax) and also [GitHub Flavored Markdown](http://github.github.com/github-flavored-markdown/).

## Build

The build of this repository is fully automated through several shell scripts. To perform a build of the materials identical to that of our continuous integration server, from the top directory of this project, run `./_buildscripts/cibuild` and then inspect the output in the `_site` directory.

The `_buildscripts/makerelease` script produces a zip bundle for offline use of these materials. Pre-built releases are available at https://github.com/github/training-materials/releases
