---
layout: module
leadingpath: ../
title: Removing Tracked Files
pre-requisites: CONT-CLI-21_Handling-merge-conflicts
learning-objective: Discover how to remove files from tracking.
screens:
  - video-slide:
      title: Removing Tracked Files
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `ls -lr`"
          say: "Sometimes we need to remove a file that is already being tracked. We could just delete the file and then stage and commit the change. But let's use a shortcut to delete our conflict.md file."
        - do: "Type `git rm conflict.md`"
          say: "We can use the git rm command, followed by the file we would like to delete."
        - do: "Type `git status`"
          say: "When we type git status, we can see that the file has already been staged and is ready for us to commit."
        - do: "Type `git commit -m\"remove conflict file\"`"
          say: "Now we simply need to commit the change."
      production-notes:
  - lab:
      title: Removing Tracked Files
      id: CONT-CLI-22-lab-01
      presenter-script:
        - Use the steps you just learned to remove a tracked file.
      steps:
        - description: "Remove the tracked file `onefile.md`"
          id: CONT-CLI-23-remove
additional-labs:
additional-questions:
resources:

---