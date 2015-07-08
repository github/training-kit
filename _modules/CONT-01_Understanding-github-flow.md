---
layout: module
leadingpath: ../
title: Understanding the GitHub Flow
pre-requisites: COLL-02_Using-issues
learning-objective: Describe the collaborative workflow enabled by GitHub.
screens:
  - video-slide:
      title: Understanding the GitHub Flow
      video: http://youtu.be/PBI2Rz-ZOxU
      video-script:
        - do: Show the GitHub flow at https://guides.github.com/introduction/flow/
          say: The GitHub flow is a lightweight workflow that allows you to experiment with new ideas safely, without fear of compromising a project.
        - do: Highlight the master icon
          say: Branching is a key concept you will need to understand. Everything in GitHub lives on a branch. By convention, the "blessed" or "canonical" version of your project lives on a branch called `master`.
        - do: Show the branch icon
          say: When you are ready to experiment with a new feature or fix an issue, you create a new branch of the project. The branch will look exactly like `master` at first, but any changes you make will only be reflected in your branch. Such a new branch is often called a "feature" branch, and you should give yours a descriptive name.
        - do: Highlight the commit icons
          say: When you make changes to the files within the project, you will commit your changes to the feature branch.
        - do: Highlight the pull request icon
          say: When you are ready to start a discussion about your changes, you will open a pull request. A pull request doesn't need to be a perfect work of art - it is meant to be a starting point that will be further refined and polished through the efforts of the project team.
        - do: Highlight the merge icon
          say: When the changes contained in the pull request are approved, the feature branch is merged onto the master branch. In the next section, you will learn how to put this GitHub workflow into practice.
      production-notes:
additional-labs:
additional-questions:
resources:
  - title: Understanding the GitHub Flow
    url: https://guides.github.com/introduction/flow/

---