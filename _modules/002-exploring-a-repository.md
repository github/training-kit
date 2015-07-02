---
layout: module
leadingpath: ../
title: Exploring a Repository
pre-requisites: 001
learning-objective: Learn how to navigate through a repository, understand the basic concepts of  the code view, the README.md, issues and pull requests.
screens:
  - image-slide:
      title: Exploring a Repository
      image: https://training.github.com/kit/assets/diagrams/git-logo-black.svg
      presenter-script:
        - A repository is the most basic element of GitHub. It is easiest to imagine as a project's folder. However, unlike an ordinary folder on your laptop, a GitHub repository offers simple yet powerful tools for collaborating with others.
        - A repository contains all of the project files (including documentation), and stores each files revision history. Whether you are just curious or you are a major contributor, knowing your way around a repository is essential!
  - video-slide: # Video slides are used to display videos
      title: Guided Exploration
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script: # The script is used for two purposes - firstly for anyone who is responsible for creating the video and secondly to generate presenter script which should be the sum of the "say" elements
        - do: Navigate to the first sample repository
          say: The repository is the container that holds everything related to your project.
        - do: Click Code view
          say: The code view is where you will find the files included the repository. These files may contain the project code, documentations, and other important files. We also call this view the root of the project. Any changes to these files is tracked via Git version control.
        - do: View the README.md
          say: The README.md is a special file that we recommend all repositories contain. GitHub looks for this file and helpfully displays it below the repository. It usually explains the project and where to find helpful information within the project.
        - do: Click Issues view
          say: Issues are used to track bugs and feature requests for the project. Issues can be assigned to specific team members and are designed to encourage discussion and collaboration.
        - do: Click Pull Request view
          say: A Pull Request represents a change, such as adding, modifying, or deleting files, which the author would like to make to the repository. Pull Requests are used to resolve Issues.
        - do: Click Issues > Filters
          say: Filters allow you to easily search for Issues or Pull Requests.
      production-notes: #Any notes for the person producing the video
  - lab: # Labs test real world skills. In this Git/GitHub curriculum the activities will be validated by our GitHubBot. Note that this is a provisional structure - tweak it for ease of parsing, coding or simply to make it better :)
      title: Create an issue # This is the title of the page setting the student expectations for what they need to do
      id: 002-lab-01
      presenter-script:
        - Fork the repo
        - Create an issue
      steps: #Each lab is comprised of 1..n steps that need to be performed. Each step has a description and 1..n verifications with success and error messages. All of the steps are displayed immediately to the user but as they're completed we diplay the appropriate success/failure messages under each
        - description: Start by going to https://github.com/certify/please-fork-me and making a fork of the repository # Describes to the student what they need to do
          id: 002-fork-repo
          verifications: # The 0..n verifications to run to confirm whether the step has been successfully completed.
            - verification-type: fork-exists
              id: 002-fork-repo-verification
              repo-name: please-fork-me # Think of verifications as having n-types - one of the types is the "repo-exists" verification which confirms that a repo with that name exists in the users namespace - so it'll use either a curl like operation or ideally the GitHub API to look for the existance of https://github.com/<username>/<repo-name>
              success-message: You forked the repository successfully
              failure-message: It doesn't look like you forked the repository. Are you sure that you (a) went to the right repo (b) clicked the "fork" button at the top right hand corner of the page (c) forked the repo to your personal user account rather than to an organization
        - description: Create a new issue on your fork of the project
          id: 002-create-issue
          verifications:
            - verification-type: issue-created # The commit verification is fired off by a webhook from the users repo
              id: 002-create-issue-verification
              repo-name: please-fork-me
              success-message: You created a new issue successfully
              failure-message: You didn't create a new issue on your fork
additional-labs:
additional-questions:
resources:
  - title: "GitHub Glossary: Repository"
    url: https://help.github.com/articles/github-glossary/#repository

---