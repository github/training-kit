---
layout: module
leadingpath: ../
title: Discarding Changes in Modified Files
pre-requisites: CONT-CLI-19_Resetting-history
learning-objective: Discover steps you can take when you need to discard the changes made in unstaged files.
screens:
  - video-slide:
      title: Discarding Changes in Modified Files
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `echo \"This is my original content\" > changeme.md`"
          say: "Next we will discuss how to discard changes to a modified file. First, let's create a file called changeme.md with some basic text inside."
        - do: "Type `git add changeme.md`"
          say: "Since we want to work on this file in the modified state, we will need to have a snapshot of this file. Let's go ahead and add this file to version control."
        - do: "Type `git commit -m\"Original changeme.md file\"`"
          say: "And commit it."
        - do: "Type `echo \"This is the content I will throw away\" >> changeme.md`"
          say: "Now we will append some text to the end of our file."
        - do: "Type `git status`"
          say: "Next we will type git status. Notice that the file now shows it has been modified. Git tries to be helpful here by telling us exactly how to remove the changes to this file."
        - do: "Type `git checkout -- changeme.md`"
          say: "Git tells us to type git checkout. We are already familiar with this command from using it to checkout branches, but this time we will include the -- to tell git we are talking about a file. Then we add the file name."
        - do: "Type `git status`"
          say: "If I type git status, you will see the file no longer appears as a modified file and my working directory is clean."
        - do: "Type `cat changeme.md`"
          say: "And if I look at the contents of my file, you will see that the second line of text I added is now gone. It is important to remember that this is a destructive operation. Any changes you made to the file since your last commit will be gone forever. This command overwrites the modified file with the previously committed version so it is as if your changes never happened."
      production-notes:
  - lab:
      title: Discarding Changes in Modified Files
      id: CONT-CLI-20-lab-01
      presenter-script:
        - Now it is your turn to practice discarding changes to modified files.
      steps:
        - description: Edit the file `threefile.md`.
          id: CONT-CLI-20-edit
        - description: "Use `git checkout` to discard your changes."
          id: CONT-CLI-20-checkout
additional-labs:
additional-questions:
resources:
  - title: "Video: GitHub & Git Foundations - Reset"
    url: https://youtu.be/BKPjPMVB81g

---