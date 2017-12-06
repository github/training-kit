---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Managing Merge Conflicts
permalink: /windows/merge-conflict
next-page: /windows/congrats
sidebar:
  nav: "windows"
main-content: |
  Merge Conflicts

  ## Practice a Merge Conflict

  If you would like to try to fix a merge conflict using the GitHub Extension for Visual Studio, use the following steps:

  1. Click **Create** under GitHub on the Team Explorer Pane.
  1. Name the new GitHub repository `Conflicts`, and include a quick description.
  1. Click **Create**.
  1. While on the `master` branch, create a **New branch...** named `Change1`. Uncheck the **Checkout branch** option then click the **Create Branch** button.
  1. Repeat the last step, but name the other branch `Change2`, making sure that it's based on the `master` branch.

       > Even though we haven't made changes to any of the branches, use `master` as the branch your new branches are based on to ensure you don't encounter any issues.

  1. Checkout the `Change1` branch and add the following content on line 2 and line 3:
      - Line 2: I am making a change on line 2.
      - Line 3: I am making a change on line 3.
  1. Stage and Commit the changes you made on the **Change1** branch.
  1. Checkout the `Change2` branch and add the following content on line 2 and line 3:
  - Line 2: I am making a change on line II.
  - Line 3: I am making a change on line III.
  1. Stage and Commit the changes you made on the **Change2** branch.
  1. Checkout the `master` branch.
  1. On the **Home** screen of the **Team Explorer** pane, select **Branches**.
  1. Select **Merge**.
  1. In the **Merge from branch** drop-down, select **Change1**.
  1. Click the **Merge** button.
  1. On the **Home** screen of the **Team Explorer** pane, select **Branches**.
  1. Select **Merge**.
  1. In the **Merge from branch** drop-down, select **Change2**.
  1. Click the **Merge** button.
  1. A _merge conflict_ has occurred, click the **Conflicts: 1** option from the Team Explorer - Branches pane.
  1. Select the README.md file and click **Merge**.

      > Explore the new **Merge** window that is displayed. Two panes are displayed, **Source** and **Target**. The Source pane is based on the **Change2** branch and the Target pane is based on the **master** branch.  
  1. Click the **Take Right** button.
  1. Save the change by clicking the **Save** button or pressing `CTRL+S` on your keyboard.
  1. Click **Accept Merge**. The `README.md` file now displays the changes you selected.

tell-me-why: |
---
