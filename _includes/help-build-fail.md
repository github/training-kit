## Help: My Build Failed

The class repository is using continuous integration through [Travis CI](https://travis-ci.org) to run tests on the code you have entered. To put it simply, it is checking to make sure the syntax is correct in your file.

The files we are using are very picky. If you made any mistakes, you will see a message that your build has failed. This usually means that the text you entered is incorrect. Check the syntax carefully against the instructions and edit your file as needed.

When you commit your changes, Travis CI will re-check your file.

Keep doing this until you see a message that the build has passed. If you need help, don't forget you can @ mention `@githubteacher` in your pull request.

### Help With Specific Issues

The build can fail because of many reasons. By looking at the details of the **Travis CI** log it might help you to troubleshoot your code.

1. Open the _Pull request_  
2. Go to the bottom to the "merge" icon to the section where it says 'checks have failed'.  
  Here you'll see a lot of :x:. Not good.  
3. Open the `Details`  

The build log of Travis CI may appear a little cryptic. But with some careful reading you might be able to pull out the reason why your build is failing. (By the way, if you think the `job log` is cryptic, try and click on the `Raw log`.)

The build script is a series of commands. It might be helpful to know that **every new command starts with a `$` sign**. Such commands can be something simple or a new (sub)script. The individual properties of your _branch_ are tested in individual scripts. For example, **Travis CI** very early on tests whether your file is formatted as an appropriate "`.yaml` file".

#### 404 error
Somewhere down the cascade of tests **Travis CI** will check if the URL following `pageUrl` actually exists. The test and the complete build will fail if a website does not exist (a "404 error").

It is possible you might have mistyped your URL or something went wrong when you tried to publish your website. It is also possible that users who previously merged their branch with the master have sadly deleted their repository and their website disappeared.

Try and discover in the log which URL is causing a 404 error. You can double check whether the website exist by copying it into your browser.

Because you are working in your own branch it is safe to change the code however you like. If you see something that can be fixed easily you could just edit the offending file. For instance you can replace the broken URL with something that does exist (e.g. `github.com`).
A more rigorous solution would be to delete the file altogether.

Once your fix is correct and the build is no longer failing, you are ready to merge your branch with the `master`. You might get some merge conflicts you will need to address first. Ask `@githubteacher` if you get stuck.
