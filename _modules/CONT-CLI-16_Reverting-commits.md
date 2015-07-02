---
layout: module
leadingpath: ../
title: Reverting Commits
pre-requisites: CONT-CLI-15_Renaming-moving-files
learning-objective: Describe the process for reversing a commit.
screens:
  - lab:
      title: Making Commits
      id: CONT-CLI-16-lab-01
      presenter-script:
        - Next we will learn how to undo a commit. Complete these steps to prepare your files for this exercise.
      steps:
        - description: Open your `goodname.md` file and add some text.
          id: CONT-CLI-16-01-edit-01
        - description: When you are finished, commit your file changes.
          id: CONT-CLI-16-01-commit-01
        - description: Re-open your `goodname.md` file and make changes to the original text.
          id: CONT-CLI-16-01-edit-02
        - description: When you are finished, commit your file changes.
          id: CONT-CLI-16-01-commit-02
  - video-slide:
      title: Reverting Commits
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `git log --stat`"
          say: "Let's take a look at the history you just created. You should have at least two commits to the same file."
        - do: "Copy the first 4 characters of the most recent commit ID"
          say: "Let's say that you made a mistake and need to undo all of the changes from the last commit. First you will need to find the commit and copy the first few characters of the SHA-1. You generally only need a few characters."
        - do: "Type `git revert <commit ID>`"
          say: "Now you will type git revert and paste in the SHA-1 you copied. Git will create a new commit that is the exact opposite of the commit you are reverting."
        - do: "Edit the commit message"
          say: "Your default text editor will open so you can edit the commit message."
        - do: "Click `Save > Close`"
          say: "Simply save it and close the text editor to complete the process."
      production-notes:
  - lab:
      title: Reverting Your Commit
      id: CONT-CLI-16-lab-02
      presenter-script:
        - Now it is your turn to practice the steps we discussed.
      steps:
        - description: Revert the last commit you made on goodname.md.
          id: CONT-CLI-16-02-revert
additional-labs:
additional-questions:
resources:

---