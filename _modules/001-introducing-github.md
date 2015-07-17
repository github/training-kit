---
layout: module
leadingpath: ../
# I am including comments in this first yaml file just to provide more context. Please don't parse the comments - just ignore them
# If anything here is hard to parse, please just reformat it to make it easy to parse!
title: Introducing GitHub # The title for the module - displayed to end users
pre-requisites: # Don't parse this - just info for now
learning-objective: Understand the purpose of GitHub and the differnce between GitHub and Git. # The learning objective is just for curriculum developers so they know the purpose of each course and how to test that it was successful
screens: # Each module is comprised of 1..n screens - you could think of them like slides in keynote containing an image, a video, a poll, or a quiz.
  - poll: # One type of screen displays a poll. A poll is comprised of one or more questions.
      title: Version Control Poll
      presenter-script: Here's a quick poll to gauge your experience with Git and GitHub.
      questions: # A poll might have one or more questions
        - title: Have you used a version control system before? # Displayed as the question title
          id: m001-pq1
          type: single-select # Question type - multiple-select, single-select, free-text-single-entry or free-text-multiple-entry
          options:
            - value: Yes, Git
              id: m001-pq1-o1
              response: Great! Let's just make sure you're 100% clear about the differences between Git and GitHub.
            - value: Yes, but not Git
              id: m001-pq1-o2
              response: Great! Welcome to Git and GitHub. You might find them a little different from your previous vcs's but we think you're going to like the differences!
            - value: No, not yet
              id: m001-pq1-o3
              response: Welcome to the world of version control! It takes a bit of getting used to but you'll soon find out just how powerful a version control system can be for keeping track of your changed and collaborating with your team.
  - image-slide:
      title: What is GitHub?
      image: https://training.github.com/kit/assets/diagrams/git-logo-black.svg
      presenter-script:
        - GitHub is a collaboration platform built on top of the distributed version control system called Git.
  - image-slide:
      title: Key GitHub Features
      image: https://training.github.com/kit/assets/diagrams/git-logo-black.svg
      presenter-script:
        - In addition to being a place to host and share your Git projects, GitHub provides a number of features to help your team collaborate including issues for discussing features and bugs, and pull requests for discussing and reviewing new features your team is working on.
  - image-slide:
      title: The GitHub Ecosystem
      image: https://training.github.com/kit/assets/diagrams/git-logo-black.svg
      presenter-script:
        - You can also use all of your favorite tools with GitHub. Indispensable tools like continuous integration and continuous deployment help you and your team build software better, together.
additional-labs: # Don't parse this for now - it'll be used for additional labs for end of class tests and/or certifications
additional-questions: # Don't parse this for now - it'll be used for additional quizzes for end of class tests and/or certifications
resources: # Don't NEED to parse this for now - it'll be used for displaying resources at the end of classes, but we can add this once the basics are working
  - title: GitHub Integrations
    url: https://github.com/integrations

---