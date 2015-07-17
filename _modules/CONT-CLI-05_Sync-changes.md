---
layout: module
leadingpath: ../
title: Pushing Changes
pre-requisites: CONT-CLI-04_Two-stage-commit
learning-objective: Create a branch to separate feature work from the master branch.
screens:
  - video-slide:
      title: Pushing Changes
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: Show push diagram from training kit
          say: "Now that you have made some changes and committed them locally, it is time to push them up to the remote. In this case, our remote is GitHub.com, but this could also be your company's internal instance of GHE."
        - do: Type `git status`
          say: "Let's type git status again to check the status of our repository. You should receive a message stating that the working directory is clean."
        - do: Type `git push`
          say: "To push your changes to the remote you will type git push. Remember that earlier git set up a remote tracking branch to match our local branch with the one on GitHub. Since this has already occured, you simply need to type git push."
        - do: Navigate to the `class repository`
          say: "Now, if you navigate to the class repository, you will see a banner at the top of the page indicating You have recently pushed branches:"
        - do: Click `Compare & pull request`
          say: "Since you made your changes on your branch, GitHub assumes you would like to compare those changes to the master branch. You can simply click Compare & pull request to start a new pull request."
        - do: Create a pull request
          say: "Now you can create a pull request using the same process you learned earlier."
  - lab:
      title: Syncing Files with GitHub
      id: CONT-CLI-05-lab-01
      presenter-script:
        - Let's push the file to the remote and create a pull request.
      steps:
        - description: "Use the command line to push your changes to the remote."
          id: CONT-CLI-05-push
        - description:  "Go to the GitHub repo and create a new pull request."
          id: CONT-CLI-05-pull-request
          verifications:
            - verification-type: pull-request
              id: CONT-CLI-05-pull-request-verification
              success-message: "Great job - you created a pull request"
              failure-message: "It looks like you haven't created a pull request. Want to try again?"
additional-labs:
additional-questions:
resources:

---