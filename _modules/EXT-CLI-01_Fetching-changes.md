---
layout: module
leadingpath: ../
title: Fetching Changes from the Remote
pre-requisites: CONT-CLI-08_Workflow-review
learning-objective: Fetch changes from the remote and merge them into your local repository.
screens:
  - image-slide:
      title: Fetching Changes from the Remote
      image: push-fetch-merge.jpg
      presenter-script:
        - Frequently, collaborators will make changes to our files during the Pull Request process. Before we can go on, we will need to update our local copy of the file.
        - We use push to send our changes to the remote, but we use fetch or pull to retrieve changes from the remote. When we fetch the files from the remote we download a read-only copy of the new commits that have been added to the branch since our last fetch. We will then need to merge these read only copies into our local branch.
  - video-slide:
      title: Fetching Changes from the Remote
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Open the CLI"
          say: "Let's go back to our terminal window."
        - do: "Type `git checkout master`"
          say: "Since our changes have already been merged to master on the remote, let's go ahead and checkout to our master branch."
        - do: "Type `git fetch origin`"
          say: "Now we will type git fetch. We will include origin to tell Git that it is fetching from the remote."
        - do: "Type `git status`"
          say: "After the fetch is complete, let's check our status."
        - do: "Type `git merge origin/master`"
          say: "Finally, we will type git merge. When we do a merge, we must be checked out to the branch we are merging into. In the merge command, we tell Git which branch we would like to merge into our local branch. In this case, it is origin/master."
      production-notes:
  - lab:
      title: Fetching Changes
      id: CONT-EXT-CLI-01-lab-01
      presenter-script:
        - Let's fetch the changes made on the remote.
      steps:
        - description: "Fetch the changes."
          id: EXT-CLI-01-fetch
        - description: "Merge the fetched changes into your local copy of the repository."
          id: EXT-CLI-01-merge
additional-labs:
additional-questions:
resources:

---