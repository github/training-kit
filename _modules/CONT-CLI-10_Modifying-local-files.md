---
layout: module
leadingpath: ../
title: Modifying Local Files
pre-requisites: CONT-CLI-09_Pulling-changes
learning-objective: Experience common commit scenarios.
screens:
  - video-slide:
      title: Modifying Local Files
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `atom <file-name.md>`"
          say: "Now that our local branch is up-to-date with the master, let's simulate two common scenarios you will encounter when working locally on the command line. First, let's open the file we created earlier."
        - do: "Make and save changes"
          say: "Make a few changes and then save the file."
        - do: "Type `git status`"
          say: "When we type git status we can see that the file is modified but not staged for commit. But, there is a problem. We are still working on our master branch. We want to make our changes on a feature branch."
        - do: "Type `git checkout -b <branch-name>`"
          say: "Fortunately, there is only one working directory and one staging area. This means we can still create a new branch before we commit the file. To do this, let's use a shortcut to create the branch and checkout at the same time. To do this, we add the -b option to git checkout."
        - do: "Type `git add <file-name.md>`"
          say: "Now we are ready to add the file to the staging area."
        - do: "Type `git status`"
          say: "Git status shows us that the file is ready to be committed. But I just remembered that I had one more change to make."
        - do: "Make and save more changes"
          say: "Go back to the file and make a few more changes and save them."
        - do: "Type `git status`"
          say: "Now when we type git status, the same file appears both in the changes to be committed and the changes not staged for commit. If we were to commit this file right now, only the first set of changes would actually be committed."
      production-notes:
  - lab:
      title: Modifying Local Files
      id: CONT-CLI-10-lab-01
      presenter-script:
        - Go ahead and set up your files for the next activity.
      steps:
        - description: "Open your file and make a few changes."
          id: CONT-CLI-10-edit-01
        - description: "Save the changes and add them to the staging area. **Do not commit the changes yet.**"
          id: CONT-CLI-10-stage
        - description: "Open the same file and make a few more changes."
          id: CONT-CLI-10-edit-02
        - description: "Save the changes."
          id: CONT-CLI-10-save
        - description: "Run git status."
          id: CONT-CLI-10-status
additional-labs:
additional-questions:
resources:

---