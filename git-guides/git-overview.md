<!-- 

# Git Overview Page - Hub page that includes:

- What is Git?
- Why use Git?
- Install/Download Git
- GitHub Cheat Sheet link
- Mini command tutorial (click through for more)
- Mini GitHub call to action (why use GitHub)
- Mini GitHub tutorial (click through for more)

# General Specs
- Title: Git Guide
- URL: /git-guide/
- Meta Description: Everything you need to know about Git, from getting started to advanced commands and workflows.
- Focus Keyword: git (110,000)
- Secondary Keywords: what is git (8,100), how to use git (2,400) 
- Word Count: 1200+
- **The focus keyword should be in the page title, url, h1 and throughout body copy.**
- The secondary keywords are semantic variations of the focus keyword and are great to use in h2, h3 and other headings.
- Written from a marketing perspective, should have an informal voice and not be exclusively technical.
- Doesn’t need to exhaustively cover the technical intricacies of the specific git command – should be beginner friendly and include a lot of the “why” and a general overview of the “how”. Can link out to more in-depth technical resources where appropriate.

-->

# Git Guide

Everything you need to know about Git, from getting started to advanced commands and workflows.

## What is Git?

Git is distributed version control software. Version control is a way to save changes over time without overwriting previous versions. Being distributed means that every developer working with a Git repository has a copy of that entire repository - every commit, every branch, every file. If you're used to working with centralized version control systems, this is a big difference!

Whether or not you've worked with version control before, there are a few things you should know before getting started with Git:

- Branches are lightweight and cheap, so it's OK to have many of them
- Git stores changes in SHA hashes, which work by compressing text files. That makes Git a very good version control system (VCS) for software programming, but not so good for binary files like images or videos.
- Git repositories can be connected, so you can work on one locally on your own machine, and connect it to a shared repository. This way, you can push and pull changes to a repository and easily collaborate with others.

## Why Use Git?

Version control is very important - without it, you risk losing your work. With Git, you can make a "commit", or a save point, as often as you'd like. You can also go back to previous commits. This takes the pressure off of you while you're working. Commit often and commit early, and you'll never have that gut sinking feeling of overwriting or losing changes.

There are many version control systems out there - but Git has some major advantages. 

- Like we mentioned above, Git uses SHA compression, which makes it very fast. As long as you're working with text files, you won't need to worry about how many files you have, how big they are, or how many commits you make. Git can handle it!
- Git can handle merge conflicts, which mean that it's OK for multiple people to work on the same file at the same time. This opens up the world of development in a way that isn't possible with centralized version control. You have access to the entire project, and if you're working on a branch, you can do whatever you need to and know that your changes are safe.
- Speaking of branches, Git offers a lot of flexibility and opportunity for collaboration with branches. By using branches, developers can make changes in a safe sandbox. Instead of only committing code that is 100% sure to succeed, developers can commit code that might still need help. Then, they can push that code to the remote and get fast feedback from integrated tests or peer review. Without sharing the code through branches, this would never be possible.
- Ease of roll back - if you make a mistake, it's OK! Commits are immutable, meaning they can't be changed. (*Note: You _can_ change history, but it will create new replacement commits instead of editing the existing commits. More on that later!*) This means that if you do make a mistake, even on an important branch like master, it's _OK_. You can easily revert that change, or roll back the branch pointer to the commit where everything was fine. The benefits of this can't be overstated. Not only does it create a safer environment for the project and code, but it fosters a development environment where developers can be braver, trusting that Git has their back.


## Getting Started With Git

- A short description with a link out to the “Install Git” page.
- A short description of the Git workflow with a link out to the “Git Workflow” page.
- Potentially include Git workflow illustrations.
- “Learning Git” CTA.

## How to Use Git

### Learning & Mastering Git Commands

- A short description with a link out to the Git Cheat Sheet.
- Very simplified breakdown of the most basic commands with clear navigation to learn more about each one (this might be a good example).
- Again, potentially include illustrations from individual command pages here or more general learning illustrations.
- A link out the help pages for people who are looking for more specific GitHub related technical guidance

### Getting Started With GitHub

- Short paragraph introduction to GitHub.
- Learning Git CTA – people who are new to Git, should include GitHub flow as well.
- GitHub CTA – people who already know Git and just need a GitHub account.
