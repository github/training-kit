---
layout: module
leadingpath: ../
title: Unstaging Files
pre-requisites: CONT-CLI-17_Fixing-bad-commits
learning-objective: Discover steps you can take when you need to unstage files.
screens:
  - video-slide:
      title: Unstaging Files
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `echo \"This is my file to unstage.\" > unstageme.md`"
          say: "Let's set up another scenario. First we will create a file called unstageme.md."
        - do: "Type `git add unstageme.md`"
          say: "Then we will stage it for the next commit. Occassionally we run into a scenario where we are trying to craft our commits and accidentally end up with a file in the staging area that we do not want to include in the next commit. "
        - do: "Type `git reset HEAD unstageme.md`"
          say: "In this case, git is helpful and tells us how to remove the file from the staging area. We simply type git reset HEAD and then the file name."
        - do: "Type `git status`"
          say: "This unstages the file and moves it back to our working directory. From there, we can make additional changes to the file or simply add it to the next commit."
      production-notes:
  - lab:
      title: Unstaging files
      id: CONT-CLI-18-lab-01
      presenter-script:
        - Now it is your turn to practice unstaging a file.
      steps:
        - description: Make changes to the file called threefile.md.
          id: CONT-CLI-18-edit
        - description: Add the file to the staging area.
          id: CONT-CLI-18-stage
        - description: Unstage the file.
          id: CONT-CLI-18-unstage
additional-labs:
additional-questions:
resources:

---