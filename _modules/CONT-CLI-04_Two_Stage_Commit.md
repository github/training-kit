---
layout: module
leadingpath: ../
title: The Two Stage Commit
pre-requisites: CONT-CLI-03_Editing-local-files
learning-objective: Add and commit files on the command line.
screens:
  - image-slide:
      title: The Two Stage Commit
      image: two-stage-commit-a.jpg
      presenter-script:
        - After you have finished making your changes, it is time to commit them. When working from the command line, you will need to be familiar with the idea of the two stage commit.
  - image-slide:
      title: The Two Stage Commit
      image: two-stage-commit-b.jpg
      presenter-script:
        - When you work locally, your files exist in one of four states. They are either untracked, modified, staged, or committed.
        - An untracked file is one that is not currently part of the version controlled directory.
  - image-slide:
      title: The Two Stage Commit
      image: two-stage-commit-c.jpg
      presenter-script:
        - To add these files to version control, you will create a collection of files that represent a discrete unit of work. We build this unit in the staging area.
  - image-slide:
      title: The Two Stage Commit
      image: two-stage-commit-d.jpg
      presenter-script:
        - When we are satisfied with the unit of work we have assembled, we will commit everything in the staging area.
  - image-slide:
      title: The Two Stage Commit
      image: two-stage-commit-e.jpg
      presenter-script:
        - In order to make a file part of the version controlled directory we will first do a git add and then we will do a git commit. Let's do it now.
  - video-slide:
      title: The Two Stage Commit
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: Type `git status`
          say: Remember that Git status allows us to see the status of the files on our branch at any given time.
        - do: View status output
          say: When you have saved the changes to your file, you will see that your file is listed under the heading Changes not staged for commit and the file says it has been modified.
        - do: Type `git add <file-name.md>`
          say: The first command we will use is git add and the name of the file.
        - do: Type `git status`
          say: Now, type git status again to see what has changed.
        - do: View status output
          say: Notice that your file is listed under the heading Changes to be commited. This tells us that the file is in the staging area.
        - do: Type `git commit`
          say: Next you will type git commit. This tells git to collect all of the files in the staging area and commit them to version control as a single unit of work. Git will open your default text editor where you can enter the commit message.
        - do: Type the commit message
          say: "Simply type the commit message in the text editor. Any line without a # will be included in the commit message."
        - do: Click `Save > Quit`
          say: When you are happy with your commit message, simply save it and close your text editor.
        - do: Show git output message for commit
          say: Git provides a visual confirmation when the commit is complete.
  - lab:
      title: Committing Your Changes
      id: CONT-CLI-04-lab-01
      presenter-script:
        - Let's use the two-stage commit to stage and commit our changes.
      steps:
        - description: Add your file to staging.
          id: CONT-CLI-04-add
        - description: Commit your changes.
          id: CONT-CLI-04-commit
additional-labs:
additional-questions:
resources:

---