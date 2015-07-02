---
layout: module
leadingpath: ../
title: Editing Local Files
pre-requisites: CONT-GHM-02_Cloning-a-repository
learning-objective: Edit local files using the GitHub Desktop App.
screens:
  - image-slide:
      title: Editing Local Files
      image: edit-icon.jpg
      presenter-script:
        - "Now that you have cloned the repository and checked out your branch, you are ready to make some changes to the local files. You can use your favorite text editor to open and edit files. The only difference is that you will be making your changes on a branch. Let's add more information to the bio we created earlier."
  - video-slide:
      title: Editing Local Files
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Open your favorite text editor"
          say: "Most people find it easier to navigate to the file using their favorite text editor. Go ahead and open your text editor now."
        - do: "Open `<first-last.md>`"
          say: "Use the text editor to open the desired file."
        - do: "Type changes in the file"
          say: "Add more information about yourself to the end of the original file."
        - do: "Click `Save > Quit`"
          say: "When you are finished, save the file and close the text editor."
        - do: "Open the GitHub App"
          say: "Let's take a look at what we have just done."
        - do: "Using the branch dropdown, switch to `master`"
          say: "Go back to the desktop app and select the master branch."
        - do: "Open `<first-last.md>`"
          say: "When you open your file with the master branch selected, you will notice that the changes you just made to the file are not included."
        - do: "Click `Quit`"
          say: "Now close the text editor again"
        - do: "Open the GitHub App"
          say: "And go back to the app."
        - do: "Using the branch dropdown, switch to `your-branch`"
          say: "Checkout your branch again."
        - do: "Open `<first-last.md>`"
          say: "And open the file. Now that you are on your branch, the changes appear again."
      production-notes:
  - lab:
      title: Editing Local Files
      id: CONT-GHM-03-lab-01
      presenter-script:
        - Let's make some changes to our local files.
      steps:
        - description: Open your bio file in a text editor.
          id: CONT-GHM-03-open
        - description: Add more information to your bio.
          id: CONT-GHM-03-edit
        - description: Save the file.
          id: CONT-GHM-03-save
additional-labs:
additional-questions:
resources:

---