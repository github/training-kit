---
layout: module
leadingpath: ../
title: Resetting History
pre-requisites: CONT-CLI-18_Unstaging-files
learning-objective: Discover steps you can take when you need to rewrite history.
screens:
  - image-slide:
      title: Git Reset
      image: reset-visual.jpg
      presenter-script:
        - "Sometimes we are working on a branch and we decide things aren't going quite like we had planned. We want to go back to a previous point in history. We can do that with git reset."
        - "The `git reset` command effects the location of HEAD on the current branch. Before we can learn how to use this command, we need to understand the concept of HEAD."
        - "HEAD is a pointer to the branch you are currently on, while a branch is a pointer to the latest commit in a line of work. "
        - "When we use the reset command, we are moving the thing that HEAD points to. The question we need to answer before we perform a reset is \"what do we want to do with the commits between the current HEAD and the location we are resetting to?\""
  - image-slide:
      title: Git Reset Modes
      image: reset-modes.jpg
      presenter-script:
        - "There are three modes for git reset: --soft, --mixed, and --hard."
        - "When you use the `--soft` option, git moves the HEAD but then it stops. The changes you made in the commits between the two points are placed in the staging area, but your working files and the index are left untouched. This is a good command to use when you have made a large number of small commits and you would like to regroup them into a single commit."
        - "When you use the `--mixed` option, git performs a soft reset but then takes it one step further by making the index look like the snapshot HEAD is now pointing to. Mixed is the default mode for reset."
        - "--mixed and --soft are both safe operations since they will not overwrite the contents of your working directory."
        - "`--hard` is the destructive version. When you use the --hard option, git will make both the working directory and the index look like the new location of HEAD. In other words, it will discard all of the changes made between the old and new HEAD location, to include anything in your working directory."
        - "Let's take a look at each of these options in action."
  - video-slide:
      title: Using the Soft Reset
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type git log --oneline --graph --decorate --all"
          say: "Let's start by exploring the soft reset. First, we will use the log command to look at the history of our project."
        - do: "Show HEAD"
          say: "Using the ASCII graph we created earlier, we can see the current location of HEAD. We want to go back two commits in our history."
        - do: "Type git reset --soft HEAD~2"
          say: "We type git reset --soft, then we tell git where we want to reset to. In this case, the tilde tells git we want to reset to two commits before the current location of HEAD."
        - do: "Type git status"
          say: "Now when we type git status we can see that the changes we made in the last two commits are sitting in the staging area waiting to be committed."
        - do: "Type git log --oneline --graph --decorate --all"
          say: "When we view our git log, we can see that the HEAD is now sitting two commits earlier than it was before we used git reset."
        - do: "Type git commit -m\"grouping commits for cleaner history\""
          say: "Let's go ahead and re-commit these changes."
      production-notes:
  - video-slide:
      title: Using the Mixed Reset
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type git log --oneline --graph --decorate --all"
          say: "Next we will explore the mixed reset. Once again, we will start by viewing the history of our project."
        - do: "Show HEAD"
          say: "This time we only want to go back one commit in history."
        - do: "Type git reset HEAD~"
          say: "We can type git reset without any options since --mixed is the default mode for reset, then we tell git where we want to reset to. In this case, the tilde tells git we want to reset to one commit before the current location of HEAD."
        - do: "Type git status"
          say: "Now, when we type git status the changes we made in the last commit are in Changes not staged for commit. We need to add them to the staging area if we want to commit them."
        - do: "Type git commit -m\"another reset example\""
          say: "Let's go ahead and re-commit these changes again."
      production-notes:
  - video-slide:
      title: Using the Hard Reset
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type git log --oneline --graph --decorate --all"
          say: "Finally we will explore the hard reset."
        - do: "Show HEAD"
          say: "This time, we want to go all the way back to our initial commit to get rid of all of these junk files we have created."
        - do: "Type git reset --hard <commit ID>"
          say: "We type git reset --hard, but this time we will use the commit ID to tell git where we want to reset."
        - do: "Type git status"
          say: "This time when we type git status, we see that our working directory is clean. This is because reset --hard also discards the contents of the working directory."
      production-notes:
additional-labs:
additional-questions:
resources:
  - title: "Video: GitHub & Git Foundations - Reset"
    url: https://youtu.be/BKPjPMVB81g

---