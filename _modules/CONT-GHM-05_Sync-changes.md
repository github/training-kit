---
layout: module
leadingpath: ../
title: Synchronizing Changes
pre-requisites: CONT-GHM-04_Two-stage-commit
learning-objective: Push changes from local computer to the remote using GitHub Desktop.
screens:
  - video-slide:
      title: Pushing Changes
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Show push diagram from training kit"
          say: "Now that you have made some changes and committed them locally, it is time to push them up to the remote. The GitHub Desktop App allows you to quickly combine the steps of pushing your changes to the remote and creating a pull request. Let's see how it is done."
        - do: "Click `Pull Request`"
          say: "After you have committed your changes, click the Pull Request button."
        - do: "Type the Pull Request title and description"
          say: "Complete the fields of the pull request just like you would directly in the web based GitHub platform."
        - do: "Click `Create Pull Request`"
          say: "And then click create pull request. The GitHub App will do all of the work of pushing your changes and creating a pull request. When it is finished, you will receive a confirmation message."
      production-notes:
  - lab:
      title: Syncing Files with GitHub
      id: CONT-GHM-05-lab-01
      presenter-script:
        - Let's push the file to the remote and create a pull request.
      steps:
        - description: "Use the GitHub Desktop App to sync your changes with the remote."
          id: CONT-GHM-05-app-sync
        - description:  "Go to the GitHub repo and create a new pull request."
          id: CONT-GHM-05-pull-request
          verifications:
            - verification-type: pull-request
              id: CONT-GHM-05-pull-request-verification
              success-message: "Great job - you created a pull request"
              failure-messages: "It looks like you haven't created a pull request. Want to try again?"
additional-labs:
additional-questions:
resources:

---