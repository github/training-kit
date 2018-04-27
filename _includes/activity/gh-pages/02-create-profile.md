{% capture activity-text %}
# Activity: Create a Profile Page

Follow the steps below to update your public profile page!

Don't worry if you don't want to put your actual information up online. It's OK to just make stuff up. But if you do want to create an actual portfolio, we'd recommend doing that here!

1. On your personal repo, create a new branch named `profile-info`
2. Edit the `content.md` file located in the `/_index/` folder.
 - Add a new image
 - Add your name
 - Add a title
 - Add bio information
3. Commit the changes you made to the `content.md` file.
4. Edit the `_config.yml` file by changing the following:
  - title
  - email
  - twitter
  - github
  - description fields
5. Change the `baseurl:` to the **name of your GitHub repo**.
6. Change the `url:` to `http://username.github.io`, where `username` is your GitHub username.
7. Create a Pull Request comparing the `profile-info` branch to the base branch `gh-pages`.
8. Merge the Pull Request.
9. Look at your creation at `http://username.github.io/repo-name`.

{% endcapture %}

<div class="notice--warning">
  {{ activity-text | markdownify }}
</div>

Need help? **Open an issue** [in our class repository](https://github.com/githubschool/on-demand-github-pages/issues/new) for answers from GitHub trainers!
{: .notice--success}
