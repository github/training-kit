---
layout: module
leadingpath: ../
title: Introducing GitHub
pre-requisites:
learning-objective: Describe the features of GitHub and how it is used to collaborate effectively with your team.
screens:
  - poll:
      title: Version Control Poll
      presenter-script:
        - Please tell us a little about your experience with version control.
      questions: # A poll might have one or more questions
        - title: Have you used a version control system before?
          id: COLL-00-pq1
          type: single-select # Question type - multiple-select, single-select, free-text-single-entry or free-text-multiple-entry
          options:
            - value: Yes, Git
              id: COLL-00-pq1-o1
              response: Great! Let's just make sure you're 100% clear about the differences between Git and GitHub.
            - value: Yes, but not Git
              id: COLL-00-pq1-o2
              response: Great! Welcome to Git and GitHub. You might find them a little different from your previous vcs's but we think you're going to like the differences!
            - value: No, not yet
              id: COLL-00-pq1-o3
              response: Welcome to the world of version control! It takes a bit of getting used to but you'll soon find out just how powerful a version control system can be for keeping track of your changed and collaborating with your team.
  - image-slide:
      title: What is GitHub?
      image: github-icon.jpg
      presenter-script:
        - GitHub is a collaboration platform built on top of a distributed version control system called Git.
  - image-slide:
      title: Key GitHub Features
      image: collaboration-features.jpg
      presenter-script:
        - In addition to being a place to host and share your Git projects, GitHub provides a number of features to help your team collaborate including issues for discussing features and bugs and pull requests for discussing and reviewing new features your team is working on.
  - image-slide:
      title: The GitHub Ecosystem
      image: github-ecosystem.jpg
      presenter-script:
        - You can also use all of your favorite tools with GitHub. Indispensable tools like continuous integration and continuous deployment help you and your team build software better, together.
additional-labs:
additional-questions:
resources:
  - title: "Video: Intro to GitHub - GitHub & Git Foundations"
    url: https://youtu.be/vDv5K5PbvO8
  - title: "Video: GitHub & Git Foundations - Introduction"
    url: https://youtu.be/FyfwLX4HAxM
  - title: GitHub Integrations
    url: https://github.com/integrations

---