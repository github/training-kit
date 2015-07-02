---
layout: module
leadingpath: ../
title: Editing Local Files
pre-requisites: CONT-CLI-02_Cloning-a-repository
learning-objective: Edit files from the command line.
screens:
  - image-slide:
      title: Editing Local Files
      image: edit-icon.jpg
      presenter-script:
        - "Now that you have cloned the repository and checked out your branch, you are ready to make some changes to the local files. If you are familiar with using the command line to open and edit files, then much of this will be familiar to you. The only difference here is that we will be making our changes on a branch. Let's add more information to the bio we created earlier."
  - video-slide:
      title: Editing Local Files
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: Type `git branch`
          say: "Before you make any changes, you will want to double check that you are on the correct branch."
        - do: Type `cd bios`
          say: "Technically you could just open the file with the Finder window or Windows Explorer, but let's stay purely on the command line for now and cd into the bios folder. "
        - do: Type `atom <file-name.md>`
          say: "I am going to modify my file in atom, so I will use the command line to open atom and the file all at once. You can use your favorite text editor to make changes to your file. "
        - do: Type changes in the file
          say: Add more information about yourself to the end of the original file.
        - do: Click `Save > Quit`
          say: "When you are finished, save the file and close the text editor. "
        - do: Open the CLI
          say:  Let's go back to the terminal window and take a look at what we have just done.
        - do: Type `git checkout master`
          say: First, let's checkout the master branch.
        - do: Type `atom <file-name.md>`
          say: "When you open your file with the master branch selected, you will notice that the changes you just made to the file are not included. "
        - do: Open the CLI
          say: Now go back to your terminal window
        - do: Type `git checkout <your branch>`
          say: And check out your branch again.
        - do: Type `atom <file-name.md>`
          say: "Now when you open the file, the changes appear again because git is showing you the version of the file that exists on your branch."
  - lab:
      title: Editing Local Files
      id: CONT-CLI-03-lab-01
      presenter-script:
        - Let's make some changes to our local files.
      steps:
        - description: Open your bio file in a text editor.
          id: CONT-CLI-03-open
        - description: Add more information to your bio.
          id: CONT-CLI-03-edit
        - description: Save the file.
          id: CONT-CLI-03-save
additional-labs:
additional-questions:
resources:

---