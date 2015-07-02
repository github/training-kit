---
layout: module
leadingpath: ../
title: Cloning a Repository
pre-requisites: CONT-CLI-01_Basic-configuration
learning-objective: Create a branch to separate feature work from the master branch.
screens:
  - image-slide:
      title: Cloning a Repository
      image: clone-diagram.jpg
      presenter-script:
        - Let's revisit the steps we just covered, but this time, we will use a local copy of the file and the command line to make the changes requested in the issue.
        - First, we will need to create a clone of the repository.
        - When you clone a GitHub repository you are creating a copy of everything in that repository, including its history. This is one of the benefits of a DVCS like git - rather than being required to query a slow centralized server to review the commit history, queries are run locally and are lightning fast.
  - video-slide:
      title: Cloning a Repository
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: Navigate to the `class repository`
          say: "To create a clone of a GitHub repository, you will navigate to the Code view."
        - do: Create a new branch named `<githubID>-more-bio`
          say: Let's start by creating a new branch. Starting your branches on GitHub is a good best practice to adopt. It lets others know you are working on a specific branch and prevents merge conflicts later in the process.
        - do: Copy the `clone URL`
          say: "Now, since we want to work locally let's copy the clone URL to our clipboard."
        - do: Open the CLI
          say: And go back to our terminal window. CD into the directory where you would like to copy the repository. This can be anywhere in your local file system.
        - do: Type `git clone <URL>`
          say: Now you will type `git clone` and then paste in the URL. The repository will be cloned into a new directory in this location.
        - do: Type `cd <dir>`
          say: CD into the repository you just created.
        - do: Type `git status`
          say: "`git status` is a command you will use often to verify the current state of your repository and the files it contains. Right now, we can see that we are on branch master, everything is up to date with origin/master and our working directory is clean. "
        - do: Type `git branch`
          say: If you type git branch you will see a list of local branches. Notice that the branch you created before you cloned the repository doesn't show up here.
        - do: Type `git branch --all` or `git branch -a`
          say: "If you want to see all of the branches, including the read-only copies of your remote branches, you can add the `--all` option or just `-a`"
        - do: Type `git checkout <branch-name>`
          say: "To checkout the branch you created online, type git checkout and the name of your branch. You do not need to type `remotes/origin` in front of the branch - only the branch name. You will notice a message that says your branch was set up to track the same remote branch from origin."
  - lab:
      title: Cloning a Repository
      id: CONT-CLI-02-lab-01
      presenter-script:
        - Let's go ahead and clone this repository to your local desktop.
      steps:
        - description: Create a new branch. Name the branch githubID-more-bio, using your githubID.
        - description: Clone the repository to your desktop.
          id: CONT-CLI-02-clone
        - description: Checkout your branch.
          id: CONT-CLI-02-checkout
additional-labs:
additional-questions:
resources:
  - title: Cloning a Repository
    url: https://help.github.com/articles/cloning-a-repository/

---