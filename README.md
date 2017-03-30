![servicesbanner](https://cloud.githubusercontent.com/assets/13326548/21035994/ad40c19c-bd77-11e6-97fa-78b068050c05.jpg)

[![Build Status](https://travis-ci.org/github/training-kit.svg?branch=master)](https://travis-ci.org/github/training-kit)

# GitHub Training Kit
### Home of GitHub's On-Demand training

This repository contains the completely open source on-demand training hosted at https://services.github.com/on-demand/. These materials are provided under a [_Creative Commons License_ license](https://github.com/github/training-kit/blob/master/LICENSE).

## We :heart: Contributors Like You!

**We’re eager to work with you**, our user community to improve these materials and develop new ones. Here's how you can help:

- **You spotted a mistake:** please feel free to fork the repository and submit a change via Pull Request (not sure how to do that, [we have a course for you](https://services.github.com/on-demand)).
- **You have an idea to make it better:** we :heart: new ideas! We invite you to open a new [Issue](https://github.com/github/training-kit/issues) if you want to talk about it, or you can [fork this repository](https://help.github.com/articles/working-with-forks/) and submit your idea via a Pull Request.
- **You just want to help:** check out the [open issues](https://github.com/github/training-kit/issues) for projects you can tackle, review an [open pull request](https://github.com/github/training-kit/pulls), or check out [the project ROADMAP](https://github.com/github/training-kit/projects/1).

For more information on contributing to this repository, check out our [CONTRIBUTING guide](https://github.com/github/training-kit/blob/master/CONTRIBUTING.md).

## :world_map: Finding Your Way

This repository contains three primary resources:

- Our current [on-demand courses](https://services.github.com/on-demand/) can be found in the [paths directory](/paths)
- The translations of our popular [Git Cheat Sheets](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf) can be found in the [downloads directory](/downloads). We're always looking for more. _P.S._ Right now the PDF generation is a manual process so please mention @github/services-training for assistance in getting your translation moved to the PDF.
- The recommended [Training Path](https://services.github.com/on-demand/path/) can be found [here](/self-study.md).

## Our Content Philosophy

We are eager to create materials that are easy to use and follow! To that end, here are a few guidelines we ask you to keep in mind:

- We focus on providing clear, step-by-step instructions for completing an activity, giving the learner the opportunity to study the concept in greater detail with the Tell Me Why feature.
- We focus on minimalism.

## Projects Used in Training-Kit
- We use [Jekyll](https://jekyllrb.com/) and [Markdown](https://guides.github.com/features/mastering-markdown/).
- The theme for the on-demand training is [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) and has some [amazing documentation](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/).
- The corner badge of an Octocat is from [tholman.com](http://tholman.com/github-corners/)

## Building and Packaging

#### Building and Testing Locally

When you are ready to test your changes, you will want to build the repository locally. This is fully automated through a series of shell scripts based [the scripts to rule them all](https://github.com/github/scripts-to-rule-them-all)!

To perform a build of the materials perform the following:

1. Run `script/setup`
1. Run `script/server`.
    - When successful, the script will initiate a local server at `http://127.0.0.1:4000/on-demand`.
1. Simply paste that into your favorite web-browser and you will be ready to test.

#### Packaging for Viewing Behind Your Firewall

If you'd like to have a copy of the files to be served from a web server inside of your firewall, start by running `script/package`.

1. Run `script/package` to create a release tarball. This will be in the format `release-XXXXXXX.tgz` for you to take wherever you want.
2. To test this looks okay, create some folders `mkdir -p test_site/kit`.
3. Untar the release, `tar -xzf release-XXXXXXX.tgz -C test_site/kit`.
4. Switch into the test_site directory, `cd test_site`.
5. View the site with `python -m SimpleHTTPServer`. _Note: Some servers are obviously more advanced than others and can handle redirects, smart recognition of `.html` files, etc_

## Licenses

Site content is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). CC-BY-4.0 gives you permission to use content for almost any purpose but does not grant you any trademark permissions, so long as you note the license and give credit, such as follows:

> Content based on
> <a href="https://services.github.com/on-demand/">services.github.com/on-demand</a>
> used under the
> <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>
> license.</a>

Code used to build and test the site as well as code samples on the site, if any, are licensed under [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/legalcode). CC0 waives all copyright restrictions but does not grant you any trademark permissions.

This means you can use the content and code in this repository except for GitHub trademarks in your own projects.

When you contribute to this repository you are doing so under the above licenses.
