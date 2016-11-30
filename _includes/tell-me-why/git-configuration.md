## Introducing Git Configuration

Git uses config settings to customize your local working environment based on your preferences. You can do a lot with Git config, but we start with the basics.

### Configuration Levels

Git allows you to set configuration options at three different levels.

  - `--system` These are system-wide configurations. They apply to all users on this computer.
  - `--global` These are the user level configurations. They only apply to your user account and will be applied to every repository you create or clone under your account.
  - `--local` - These are the repository level configurations. They only apply to the specific repository where they are set.

The default value for git config is `--local`. `--local` has precedence so setting something at the local level will override settings at global or system level.

### Taking Git Config Further

For more information on customizing Git with git config, check out [this chapter from ProGit](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration).
