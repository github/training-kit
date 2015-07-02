---
layout: module
leadingpath: ../
title: The Two Stage Commit
pre-requisites: CONT-GHM-03_Editing-local-files
learning-objective: Add and commit files using the GitHub Desktop App.
screens:
  - image-slide:
      title: The Two Stage Commit
      image: two-stage-commit-a.jpg
      presenter-script:
        - After you have finished making your changes, it is time to commit them. When working in the desktop app, you will need to be familiar with the idea of the two stage commit.
        - When you work locally, your files exist in one of four states. They are either untracked, modified, staged, or committed.
        - When you are ready to add these files to version control, you will create a collection of files that represent a discrete unit of work. We build this unit in the changes tab of the desktop app.
        - When we are satisfied with the unit of work we have assembled, we will commit it.
        - Let's do it now.
  - video-slide:
      title: The Two Stage Commit
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Open the GitHub App"
          say: "Now that you have made some changes, let's use the GitHub app to commit the changes to version control."
        - do: "Click `Changes`"
          say: "The changes tab includes a list of the files that have been changed or added since the last commit."
        - do: "View checkboxes"
          say: "You will use the checkboxes to indicate which changes should be part of the commit. It is a good idea to group files together based on the type of changes or the file content. For example, if you fixed the same formatting issue in several documents, you should group them into one commit."
        - do: "Type the commit message in the Summary field"
          say: "When you have selected the appropriate files, type your commit message in the Summary field."
        - do: "Click `Commit to <branch>`"
          say: "You will notice that GitHub has already populated the commit button with the current branch. Simply click the button to commit your changes."
      production-notes:
additional-labs:
additional-questions:
resources:

---