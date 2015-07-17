---
layout: module
leadingpath: ../
title: Creating a Repository on GitHub
pre-requisites: CONT-CLI-05_Sync-changes
learning-objective: Describe best practices for creating a new repository and adding collaborators on GitHub.
screens:
  - image-slide:
      title: Options for Creating a Repository
      image: repository-options.jpg
      presenter-script:
        - "All of the work we do in Git and GitHub happens inside of a repository. There are two ways to get started working with a new repository. You can:"
        - "1. Clone the repository from a remote"
        - "2. Initialize Git in an existing local directory"
        - "Since this class is designed to teach you how to use Git and GitHub effectively, we will focus on how to structure our work to support collaboration."
        - "If I want to collaborate with you on a project then I will start a repository on GitHub. Let's discuss some best practices for GitHub repositories now."
  - video-slide:
      title: Creating a Repository on GitHub
      video: https://www.youtube.com/watch?v=r5C6yXNaSGo
      video-script:
        - do: "Click the dropdown arrow next to the `+` and select `Create New Repository`"
          say: "Creating a new repository is just a few clicks on GitHub. First, select the option to Create New Repository"
        - do: "Enter a repository name"
          say: "The name of your repository must be unique to your account. If you are feeling un-creative, GitHub even offers some fun repository name suggestions."
        - do: "Enter the repository description"
          say: "The repository description is a short description of what your repository is about."
        - do: "Select `Public`"
          say: "You can choose to make your repository public or private. If you create a public repository on GitHub.com, then anyone with a GitHub.com login can view, clone or fork your project BUT they cannot push changes to the repository unless you add them as a collaborator. Public repositories are free. If you choose to make your repository private then you must give explicit permissions for viewing, cloning, etc. You will pay a small fee for private repositories."
        - do: "Click `Initialize with a README`"
          say: "The README is the welcome mat to your repository and has special powers on GitHub. It allows you to give a proper introduction to your repository. GitHub will automatically render any README it finds in your repository and its sub-directories just below the file tree."
        - do: "Show gitignore options"
          say: "A gitignore file tells git which types of files should not be tracked. You can use the drop down here to choose from a list of commonly used languages to pre-populate your gitignore file with file types that are frequently ignored for those languages. You can always edit the gitignore directly for greater precision."
        - do: "Show license and the information icon"
          say: "A project isn't open source if it doesn't have a license. There are many different licenses to choose from and we realize it can be confusing to find the right one, so we have created this helpful license selection tool to help you get started."
        - do: "Click `Create Repository`"
          say: "Now let's create our repository."
        - do: "Click `Settings > Collaborators`"
          say: "Since I want to work with others on this project, I need to add them as collaborators. This process is slightly different for organization accounts."
        - do: "Start typing `githubstudent`"
          say: "I can search for collaborators and add them by entering the first few letters of their username."
      production-notes:
  - lab:
      title: Cloning the Repository
      id: CONT-CLI-06-lab-01
      presenter-script:
        - Now that we have created a repository on GitHub, let's clone the new repository to our desktop.
      steps:
        - description: "Clone the new repository to your desktop."
          id: CONT-CLI-06-clone
additional-labs:
additional-questions:
resources:

---