---
layout: module
leadingpath: ../
title: Fixing Bad Commits
pre-requisites: CONT-CLI-16_Reverting-commits
learning-objective: Discover steps you can take when you realize you messed up the last commit.
screens:
  - lab:
      title: Making Commits
      id: CONT-CLI-17-lab-01
      presenter-script:
        - Next we will learn how to change a commit. Complete these steps to prepare your files for this exercise.
      steps:
        - description: Create a file called `onefile.md`. Do not commit the file.
          id: CONT-CLI-17-01-onefile
        - description: Create a file called `twofile.md`. Do not commit the file.
          id: CONT-CLI-17-01-twofile
  - video-slide:
      title: Fixing Bad Commits
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `git add onefile.md`"
          say: "Let's add onefile.md to staging."
        - do: "Type `git commit -m\"my mispelled commit msg\"`"
          say: "Next let's type a commit message - but I'm going to make a mistake so I can fix it."
        - do: "Type `git status`"
          say: "So I have committed onefile.md, but I actually meant to commit twofile.md at the same time. We can fix this using a command called commit --amend."
        - do: "Type `git add twofile.md`"
          say: "First, we need to add twofile.md to the staging area."
        - do: "Type `git commit --amend`"
          say: "Then we can type git commit --amend. Git will automatically add the content of the staging area to the last commit and open our text editor so we can change our commit message."
        - do: "Type the corrected commit message"
          say: "Simply type a new commit message or you can keep the one you already typed if it was correct."
        - do: "Click `Save > Quit`"
          say: "Then save the commit message and close the text editor. In this case, we added a file and fixed the commit message. If you only wanted to fix the commit message, you would use the same command but leave the staging area empty."
      production-notes:
  - lab:
      title: Using Commit Amend
      id: CONT-CLI-17-lab-02
      presenter-script:
        - Now it is your turn to practice the steps we discussed.
      steps:
        - description: Create a new file called threefile.md.
          id: CONT-CLI-17-02-threefile
        - description: Add `threefile.md` to your previous commit.
          id: CONT-CLI-17-02-amend
additional-labs:
additional-questions:
resources:

---