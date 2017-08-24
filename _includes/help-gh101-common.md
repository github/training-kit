### Troubleshooting Common Issues

These are a couple of the reasons that builds can fail in this class. If your pull request is not passing and can't be merged, double check the following things:

#### File Name is Incorrect

The file for the class should be in the `/_pins` folder and should be named `YOUR-USERNAME`.json. Double check to make sure that:

 - Your file isn't in the: `/_pin` or `/pins` folders.
 - Your file doesn't end with: `.jason`, `.md`, `.txt`.

#### Format of the File is Incorrect

The contents of your `.json` file should look like this:

  ```
  ---
  githubHandle: YOUR-USERNAME
  latitude:
  longitude:
  ---

  ```
Double check that:

- You included 3 dashes before and after your code `---` and not `...` or other characters.
- The `H` in `Handle` is capitalized
- The spelling of `Handle`, `latitude`, and `longitude`.
