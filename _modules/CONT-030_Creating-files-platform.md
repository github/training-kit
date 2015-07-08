---
layout: module
leadingpath: ../
title: Creating Files on GitHub
pre-requisites: CONT-02_Using-branches
learning-objective: Add a new file using GitHub.com or GitHub Enterprise.
screens:
  - video-slide:
      title: Creating Files on GitHub
      video: http://youtu.be/47M6Is7pIB8
      video-script:
        - do: Navigate to the `class repository`
          say: Now that you have been introduced to the GitHub flow and branching, let's see how they are used in the real world. In order to respond to the issue you created earlier, you need to create a file.
        - do: Select your `branch`
          say: Let's make sure we are on our branch before we make any changes.
        - do: Click the `+` button to add a new file
          say: The issue I am resolving said I need to add an introduction file. So, let's start by clicking on the + button to add a new file.
        - do: Name the file `<firstname-lastname>.md`
          say: Now you can create a new file directly in GitHub. I am going to name the file <firstname-lastname>.md. The .md is important because it tells GitHub to use markdown to render the file.
        - do: Add a folder to the file name by typing `docs/` in front of the file name
          say: Notice that our instructions told us to add the file to the docs directory. You can add it to a subdirectory by simply adding the subdirectory and a trailing slash to the file name.
        - do: Type text in the new file
          say: Let's add some introduction information to our file
        - do: Click in the `Edit new file` field
          say: You can use Markdown to enter some basic text.
        - do: Scroll to `Commit new file`
          say: When you are finished editing your file, you will scroll down to the bottom of the page. This is where you will commit your changes.
        - do: Add a `Commit message`
          say: GitHub tries to be helpful by suggesting a commit message here. You can keep the recommended commit message or you can create your own. **As a best practice, commit messages should be descriptive but brief - no more than 50 characters**
        - do: Show `extended description`
          say: If you would like to add more information to your commit message, you can do so in the extended description field.
        - do: Select Commit directly to the `firstname-lastname-intro` branch
          say: Since we are on our branch, GitHub gives us the option to commit the new file directly to our branch.
        - do: Click `commit new file`
          say: We are ready to commit our file. On the next page you will complete the steps to add a file of your own.
      production-notes:
  - lab:
      title: Creating a New File
      id: CONT-030-lab-01
      presenter-script:
        - Let's respond to the issue you created earlier by creating a file on your branch.
      steps:
        - description: "Add a new bio file to the docs folder. Name the file firstname-lastname.md."
          id: CONT-030-create-file
          verifications:
            - verification-type: file-created
              id: CONT-030-create-file-verification
              success-message: "Great job - you created a new file"
              failure-message: "It looks like you haven't created a file. Want to try again?"
additional-labs:
additional-questions:
resources:

---