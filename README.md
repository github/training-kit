[![Build Status](https://travis-ci.org/github/training-kit.svg?branch=master)](https://travis-ci.org/github/training-kit)

# GitHub Training Kit: Cheatsheets

## We :heart: Contributors Like You!

**We’re eager to work with you**, our user community, to improve these materials and develop new ones. Please check out our [CONTRIBUTING guide](https://github.com/github/training-kit/blob/master/CONTRIBUTING.md) for more information on getting started.

## Looking for a resource that was once housed in training-kit?

This repository currently contains the Git and GitHub Cheatsheets. If you're looking for a project that used to be housed here, such as On-Demand training, reading lists, videos, and book recommendations, see [this commit](https://github.com/github/training-kit/tree/4fbf180e980ef973ba4cc4b8ef3d5f278ddc8c08) in the repository's history.

## Projects Used in Training-Kit

- We use [Jekyll](https://jekyllrb.com/) and [Markdown](https://guides.github.com/features/mastering-markdown/).
- Our content is styled using the [Primer CSS toolkit](https://github.com/primer/primer-css).

## Packaging for Viewing Behind Your Firewall

If you'd like to have a copy of the files to be served from a web server inside of your firewall, start by running `script/package`.

1. Run `script/package` to create a release tarball. This will be in the format `release-XXXXXXX.tgz` for you to take wherever you want.
2. To test this looks okay, create some folders `mkdir -p test_site/kit`.
3. Untar the release, `tar -xzf release-XXXXXXX.tgz -C test_site/kit`.
4. Switch into the test_site directory, `cd test_site`.
5. View the site:
    - For python version 2.x, run: `python -m SimpleHTTPServer`
    - For python version 3.x, run: `python -m http.server`
    - _Note: Some servers are more advanced than others and can handle redirects, smart recognition of `.html` files, etc_

Site content is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). CC-BY-4.0 gives you permission to use the content for almost any purpose but does not grant you any trademark permissions, so long as you note the license and give credit, such as follows:

> Content based on
> <a href="https://github.github.com/training-kit/">github.github.com/training-kit/</a>
> used under the
> <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>
> license.</a>

Code used to build and test the site as well as code samples on the site, if any, are licensed under [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/legalcode). CC0 waives all copyright restrictions but does not grant you any trademark permissions.

This means you can use the content and code in this repository except for GitHub trademarks in your projects.

When you contribute to this repository you are doing so under the above licenses.
