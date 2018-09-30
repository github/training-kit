# Contributing to training-kit

:tada: Thank you for taking the time to contribute and for seeking out these instructions. We :heart: community contributions to these materials.

### Table of Contents

[Code of Conduct](#code-of-conduct)

[I just want to see the published resources!](https://services.github.com/on-demand/)

[What should I know before I contribute?](#what-should-i-know-before-i-contribute?)
- [The goal of these resources](#the-goal-of-these-resources)
- [Types of contributions we love](#types-of-contributions-we-love)

[How to contribute](#how-to-contribute)
- [Report a bug](#report-a-bug)
- [Translate existing resources](#translate-existing-resources)
- [Contribute a new resource or course](#contribute-something-new)
- [Not sure where to start?](#not-sure-where-to-start?)

[Step-by-step contribution guide](#step-by-step-contribution-guide)
- [Our content philosophy](#our-content-philosophy)
- [Content structure](#content-structure)
- [Writing new content](#writing-new-content)
- [Styling content](#styling-content)
- [Building and testing](#building-and-testing)

<hr>

## Code of Conduct

This project and everyone who participates in it is governed by the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [services@github.com](mailto:services@github.com).

<hr>

## What should I know before I get started?

### The goal of these resources

These materials are designed to help those new to Git, GitHub and software development as a whole. By using these resources, we hope users will:

- Feel welcome and become active contributors in the open source community
- Complete hands-on activities and receive immediate support from [Teacherbot](https://github.com/teacher-bot/teacherbot), members of the community, and [GitHub's Training team](community.md/#github-trainers)
- Learn best practices for using Git, GitHub and other GitHub supported projects such as Electron, Atom, etc
- Learn how to use the applications within GitHub's ecosystem to build better software

### Types of contributions we love

We're always looking for contributions to help improve these resources. This includes:

- Improving the existing classes and resources
- Translations of existing resources such as the [cheatsheets](/downloads/) into new languages
- Adding new classes or resources aligned with the [goals](#the-goal-of-these-resources)

<hr>

## How to contribute

### Report a bug

Oops, thanks for finding that! If you know how to fix it, please feel free to fork the repository and submit a change via Pull Request (Not sure how to do that? [We have a course for you](https://services.github.com/on-demand/)).

If you aren't sure how to fix it or just don't have time, we invite you to open a [new Issue](https://github.com/github/training-kit/issues/new). Please be sure to provide information so we can recreate the error.

### Translate existing resources

Several community members have been kind enough to translate the [Git Cheat Sheets](https://github.com/github/training-kit/tree/master/downloads) into various languages. At this time, we are only set up to serve the cheat sheets in various languages (but maybe you can help us change that :wink:) If you are planning to contribute a translation, please do the following:

- Fork this repository
- Create a new folder in the [downloads directory](https://github.com/github/training-kit/tree/master/downloads) using the standard abbreviation for the language you are providing.
- Copy the most recent [English version of the cheatsheet](https://github.com/github/training-kit/blob/master/downloads/github-git-cheat-sheet.md) to the folder you created.
- Complete the translation
- Add a link to the translated resource on [/resources/cheatsheets/index.html](https://github.com/github/training-kit/blob/master/resources/cheatsheets/index.html)
- Open a pull request against the `master` branch of this repository.
- Be sure to @ mention a couple of your friends who are native speakers and ask them to review the translation.
- Update your translation based on feedback from your friends.

When this process is complete, we will be happy to merge the completed document.

### Contribute something new

Whether you have an idea to make it better, or want to contribute a whole new course or resource ... we :heart: new ideas! We invite you to open a new [Issue](https://github.com/github/training-kit/issues/new) to talk about it before you invest too much time. Of course, if you want to experiment first, you can [fork this repository](https://help.github.com/articles/working-with-forks/) and submit your idea via a Pull Request.

When you are contributing something new, we ask you to be familiar with our content philosophy, the structure of the repository, and building [Jekyll](https://jekyllrb.com/) sites locally. See the sections below for more information.

### Not sure where to start?

If you just want to help out, but don't have a particular change in mind, check out the [open issues](https://github.com/github/training-kit/issues) for projects you can tackle, review an [open pull request](https://github.com/github/training-kit/pulls), or check out [the project ROADMAP](https://github.com/github/training-kit/projects/1).

<hr>

## Step-by-step contribution guide

### Our content philosophy

We are eager to create materials that are easy to use and follow! To that end, here are a few guidelines we ask you to keep in mind:

- We focus on providing friendly and clear, step-by-step instructions.
- Courses should include a project repository that allows each students to complete an activity.
- We focus on minimalism in our instructions, giving the learner the opportunity to study the concept in greater detail with the Tell Me Why feature.
- We appeal to multiple learning styles. Some learners like to read, some like to watch videos, and others just want a recipe.

### Content structure

This repository contains two major collections: [on-demand training courses](https://services.github.com/on-demand/) and listings of [our favorite resources](/resources). We help users navigate these collections sequentially with the [learning path](/resources/learning-path).

#### On-demand course structure

Adding an on-demand course requires you to do the following:

- Add a folder in the [paths directory](/paths) based on the course name
- Add the course pages in the new folder you created. For an example of a sequential course, check out the [Introduction to GitHub course](/paths/intro-to-github). For a non-sequential course, check out [Git Out of Trouble](/paths/git-trouble)
- Add the course to the `main` navigation in [_data/navigation.yml](_data/navigation.yml) and add your course navigation in a new section at the end of the files

### Writing new content

If you are contributing content, stay consistent with the existing courses by following these guidelines.

- Vocabulary is italicized to help learners identify their importance and help with cognition.
  - Example: A *query* is a request for specific information.
- Button names are bolded to indicate they should be clicked.
  - Example: Accept the filler text and click **Commit Changes**.
- Names of repositories, files, branches, variables, or user handles are wrapped in \`backticks\`.
  - Example: Initialize the repository with a `README.md` file.
- Code that the learner should type, copy, or execute should be in a fenced code block:
  - Example: To see the version of your Git installation, type:

          git --version
- Use given names for complicated concepts, and then explain them. After you've explained them once, use only the given name.
  - Example: Any Electron app has 2 types of processes: the *main process*, initialized by `package.json`, and a *renderer process* generated by each web page [...] Running `src/index.js` runs the app's main process.
- Use relevant descriptions of your links, and avoid "click here".
  - Example: On GitHub.com, [create a new repository](https://github.com/new).

### Styling content

This site uses GitHub's CSS toolkit called [Primer](https://github.com/primer/primer-css). It's easy to use, and if your contribution requires some design or front-end work you should check out the [Primer Docs](http://primercss.io/).

### Building and testing

When you are ready to test your changes, you will want to build the repository locally. This is fully automated through a series of shell scripts based [the scripts to rule them all](https://github.com/github/scripts-to-rule-them-all)!

To build of the materials do the following:

1. Run `script/setup`
1. Run `sass --watch assets/_scss/main.scss:assets/css/main.css` to compile the SCSS
1. Run `script/server`
    - When successful, the script will initiate a local server at `http://127.0.0.1:4000/on-demand`.
    - The `/on-demand/` directory is a result of the [`baseurl` variable](https://byparker.com/blog/2014/clearing-up-confusion-around-baseurl/) provided by Jekyll. If you'd like to serve your site under a different directory, change it in [`_config.yml`](https://github.com/github/training-kit/blob/contrib-guide/_config.yml).
1. Simply paste that into your favorite web-browser and you will be ready to test
