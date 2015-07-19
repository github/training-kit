---
layout: module
leadingpath: ../
title: Creating Aliases
pre-requisites: CONT-CLI-22_Removing-tracked-files
learning-objective: Discover how to create shortcuts for commonly used git commands.
screens:
  - video-slide:
      title: Creating Command Shortcuts
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `git log --oneline --graph --decorate --all`"
          say: "By now you are probably getting tired of typing some of these long commands in git. Well here is some good news. You can configure shortcuts by using aliases."
        - do: "Type `git config --global alias.lol \"log --oneline --graph --decorate --all\"`"
          say: "For example, if I want to create an aliases for the log command. I type git config --global, then I type alias. and then the keyboard shortcut I would like to use for this command. I am going to use lol. Then, I will type the command it should run - without git at the beginning."
        - do: "Type `git lol`"
          say: "Now I can simply type git and the shortcut to see my log."
        - do: "Type `git config --global alias.co \"checkout -b\"`"
          say: "You can create aliases for any command."
      production-notes:
  - lab:
      title: Creating Aliases
      id: CONT-CLI-23-lab-01
      presenter-script: Now is a great time to create a few aliases of your own.
      steps:
        - description: Create an alias for pushing a new branch upstream.
          id: CONT-CLI-23-alias-push
        - description: Create an alias for the status command.
          id: CONT-CLI-23-alias-status
additional-labs:
additional-questions:
resources:

---