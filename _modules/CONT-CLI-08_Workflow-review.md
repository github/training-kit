---
layout: module
leadingpath: ../
title: Workflow Review
pre-requisites: CONT-CLI-07_Creating-local-branches
learning-objective: Review the GitHub flow using the command line.
screens:
  - video-slide:
      title: Workflow Review
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Show https://guides.github.com/introduction/flow/"
          say: "Remember that branching is fundamental to the GitHub flow. Now that we have created our branch, let's take a moment to review the rest of the workflow without any breaks for explanations like we did the first time. This time, lets create a file to tell others a few things they can do when they visit our home town. Along the way, I will show you a few helpful shortcuts."
        - do: "Type `echo \"Welcome to My Home Town\" > home-town.md`"
          say: "Let's use the echo command to create our new file. Name the file after your home town and add .md to the end so it will be rendered as markdown."
        - do: "Type `git status`"
          say: "When we type git status, we will see that we have a new untracked file."
        - do: "Type `git add .`"
          say: "We want to add this file to our next commit so we will add it to the staging area. Git add . is a shortcut that tells git to add all of the new or modified files to the staging area."
        - do: "Type `git commit -m\"commit message\"`"
          say: "Let's go ahead and commit our file. This time, instead of opening the text editor to type our commit message, we will use the -m option to tell git that we are including our message in quotes after this command."
        - do: "Type `git push -u origin <branch-name>`"
          say: "Now let's push the changes to the remote, setting the remote tracking branch by adding the -u option."
        - do: "Open GitHub"
          say: "Next we will go back to GitHub and open a Pull Request."
        - do: "Click `Compare & Pull Request`"
          say: "GitHub recognizes that you have pushed a new branch and will ask you to create a Pull Request. Click the green button to start your Pull Request."
        - do: "Type a pull request `Title` and `Description`"
          say: "Enter a descriptive title and description for the Pull Request."
        - do: "Click `Create Pull Request`"
          say: "And create your Pull Request."
        - do: "Click `Merge Pull Request`"
          say: "When the discussion ends and the file is ready, you will then merge your pull request with the master branch to complete the process."
        - do: "Click `Delete branch`"
          say: "Since your branch has been merged, it is safe to delete it now."
      production-notes:
  - lab:
      title: Workflow Review
      id: CONT-CLI-08-lab-01
      presenter-script:
        - Now you will have a chance to complete the workflow on your own.
      steps:
        - description: "Create a new file on your branch."
          id: CONT-CLI-08-create-file
        - description: "Add the file to staging and commit it locally."
          id: CONT-CLI-08-commit
        - description: "Push your file to the remote."
          id: CONT-CLI-08-push
        - description: "Create a pull request on GitHub."
          id: CONT-CLI-08-pull-request
        - description: "Merge your changes into Master."
          id: CONT-CLI-08-merge
additional-labs:
additional-questions:
resources:

---