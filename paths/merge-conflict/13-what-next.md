---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
help: https://github.com/githubtraining/on-demand-merge-conflict/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
title: What Next?
permalink: /merge-conflicts/what-next/
next-page: /merge-conflicts/ide-intro/
sidebar:
  nav: "merge-conflicts"
main-content: |
  With the the merge conflicts resolved you know have a fully functional GitHub Pages based resume.

  ![you did it!](https://media.giphy.com/media/xT8qBswJpFXXVnMYVO/giphy.gif)

  #### Enable GitHub Pages

  Although you worked on a GitHub Pages-powered resume, GitHub Pages haven't been enabled for your repository so no one can see it. Follow these steps to enable GitHub Pages and officially publish your resume.

  1. Select the **Settings** tab.
  1. On the Options pane (the default pane opened when you click Settings), select the **Source** drop-down in the GitHub Pages section and select **master branch**.
  1. Click **Save**, the Settings tab will refresh, scoll down to the GitHub Pages section to see the link to your GitHub Pages site.

  #### Modifying Other Sections

  To modify the other sections of the resume, simply create a new branch and modify the the files found in the `/_data` folder. For instance, to modify the Projects section, edit the `/_data/projects.yml` file. After making your changes, create a new pull request with your branch and merge your changes.

  #### Modifying the Picture

  If you would like to change the image used on your resume you need to perform a few actions.

  1. Create a new branch, maybe name it something like, `new-avatar`.
  1. Navigate to the `images` folder and click the **Upload files** button.
  1. Drag and drop your image and commit your change by clicking **Commit changes**.
  1. Open the `/_layouts/resume.html` file and edit line 16. Replacing `images/bob-avatar.jpg` with `images/YourFileName`.
  1. Commit the change and create a pull request. After creating your pull request **merge** and **delete the branch**.


---
