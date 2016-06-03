---
layout: module
leadingpath: ../
title: Editing Pull Request Files
pre-requisites: CONT-035_Creating-pull-requests
learning-objective: Edit a file that is currently part of a pull request.
screens:
  - image-slide:
      title: Editing Pull Request Files
      image: discussion-logo.jpg
      presenter-script:
        - Since you created the pull request, you will be notified when someone adds a comment. In this case, the comment tells us we need to make a change to the file we have already created. Let's see how GitHub makes this easy.
  - video-slide:
      title: Editing Pull Request Files
      video: http://youtu.be/F0IvcyTwDt4
      video-script:
        - do: "Navigate to your `pull request`"
          say: "Let's go back to your pull request and make the edits requested by your collaborators."
        - do: "Open the `files changed` view"
          say: "Take a look at the change requested and then go to the files changed view."
        - do: "Click the `edit` icon"
          say: "Click the pencil icon to access the file editor."
        - do: "Edit the file"
          say: "Make the requested changes."
        - do: "Add a `commit message`"
          say: "The commit message should describe what was changed in the present tense. For example, Add favorite color."
        - do: "Choose the option to `Commit directly to your branch`"
          say: "Since we accessed our file through the pull request, GitHub helpfully directs us to commit our changes to the same branch."
        - do: "Click `Commit changes`"
          say: "And then click commit changes."
        - do: "Click the `Commits` tab"
          say: "If you want to see what was changed in a specific commit, you can go to the Commits tab and click on the Commit ID. Go ahead and check your own pull request now to see if you need to make any changes."
      production-notes:
  - lab:
      title: Editing Pull Request Files
      id: CONT-04-lab-01
      presenter-script:
        - Let's make the changes requested by our teammates.
      steps:
        - description: "Go back to your pull request and make the requested changes. Commit the changes on the file directly to the feature branch and @mention the person who made the request."
          id: CONT-04-edit-file
          verifications:
            - verification-type: file-modified
              id: CONT-04-edit-file-verification
              success-message: "Great job - you edited a file on a pull request"
              failure-message: "It looks like you haven't edited a file on your pull request. Want to try again?"
additional-labs:
additional-questions:
resources:
  - title: Using Pull Requests
    url: https://help.github.com/articles/using-pull-requests/

---