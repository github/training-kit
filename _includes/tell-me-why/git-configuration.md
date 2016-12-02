## Introducing Git Configuration

Git uses config settings to customize your local working environment based on your preferences. You can do a lot with Git config, but we start with the basics.

### Configuration Levels

Git allows you to set configuration options at three different levels.

  - `--system` These are system-wide configurations. They apply to all users on this computer.
  - `--global` These are the user level configurations. They only apply to your user account and will be applied to every repository you create or clone under your account.
  - `--local` - These are the repository level configurations. They only apply to the specific repository where they are set.

The default value for git config is `--local`. `--local` has precedence so setting something at the local level will override settings at global or system level.

### What does autocrlf do?

If you're using Git to collaborate with others on GitHub, ensure that Git is properly configured to handle line endings.

Every time you press return on your keyboard you're actually inserting an invisible character called a line ending. Historically, different operating systems have handled line endings differently.

When you view changes in a file, Git handles line endings in its own way. Since you're collaborating on projects with Git and GitHub, Git might produce unexpected results if, for example, you're working on a Windows machine, and your collaborator has made a change in OS X.

For more information about autocrlf, see the [GitHub Help documentation](https://help.github.com/articles/dealing-with-line-endings/).

### Taking Git Config Further

For more information on customizing Git with git config, check out [this chapter from ProGit](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration).
