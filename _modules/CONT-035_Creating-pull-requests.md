---
layout: module
leadingpath: ../
title: Creating Pull Requests
pre-requisites: CONT-03_Creating-files-platform
learning-objective: Creating a pull request.
screens:
  - image-slide:
      title: Understanding Pull Requests
      image: pull-request-icon.jpg
      presenter-script:
        - Pull Requests are used to propose changes to the project files. A pull request introduces an action that addresses an Issue. A Pull Request is considered a "work in progress" until it is merged into the project. Now that you have created a file, you will open a pull request to discuss the file with your team mates.
  - video-slide:
      title: Creating a Pull Request on GitHub
      video: http://youtu.be/kJr-PIfLDl4
      video-script:
        - do: Show `Your recently pushed branches:` banner
          say: "GitHub knows that you have added changes to your branch and helpfully recommends that you start a pull request."
        - do: "Click `Compare & Pull Request`"
          say: "Go ahead and click the big green button to start your pull request."
        - do: "Show `base:` and `compare:` drop downs"
          say: "Notice that we can use the drop down here to compare any two branches. We will leave the defaults selected."
        - do: "Show default pull request message"
          say: "GitHub pre-populates the commit message as the pull request title. You can change this to help your collaborators better understand the intent of the change."
        - do: "Leave a comment"
          say: "Here you can leave a comment to describe the changes you made and why. As a best practice, you should reference the original issue or issues using the # notation."
        - do: "Click `Create pull request`"
          say: "When you are finished, choose the option to create a pull request."
        - do: "Show the `Conversation` view"
          say: "Similar to the discussion thread on an Issue, a Pull Request creates a discussion about the changes being made to the repository. This discussion is found in the Conversation tab."
        - do: "Show the `Commits` view"
          say: "The commits view contains information about who has made changes to the files. Each commit is an updated view of the repository, allowing us to see how changes have happened from commit to commit."
        - do: "Show the `Files changed` view"
          say: "The Files changed view allows you to see the change that is being proposed. We call this the `diff`. Notice that some of the text is highlighted in red. This is what has been removed. The green text is what has been added."
        - do: "Enter a `line comment` in the Files changed view"
          say: "If you notice something that needs to be changed, you can click on the line number in this view to create a line comment. Line level comments are a great way to give additional context on recommended changes."
        - do: "Return to the `Conversation` view"
          say: "Notice that the line comment was added to the main conversation."
        - do: "Add a comment to the discussion"
          say: "If your comment is more general in nature, you can also add a comment to the Pull Request using the same method we learned for Issues."
        - do: "Add a `:+1:` emoji"
          say: "Most project teams require someone to sign off on the change before it is merged. We like to use emoji to show our approval. In the previous lab you created a file, next you will create a pull request for your file."
      production-notes:
  - lab:
      title: Creating a Pull Request
      id: CONT-035-lab-01
      presenter-script:
        - Now that you have added a new file, let's create a pull request.
      steps:
        - description: "Create a Pull Request, @mentioning the instructor. Assign the Pull Request to yourself."
          id: CONT-035-create-pull-request
          verifications:
            - verification-type: pull-request
              id: CONT-035-create-pull-request-verification
              success-message: "Great job - you created a Pull Request"
              failure-message: "It looks like you haven't created a Pull Request. Want to try again?"
        - description: "Add a line comment to someone else's pull request in the class repository."
          id: CONT-035-comment
          verifications:
            - verification-type: pull-request-review-comment
              id: CONT-035-comment-verification
              success-message: "Great job - you commented on a pull request"
              failure-message: "It looks like you haven't commented on a pull request. Want to try again?"
additional-labs:
additional-questions:
resources:
  - title: Using Pull Requests
    url: https://help.github.com/articles/using-pull-requests/

---