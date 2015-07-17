---
layout: module
leadingpath: ../
title: Creating Local Branches
pre-requisites: CONT-CLI-06_Creating-repository-github
learning-objective: Create a branch locally using the command line.
screens:
  - video-slide:
      title: Creating Branches Locally
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Open the CLI"
          say: "The first thing we want to do is to create a local branch."
        - do: "Type `git branch`"
          say: "We just created this repository and cloned it to our local computer, so if we type git branch the only branch we will see is master and master is already checked out. When we create a new local branch, it is automatically going to create a branch off of the branch we are currently on. If we were working on a more mature repository, we would want to verify that we are on master before we go on."
        - do: "Type `git branch <branch-name>`"
          say: "Let's type git branch and the name of the branch we would like to create. Branch names cannot contain spaces so we generally use the (-)hyphen to separate words in our branch names."
        - do: "Type `git branch`"
          say: "Now when we type git branch we see the name of our new branch, but we are still checked out to master."
        - do: "Type `git checkout <branch-name>`"
          say: "Type git checkout with the name of your branch to check out to your new branch."
      production-notes:
  - lab:
      title: Create a Local Branch
      id: CONT-CLI-07-lab-01
      presenter-script:
        - Go ahead and create a local branch now!
      steps:
        - description: "Create a local branch using your username as follows: `githubusername-branch`."
          id: CONT-CLI-07-branch
additional-labs:
additional-questions:
resources:

---