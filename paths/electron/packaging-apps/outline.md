# Electron 102: Packaging Electron Apps

Main goal: Going from local to something someone can download

## Packaging for different environments
- Needs for Windows, OSX, and Linux
- Packaging can be done for each OS, but the UI isn't automatically made to look native in the process
- Many factors make this somewhat complicated. It is a different process based on your OS and the OS you're trying to go to.

## Tools to use
- [How to do this with Electron](https://github.com/electron/electron/blob/master/docs/tutorial/application-packaging.md)
- [Other libraries to use](https://github.com/electron-userland/electron-packager)


## Walkthrough of Process from Mac
Do we want to do this from Windows, too?
- `npm i electron-packager --save-dev`
- Add build script `"build": "electron-packager . app-name"` in "scripts" of package.json
- `npm run build`


## Adding an Icon
- Including the icon image for the program
- give recommendations on what type of image is allowed (open or public domain) and what size would be best.
- possibly include [icon library](https://useiconic.com/open) suggestions
- Replace icon in Contents>Resources directory in build script: "build": "electron-packager . app-name && cp Icon.icns Path/To/New/Icon"
- Delete app: `rm -rf AppName.app`
- Rebuild: `npm run build`

## Common Challenges
- Problems that come up

## Testing that the packages work
- How to test the packages
- Allude to automated testing but probably not walk through it
