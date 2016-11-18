# GitHub Training Kit

This is the official courseware for the [GitHub Training Team](http://training.github.com). This repository provides open source materials and slides for teaching GitHub Classes under the [_CC BY 4.0_ license](http://creativecommons.org/licenses/by/4.0/).

We know that part of effectively sharing GitHub and Git with the world goes beyond our team's course offerings. We are pleased to provide you with this training kit that you can use to teach these same concepts at your company, for a user group, or at a conference.

## Download

We know that many of the users of this repository are just focused on getting the materials and teaching from them.  We've made that easy.

1. You can view and teach from the kit, hosted on GitHub, at https://services.github.com/kit/.
2. You can download the source files [here](https://github.com/github/training-kit/archive/master.zip).

#### Packaging for Viewing Behind Your Firewall

Sometimes you can't download the repository at work because of firewall rules, but you'd like to have a copy of the files that would be able to be served from a web server inside of these firewall rules. To do so, we need to use `script/package`.

1. Run `script/package` to create a release tarball. This will be in the format `release-XXXXXXX.tgz` for you to take wherever you want.
2. To test this looks okay, create some folders `mkdir -p test_site/kit`.
3. Untar the release, `tar -xzf release-XXXXXXX.tgz -C test_site/kit`.
4. Switch into the test_site directory, `cd test_site`.
5. View the site with `python -m SimpleHTTPServer`. _Note: Some servers are obviously more advanced than others and can handle redirects, smart recognition of `.html` files, etc_

## Contribute

We’re eager to have your help in improving this kit. If you have an idea for a change, start by opening a new [Issue](https://github.com/github/training-kit/issues) so we can discuss and help guide your contribution to the right location. If you have corrections or kit contributions, we'd be glad to receive them via a [Pull Request](https://help.github.com/articles/using-pull-requests). For kit contributions, we ask you to share in our mindset of minimalism.

### Class Material

[GitHub for Developers](https://services.github.com/kit/courses/github-for-developers.html) and [GitHub for Everyone](https://services.github.com/kit/courses/github-for-everyone.html) are the two class types taught by the GitHub Training team. Their content is composed of several modules listed in the [`_modules/`](https://github.com/github/training-kit/tree/master/_modules/) subdirectory.

### Cheat Sheets

The Git and GitHub Cheat Sheets are located within the [`downloads/`](https://github.com/github/training-kit/tree/master/downloads/) directory. There are some translations available and we're always looking for more. If you are looking to get a `.pdf` generated for the html version of a cheatsheet, please start an issue and @mention [@brntbeer](https://github.com/brntbeer) or [@crichid](https://github.com/crichid) and they will see to the request.

### Legacy Class Material

This repository also contains our legacy course content. You can find these in the top-level directories:
- [`foundations/`](https://github.com/github/training-kit/tree/master/foundations)
- [`intermediate/`](https://github.com/github/training-kit/tree/master/intermediate)
- [`advanced/`](https://github.com/github/training-kit/tree/master/advanced)


## File Format

The class materials are written in [Markdown](http://whatismarkdown.com), a [lightweight markup language](http://en.wikipedia.org/wiki/Lightweight_markup_language) supported in the GitHub web application user interface. There is a syntax guide to the original [Markdown format](http://daringfireball.net/projects/markdown/syntax) and also [GitHub Flavored Markdown](http://github.github.com/github-flavored-markdown/).

The class material content possess two specialized uses of Markdown for slide-like rendering and formatting:

- Full-screen slides are preceded with a `---` and followed by `---`
- Step-by-step *lab* sections are wrapped with `{% capture lab %}` and `{% endcapture %}{% include lab %}`

 This repository is based on [Hydeslides](https://github.com/jordanmccullough/HydeSlides). That project offers additional information on the file and directory structure.

## Build

The build of this repository is fully automated through several shell scripts. To perform a build of the materials identical to that of our continuous integration server, from the top directory of this project, run `script/cibuild` and then inspect the output in the `_site` directory.

## Theme Documentation

The theme for the on-demand training is [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) and has some [amazing documentation](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/), particularly useful is:
- [Styling buttons, notices, text and image alignment](https://mmistakes.github.io/minimal-mistakes/docs/utility-classes/)

## Licenses

Site content is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). CC-BY-4.0 gives you permission to use content for almost any purpose but does not grant you any trademark permissions, so long as you note the license and give credit, such as follows:

> Content based on
> <a href="https://github.com/github/on-demand">github.com/github/on-demand</a>
> used under the
> <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>
> license.</a>

Code used to build and test the site as well as code samples on the site, if any, are licensed under [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/legalcode). CC0 waives all copyright restrictions but does not grant you any trademark permissions.

This means you can use the content and code in this repository except for GitHub trademarks in your own projects.

When you contribute to this repository you are doing so under the above licenses.
