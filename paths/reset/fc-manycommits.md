---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Too Many (small) Commits!
permalink: /reset/fc-02
next-page: /reset/fc-01
facilitator: false
sidebar:
  nav: "advanced"
main-content: |
  While working on your project, you might have made commits for every little change you made along the way and created a commit history that looks more like an avalanche of information as opposed to a succinct list of the changes you made to the branch.

  As with most things, Git comes equipped with the tools necessary tools to save you from yourself.

pushed: |
    The

    Gonna go rebase -i here. Wish me luck.


didnt-push: |
    If you haven't pushed your changes, you can adjust the commits you created without worrying about causing problems for other collaborators using the `reset` command. If you created files using the Bash or PowerShell scripts we provided, your commit message history should include 6 commits that look something like this:

        5950a1b adding file 4

    Those first 7 characters are going to be unique to your machine and is the SHA-1 hash assigned to that specific commit. We are going to use that hash identifier when using the `reset` command.

    1. Ensure you are on the correct branch and enter: `git log --oneline`.
    1. For this example, we are going to combine the commits associated with the addition of files 4, 5, and 6. So identify the SHA-1 associated with the commit for **adding file 3**.
    1. Enter the following: `git reset --soft SHA-1`, where SHA-1 is the SHA-1 associated with the `adding file 3` commit.
    1. Enter `git status`. You should see files 4, 5, and 6; in the Staging Area (aka ready to be committed).
    1. Enter: `git commit -m "Adding files 4, 5, and 6"`.

    Congratulations you just combined a bunch of commits into a single commit! Now, none of the other collaborators will know that you make **way** too many commits!

show-me-how:
tell-me-why: |

  ## Reset
  For more information about `reset`, check out the 'Tell me why' section in the [Commit Message Sucks](/on-demand/reset/fc-03) scenario.

  ## Rebase
  
---
