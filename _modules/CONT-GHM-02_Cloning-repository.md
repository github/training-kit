---
layout: module
leadingpath: ../
title: Cloning a Repository
pre-requisites: CONT-GHM-01_Basic-configuration
learning-objective: Clone a repository and create a branch to separate feature work from the master branch.
screens:
  - image-slide:
      title: Cloning a Repository
      image: clone-diagram.jpg
      presenter-script:
        - Let's revisit the steps we just covered, but this time, we will use a local copy of the file and the command line to make the changes requested in the issue.
        - First, we will need to create a clone of the repository.
        - When you clone a GitHub repository you are creating a copy of everything in that repository, including its history. This is one of the benefits of a DVCS like git - rather than being required to query a slow centralized server to review the commit history, queries are run locally and are lightning fast.
  - video-slide:
      title: Cloning a Repository
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Navigate to the `class repository`"
          say: "Earlier you created a branch in this repository. Starting your branch on GitHub is a good best practice to adopt. It let's others know you are working on a specific branch and prevents merge conflicts later in the process."
        - do: "Click the `branch dropdown`"
          say: "Go ahead and check to see that you finished creating your branch."
        - do: "Click `Clone in Desktop`"
          say: "Now, since we want to work locally let's clone this repository on our desktop."
        - do: "Type a file name and navigate to the desired location"
          say: "You can name the clone of the repository anything you would like. In this example, we will leave it the same as the remote. You can also choose the location where you would like the cloned repository to be saved."
        - do: "Click `Clone`"
          say: "When you are finished click Clone. The cloned repository is now shown in the left navigation pane."
        - do: "Click the `Branch dropdown`"
          say: "You can view a list of the branches and ensure you are working on your own branch."
        - do: "Select your Branch"
          say: "If your branch is not already selected, go ahead and select it now!"
      production-notes:
  - lab:
      title: Cloning a Repository
      id: CONT-GHM-02-lab-01
      presenter-script:
        - Let's go ahead and clone this repository to your local desktop.
      steps:
        - description: Clone the repository to your desktop.
          id: CONT-GHM-02-clone
        - description: Checkout your branch.
          id: CONT-GHM-02-checkout
additional-labs:
additional-questions:
resources:
  - title: Cloning a Repository
    url: https://help.github.com/articles/cloning-a-repository/

---