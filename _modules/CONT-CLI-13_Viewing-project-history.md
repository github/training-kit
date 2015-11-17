---
layout: module
leadingpath: ../
title: Viewing Project History
pre-requisites: CONT-CLI-12_Merging-changes
learning-objective: Discover commands for viewing the history of your project.
screens:
  - video-slide:
      title: Viewing Project History
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `git pull origin`"
          say: "Now that everyone has merged and pushed their changes to the remote, let's pull those changes back to our local copy. We can do this with git pull."
        - do: "Type `git log`"
          say: "We have made a few commits, let's take a look at our project history. Git log is the most basic command. It provides a list of all of the commits made on our branch with the most recent commit first."
        - do: "Press `q`"
          say: "You can press the up or down arrows or press enter to view additional log entries. Type q to quit viewing the log and return to the command prompt."
        - do: "Type `git log --oneline`"
          say: "Git log has a great deal of information, but it is a little verbose. If you would like to see a condensed version, add the --oneline option."
        - do: "Type `git log --oneline --graph`"
          say: "The log command has many options and you can actually string them together to create a view that is most helpful for your situation. For example, you can add an ASCII graph of the branch and merge history of our project by adding the option --graph."
        - do: "Type `git log --oneline --graph --decorate`"
          say: "If you would like more information about the branches and where HEAD is located, you can add the --decorate option."
        - do: "Type `git log --oneline --graph --decorate --all`"
          say: "If you also want to include un-merged branches, you should add the option --all."
        - do: "Type `git log --stat`"
          say: "If you would like to see which files were involved in each commit, use the --stat option."
        - do: "Type `git log --patch`"
          say: "And if you would like to see the actual changes that were made, use --patch."
      production-notes:
  - lab:
      title: Viewing Project History
      id: CONT-CLI-13-lab-01
      presenter-script:
        - Take some time to explore the git log options.
      steps:
        - description: "View `git log` on your copy of the repository."
          id: CONT-CLI-13-log-simple
        - description: "View `git log --oneline` on your copy of the repository."
          id: CONT-CLI-13-log-oneline
        - description: "View `git log --oneline --graph --decorate --all` on your copy of the repository."
          id: CONT-CLI-13-log-complex
additional-labs:
additional-questions:
resources:
  - title: "Video: GitHub & Git Foundations - Log"
    url: https://youtu.be/Ew8HQsFyVHo

---