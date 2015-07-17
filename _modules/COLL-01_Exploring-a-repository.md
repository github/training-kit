---
layout: module
leadingpath: ../
title: Exploring a Repository
pre-requisites:
learning-objective: Locate the key features of a GitHub repository.
screens:
  - image-slide:
      title: GitHub Repositories
      image: repository-intro.jpg
      presenter-script:
        - A repository is the most basic element of GitHub. It is easiest to imagine as a project's folder. However, unlike an ordinary folder on your laptop, a GitHub repository offers simple yet powerful tools for collaborating with others. A repository contains all of the project files (including documentation), and stores each file's revision history. Whether you are just curious or you are a major contributor, knowing your way around a repository is essential!
  - video-slide:
      title: Exploring a repository
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: Navigate to the first sample repository
          say: The GitHub repository is the container that holds everything related to your project.
        - do: Click `Code` view
          say: The code view is where you will find the files included in the repository. These files may contain the project code, documentation, and other important files. We also call this view the root of the project. Any changes to these files will be tracked via Git version control.
        - do: View the `README.md`
          say: The README.md is a special file that we recommend all repositories contain. GitHub looks for this file and helpfully displays it below the repository. The README should explain the project and point readers to helpful information within the project.
        - do: Click `Issues` view
          say: Issues are used to track bugs and feature requests. Issues can be assigned to specific team members and are designed to encourage discussion and collaboration.
        - do: Click `Pull Request` view
          say: A Pull Request represents a change, such as adding, modifying, or deleting files, which the author would like to make to the repository. Pull Requests are used to resolve Issues. Go ahead and click around in the class repository now to familiarize yourself with its contents.
      production-notes:
  - quiz:
      title: Exploring a Repository
      id: COLL-01-quiz-01
      presenter-script: Before we move on, let's make sure we can find important parts of a repository
      questions:
        - title: "What is being discussed in Issue #3"
          id: COLL-01-qq1
          type: open-response
          options:
            - value: /bio/
              id: COLL-01-qq1-o1
              response: Good job! Issue 3 is discussing what we should include in a bio.
              correct: true
            - value: # Null means it matches anything else - please make this the last option
              id: COLL-01-qq1-o2
              response: Not quite. Issue 3 is discussing what should be included in a bio.
              correct: false
  - quiz:
      title: Exploring a Repository
      id: COLL-01-quiz-02
      presenter-script: Before we move on, let's make sure we can find important parts of a repository
      questions:
        - title: What is the Issue number for the discussion on adding the .gitignore
          id: COLL-01-qq2
          type: open-response
          options:
            - value: "/^#?4$/"
              id: COLL-01-qq2-o1
              response: "Good job! Issue #4 is discussing adding the .gitignore."
              correct: true
            - value: # Null means it matches anything else - please make this the last option
              id: COLL-01-qq2-o2
              response: "Not quite. Issue #4 is discussing adding the .gitignore."
  - quiz:
      title: Exploring a Repository
      id: COLL-01-quiz-03
      presenter-script: Before we move on, let's make sure we can find important parts of a repository
      questions:
        - title: "Who opened Issue #1"
          id: COLL-01-qq3
          type: open-response
          options:
            - value: /githubteacher/i
              id: COLL-01-qq3-o1
              response: "Good job! @githubteacher opened issue #1."
              correct: true
            - value: # Null means it matches anything else - please make this the last option
              id: COLL-01-qq3-o2
              response: "Not quite. @githubteacher opened issue #1."
              correct: false
  - quiz:
      title: Exploring a Repository
      id: COLL-01-quiz-04
      presenter-script: Before we move on, let's make sure we can find important parts of a repository
      questions:
        - title: "Who was the first person to comment on Issue #2"
          id: COLL-01-qq4
          type: open-response
          options:
            - value: /crichID/i
              id: COLL-01-qq4-o1
              response: "Good job! @crichID was the first person to comment on issue #2."
              correct: true
            - value: # Null means it matches anything else - please make this the last option
              id: COLL-01-qq4-o2
              response: "Not quite. @crichID was the first person to comment on issue #2."
              correct: false
  - quiz:
      title: Exploring a Repository
      id: COLL-01-quiz-05
      presenter-script: Before we move on, let's make sure we can find important parts of a repository
      questions:
        - title: "Bonus Question! What is the number of the Pull Request that is fixing issue #4"
          id: COLL-01-qq5
          type: open-response
          options:
            - value: "/^#?6$/"
              id: COLL-01-qq5-o1
              response: "Good job! PR #6 is adding the .gitignore file."
              correct: true
            - value: # Null means it matches anything else - please make this the last option
              id: COLL-01-qq5-o2
              response: "Not quite. PR #6 is adding the .gitignore file."
              correct: false
additional-labs:
additional-questions:
resources:
  - title: "GitHub Glossary: Repository"
    url: https://help.github.com/articles/github-glossary/#repository

---