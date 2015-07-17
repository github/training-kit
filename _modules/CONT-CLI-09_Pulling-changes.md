---
layout: module
leadingpath: ../
title: Pulling Changes from the Remote
pre-requisites: CONT-CLI-08_Workflow-review
learning-objective: Pulling changes from the remote into your local repository.
screens:
  - image-slide:
      title: Pulling Changes from the Remote
      image: push-pull.jpg
      presenter-script:
        - Frequently, collaborators will make changes to our files during the Pull Request process. Before we can go on, we will need to update our local copy of the file.
        - We use push to send our changes to the remote, but we use pull to retrieve changes from the remote. When we pull the files from the remote git downloads a copy of the new commits that have been added to the branch since our last pull and then attempts to merge them into our local branch.
  - video-slide:
      title: Pulling Changes from the Remote
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Open the CLI"
          say: "Let's go back to our terminal window."
        - do: "Type `git checkout master`"
          say: "Since our changes have already been merged to master on the remote, let's go ahead and checkout to our master branch."
        - do: "Type `git pull`"
          say: "Now we will type git pull. Git already knows that our local branch master is related to the remote branch master, so we do not need to tell git where to pull from."
        - do: "Show output"
          say: "After the pull is complete, git provides a report of the changes that were pulled from the remote and lets us know they were successfully merged."
        - do: "Type `git branch`"
          say: "You will notice that, even though you deleted the branch on GitHub, the local copy of your branch still exists."
        - do: "Type `git branch --merged`"
          say: "To see which local branches have already been merged into master, you can add the --merged option to the git branch command. Your branch should be listed. Generally, this means it is safe to delete the branch."
        - do: "Type `git branch -d <branch-name>`"
          say: "To delete the branch, simply use the git branch command with the -d option."
      production-notes:
  - lab:
      title: Pulling Changes
      id: CONT-CLI-09-lab-01
      presenter-script:
        - Let's update your local copy of the repository.
      steps:
        - description: "Retrieve the changes from the remote."
          id: CONT-CLI-09-pull
additional-labs:
additional-questions:
resources:

---