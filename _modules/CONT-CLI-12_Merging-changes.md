---
layout: module
leadingpath: ../
title: Merging Local Changes
pre-requisites: CONT-CLI-11_Viewing-local-diffs
learning-objective: Merge branches on the command line.
screens:
  - image-slide:
      title: What Happens When We Merge?
      image: merge-visual.jpg # Include an image that shows a branch with some commits - then a merge - then show the master branch with those same commits.
      presenter-script:
        - "Merging combines the history of two or more branches."
        - "We have already learned how to merge our changes on GitHub during the pull request process, now let's learn how to merge our changes locally."
  - video-slide:
      title: Merging Local Changes
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `git branch`"
          say: "Before we merge, we will need to make sure we are checked out to the correct branch. When we are performing a merge, we need to be checked out to the branch we are merging into. "
        - do: "Type `git checkout master`"
          say: "In this example, we want to merge our feature branch into master, so we will check out to master."
        - do: "Type `git merge <branch-name>`"
          say: "Now we will simply type the command git merge and our branch name to complete the merge."
        - do: "Type `git push`"
          say: "Now we will use git push to send our changes to the remote."
        - do: "Show the Merged PR on GitHub"
          say: "Even though we merged our branch locally, when we push our changes to GitHub it recognizes the merge has been completed and marks the pull request as merged."
        - do: "Click `Delete Branch`"
          say: "Once the branch has been merged into master, it is safe to delete it. We can use the handy button on the pull request screen to delete the branch on GitHub."
        - do: "Open the CLI"
          say: "But to delete the local copy of our branch, we will need to use the terminal window."
        - do: "Type `git branch -d <branch-name>`"
          say: "Simply add the -d option to the git branch command to delete the local copy of your branch."
      production-notes:
  - lab:
      title: Merging Local Changes
      id: CONT-CLI-12-lab-01
      presenter-script:
        - Let's practice merging your changes locally on the command line.
      steps:
        - description: Merge your local branch into master.
          id: CONT-CLI-12-merge
        - description: Push your changes to the remote.
          id: CONT-CLI-12-push
        - description: Delete the local copy of your branch.
          id: CONT-CLI-12-delete
additional-labs:
additional-questions:
resources:

---