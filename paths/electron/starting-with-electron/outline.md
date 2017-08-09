# Electron 101: Building an Electron App from Scratch

## Getting Started
- Not prereqs
   - Baseline things to get started:
      - computer
      - git installed
      - github account
      - excited to learn new things
   - Helpful but not necessary to complete course
      - Basic website knowledge (html / css)
      - Understanding of what Javascript is
- Listed to make this course more accessible to all, regardless of JS skill
- Let users know that full stack JS knowledge is best for Electron development
    - Provide links to freeCodeCamp JS intro courses perhaps?
    - Explain that JS knowledge is useful for enhancing the application, but won't be necessary to complete the course
- Point to resources

## Creating the Boilerplate Electron App
On this page, the user creates a directory and sets it up with the basic structure of any Electron App.
- mkdir
- npm init
- npm install electron

## Make it a Git Repository
On this page, the user types `git init` and pushes to a bare repo on GitHub
- making it a git repository
  - this might be an opportunity for us to show them how to take an existing project and ADD it to GitHub since we normally have them set the repo up on GH then clone it
- Callback again to existing git courses in on-demand
- Important things for `.gitignore` in this type of project

## Creating the Files for the App
Q: At what point do we start using branches if we're using git?
On this page, the user creates the files that will be customizable and directly impact how the program looks and behaves. (index.html, style.css, main.js)
- creating the files that we'll need within the directory
- explaining all files at high level

## Starting the app
Now, the user tries to see the app and see their html page
- electron .
- what to look for
- developer tools
- TROUBLESHOOTING in case they can't see it here

## add to index.html
On this page, the user types very simple "hello world" type text on the index.html page.
- Breakdown the specific things contained within the `.html` file to show how it makes the application work
- Type or copy/paste enough to see a home page
- recall the resources in the beginning for users who this goes over their heads
- Save and commit changes
- Starting the app again
  - electron .
  - what to look for
  - developer tools
  - troubleshooting

## Add to style.css
- Adds to the `style.css` file, and links to it from `index.html`.
- As the others, points to resources to learn css
- Save and commit changes
- Starting the app again
  - electron .
  - what to look for
  - developer tools
  - troubleshooting

## Add to main.js
- Add to the `main.js` file, link to it from `index.html`
- Do we need to include jQuery for this to be worthwhile?
- callback to resources to learn JS
- discuss how it can be made more complex
   - maybe we can add some "extra credit" resources where we say, try to add X functionality and provide the answer in a TMW section (similar to the GraphQL course)
- Starting the app again
 - electron .
 - what to look for
 - developer tools
 - troubleshooting

## Celebrate! Point to what's next
