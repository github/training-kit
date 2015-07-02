---
layout: module
leadingpath: ../
title: Renaming and Moving Files
pre-requisites: CONT-CLI-14_Creating-repository-local
learning-objective: Discover Git commands for renaming and moving tracked files.
screens:
  - video-slide:
      title: Renaming and Moving Files
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `touch moveme.md`"
          say: "Let's create two files we can throw away later. We will call the first one moveme.md"
        - do: "Type `touch badname.md`"
          say: "And we will call the other one badname.md"
        - do: "Type `git add .`"
          say: "Then we will use a shortcut to add both of these files to the staging area. By using a . in place of the file name, we tell git to add all of the untracked and modified files in our working tree to the staging area. This can be a helpful command, but it can also be dangerous. "
        - do: "Type `git status`"
          say: "The staging area allows us to confirm that the commit will look as we intended."
        - do: "Type `git commit -m\"Create throw away files\"`"
          say: "Now that we have created our branch, let's commit our files."
        - do: "Type `mkdir places`"
          say: "Let's say you want to reorganize your files and move the moveme.md file into a places folder. First let's create our folder."
        - do: "Type `git mv moveme.md places/moveme.md`"
          say: "Then we will use the git mv command to move the file. The command takes two arguments, the current path of the file and the new path."
        - do: "Type `git status`"
          say: "Now when we type git status, we can see that git has moved the file for us and added it to the staging area."
        - do: "Type `git commit -m\"move moveme to places folder\"`"
          say: "All we need to do is commit the file."
        - do: "Type `git mv badname.md goodname.md`"
          say: "We can use the exact same command to rename our badname file. Go ahead and try it now."
        - do: "Type `git status`"
          say: "Once again, when we run the status command, git shows this is a renamed file and adds it to the staging area. All we need to do is commit it."
      production-notes:
  - lab:
      title: Renaming Files
      id: CONT-CLI-15-lab-01
      presenter-script:
        - Go ahead and practice renaming files on your own.
      steps:
        - description: Rename the badname.md file to goodname.md.
          id: CONT-CLI-15-rename
        - description: When you are finished, commit your file changes.
          id: CONT-CLI-15-commit
additional-labs:
additional-questions:
resources:
  - title: "Video: GitHub & Git Foundations - Move"
    url: https://youtu.be/ipdgyfPq8FE

---