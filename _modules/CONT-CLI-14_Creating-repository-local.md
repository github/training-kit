---
layout: module
leadingpath: ../
title: Creating a Repository on the Command Line
pre-requisites: CONT-CLI-13_Viewing-project-history
learning-objective: Create a local repository on the command line.
screens:
  - video-slide:
      title: Creating a Repository on the Command Line
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `cd`"
          say: "Earlier we learned how to create a repository on GitHub and clone it to our local desktop. Sometimes, we want to start a project locally and then push it up to the remote. To do this, we will need to create a local repository. Go ahead and navigate to a location where we can create a new directory."
        - do: "Type `git init scratch`"
          say: "We can initialize a repository inside an existing project, or we can start one from scratch. We are going to go ahead and create a scratch project that we can use to learn how to make changes and rewrite history. To do this, we can type git init and the directory name. Git will create a new directory called scratch and initialize git inside this directory."
        - do: "Type `cd scratch`"
          say: "After you see a confirmation message, go ahead and cd into scratch."
        - do: "Type `ls -la`"
          say: "Let's see what just happened. When we typed git init, git created this new file called .git and saved it in the directory. This is where all of the git internals are located."
        - do: "Type `echo \"This is my scratch project\" > README.md`"
          say: "At this point, there is nothing in our repository, so let's create a README file."
        - do: "Type `git add README.md` and `git commit -m\"add README.md\"`"
          say: "Then we will add and commit our file."
      production-notes:
  - lab:
      title: Creating a Repository on the Command Line
      id: CONT-CLI-14-lab-01
      presenter-script:
        - It's time to create your own local repository.
      steps:
        - description: Initialize a new git repository.
          id: CONT-CLI-14-init
        - description: Create a README.md file and commit it to the repository.
          id: CONT-CLI-14-commit
        - description: Create a branch in your new repository.
          id: CONT-CLI-14-branch
additional-labs:
additional-questions:
resources:
  - title: "Video: GitHub & Git Foundations - Init"
    url: https://youtu.be/WxMFZncm12s

---