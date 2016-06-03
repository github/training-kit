---
layout: module
leadingpath: ../
title: Viewing Local Diffs
pre-requisites: CONT-CLI-10_Modifying-local-files
learning-objective: Discover techniques for viewing file changes in different stages of the workflow.
screens:
  - image-slide:
      title: Comparing Local File States
      image: diff-options.jpg
      presenter-script:
        - "In the last section, we made several changes to a local file, causing the file to appear in different stages of the commit process. The git diff command allows us to see what has changed in these different versions of our files. Let's explore some of these options now."
  - video-slide:
      title: Viewing Local Diffs
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `git diff`"
          say: "Let's start with git diff without any options. This command compares the changes you have made in the working directory with the staged version of the file."
        - do: "Type `git diff --staged`"
          say: "When you add the --staged option, git diff will compare the staged version with the most recent committed version of the file."
        - do: "Type `git diff HEAD`"
          say: "When you add HEAD after the git diff command, git combines the changes in your working and staged directories and compares them with the version of the file that is currently designated as the HEAD. In most cases, this is the most recent commit in the history of the file."
        - do: "Type `git diff --color-words`"
          say: "The default for git diff is to compare lines of change, but sometimes this is not helpful when we have only made a small change. We can add the option --color-words to get a word-by-word comparison instead of the line level comparison."
      production-notes:
  - lab:
      title: Viewing Diffs and Committing Changes
      id: CONT-CLI-11-lab-01
      presenter-script:
        - Take some time to explore the git diff options.
      steps:
        - description: Make various changes to your file and use the git diff commands to see how they appear.
          id: CONT-CLI-11-diff
        - description: When you are finished, commit your file changes.
          id: CONT-CLI-11-commit
additional-labs:
additional-questions:
resources:
  - title: "Video: Git & GitHub Foundations - Diff"
    url: https://help.github.com/articles/closing-issues-via-commit-messages/

---