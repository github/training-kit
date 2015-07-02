---
layout: module
leadingpath: ../
title: Handling Merge Conflicts
pre-requisites: CONT-CLI-20_Discarding-changes-modified-files
learning-objective: Discover how to handle merge conflicts.
screens:
  - lab:
      title: Creating a Merge Conflict
      id: CONT-CLI-21-lab-01
      presenter-script:
        - "Merge conflicts occur when we are merging branches and two pieces of conflicting information try to occupy the same space at the same time. Let's set up a merge conflict scenario so we can learn how to fix it."
      steps:
        - description: "Create and checkout a branch called `merge-me`."
          id: CONT-CLI-21-01-branch
        - description: "Create a file on your branch called `conflict.md`. Add several lines of text to your file, then stage it and commit it."
          id: CONT-CLI-21-01-commit-branch
        - description: "Checkout your `master` branch."
          id: CONT-CLI-21-01-checkout
        - description: "Create a file on your master branch that is also called `conflict.md`. Add several lines of text to your file, then stage it and commit it."
          id: CONT-CLI-21-01-commit-master
        - description: "Merge your merge-me branch into master. This should create a merge conflict."
          id: CONT-CLI-21-01-merge
  - video-slide:
      title: Handling Merge Conflicts
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Type `git status`"
          say: "Now that you have created a merge conflict, let's learn how to fix it using a simple text editor. First we will type git status and look for a section called unmerged paths. This tells us which files are creating the merge conflict."
        - do: "Type `atom conflict.md`"
          say: "Open the file in your text editor."
        - do: "Show the merge conflict markers"
          say: "First you will see a bunch of less than signs with the marker HEAD. Then you will see a chunk of content separated by a row of equal signs. Below the chunk of content, you will see a bunch of greater than signs with the marker merge-me. This is the text that is causing the conflict. The text above the equal signs is what is found in the checked out branch (in this case our master branch). And the text below the equal signs is what is found in the branch we are trying to merge."
        - do: "Delete text to clear the conflict"
          say: "We simply need to decide which text we want to keep."
        - do: "Delete the conflict markers"
          say: "Then delete the conflict markers."
        - do: "Click `Save > Quit`"
          say: "Save our file and then close our text editor."
        - do: "Type `git status`"
          say: "Now when we type git status, it will show us that we are still in the middle of a merge and we have a file ready to be committed."
        - do: "Type `git add conflict.md`"
          say: "Simply add the conflict file to the staging area."
        - do: "Type `git commit -m\"fix merge conflict\"`"
          say: "And commit the file to complete the merge."
      production-notes:
  - lab:
      title: Handling a Merge Conflict
      id: CONT-CLI-21-lab-02
      presenter-script:
        - Now that you have seen the steps for handling a merge conflict, go ahead and clear the merge conflict you created earlier.
      steps:
        - description: "Clear your merge conflict."
          id: CONT-CLI-21-02-resolve
additional-labs:
additional-questions:
resources:
  - title: "Video: GitHub & Git Foundations - Merge"
    url: https://youtu.be/yyLiplDQtf0

---