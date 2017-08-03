# Electron 102: Packaging Electron Apps

Main goal: Going from local to something someone can download

Outstanding questions: 
?? Do we need to have different guides here?
Maybe using something like this video to help us: https://www.youtube.com/watch?v=GC3oMVdnmVg
- Packaging from Mac to Mac
- Packaging from Mac to Linux
- Packaging from Mac to Windows (I needed to `brew cask install xquartz`, and `brew install wine`, and was prompted to install a wine mono package from a website which I did but don't know if it was necessary)
- Packaging from Windows to Mac
- Packaging from Windows to Linux
- etc...?

## Getting Started with `electron-packager`

  ### Packaging for different environments
  - Needs for Windows, OSX, and Linux
  - Packaging can be done for each OS, but the UI isn't automatically made to look native in the process
  - Many factors make this somewhat complicated. It is a different process based on your OS and the OS you're trying to go to.

  ### Tools to use
  - [How to do this with Electron](https://github.com/electron/electron/blob/master/docs/tutorial/application-packaging.md)
  - [Other libraries to use](https://github.com/electron-userland/electron-packager)


# Walkthrough of Process
- `npm install electron-packager --save-dev`
- Add build script `"build": "electron-packager . app-name --ignore=node_modules/electron-*"` in "scripts" of package.json (ignore all dependency apps the same way)
- `npm run build`


## Adding an Icon
- Including the icon image for the program
- give recommendations on what type of image is allowed (open or public domain) and what size would be best.
- possibly include [icon library](https://useiconic.com/open) suggestions
- Replace icon in Contents>Resources directory in build script: "build": "electron-packager . app-name && cp Icon.icns Path/To/New/Icon"
- Delete app: `rm -rf AppName.app`
- Rebuild: `npm run build`

## Stopping people from editing source code with asar
- Archive capability with asar
- `npm install asar --save-dev`
- Create another script in package.json called "package": "asar pack AppName.app/Contents/Resources/app MyApp.app/Contents/Resources/app.assar"
- Run `npm package`, and delete the app directory

## Testing that the packages work
- How to test the packages
- Allude to automated testing but probably not walk through it

## Using electron-packager, how to clean up old binaries and what that means
- ?

## Hooray! Next, let's learn how to share
