![servicesbanner](https://cloud.githubusercontent.com/assets/13326548/21035994/ad40c19c-bd77-11e6-97fa-78b068050c05.jpg)

[![Build Status](https://travis-ci.org/github/training-kit.svg?branch=master)](https://travis-ci.org/github/training-kit)

# GitHub Training Kit
### Home of GitHub's On-Demand training

This repository contains the completely open source on-demand training hosted at https://services.github.com/on-demand/. These materials are provided under a [_Creative Commons License_ license](https://github.com/github/training-kit/blob/master/LICENSE).

## We :heart: Contributors Like You!

**We’re eager to work with you**, our user community to improve these materials and develop new ones. Please check out our [CONTRIBUTING guide](https://github.com/github/training-kit/blob/master/CONTRIBUTING.md) for more information on getting started.

## Projects Used in Training-Kit

- We use [Jekyll](https://jekyllrb.com/) and [Markdown](https://guides.github.com/features/mastering-markdown/).
- Our content is styled using the [Primer CSS toolkit](https://github.com/primer/primer-css).
- The corner badge of an Octocat is from [tholman.com](http://tholman.com/github-corners/)

## Packaging for Viewing Behind Your Firewall

If you'd like to have a copy of the files to be served from a web server inside of your firewall, start by running `script/package`.

1. Run `script/package` to create a release tarball. This will be in the format `release-XXXXXXX.tgz` for you to take wherever you want.
2. To test this looks okay, create some folders `mkdir -p test_site/kit`.
3. Untar the release, `tar -xzf release-XXXXXXX.tgz -C test_site/kit`.
4. Switch into the test_site directory, `cd test_site`.
5. View the site with `python -m SimpleHTTPServer`. _Note: Some servers are obviously more advanced than others and can handle redirects, smart recognition of `.html` files, etc_

## Licenses

Site content is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). CC-BY-4.0 gives you permission to use content for almost any purpose but does not grant you any trademark permissions, so long as you note the license and give credit, such as follows:

> Content based on
> <a href="https://services.github.com/on-demand/">services.github.com/on-demand/</a>
> used under the
> <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>
> license.</a>

Code used to build and test the site as well as code samples on the site, if any, are licensed under [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/legalcode). CC0 waives all copyright restrictions but does not grant you any trademark permissions.

This means you can use the content and code in this repository except for GitHub trademarks in your own projects.

When you contribute to this repository you are doing so under the above licenses.
