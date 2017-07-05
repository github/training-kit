---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Intro to GraphQL
permalink: /graphql/
next-page: /graphql/
facilitator: false
sidebar:
  nav: "github-graphql"
main-content: |

  When we introduced using APIs to scour **(CHANGE SCOUR, PLACEHOLDER)** existing information sources to populate your site, we briefly touched on GraphQL. In this section, we are going to introduce a tool that enables you to experiment with GraphQL queries quickly and easily, so lets get started.

  ### Navigating to GraphiQL
   1. Click on this [link](https://developer.github.com/v4/explorer/).
   1. Once the page has loaded, click the "Sign in with GitHub" button. If you don't have a GitHub account, here are some instructions for getting an account setup **ADD LINK TO ACCOUNT CREATION INSTRUCTIONS**.  

  After logging in, The GraphiQL interface displays a sample query in the left pane that should look like this:

  ```
  # Type queries into this side of the screen, and you will
  # see intelligent typeaheads aware of the current GraphQL type schema,
  # live syntax, and validation errors highlighted within the text.

  # We'll get you started with a simple query showing your username!
  query {
    viewer {
      login
    }
  }
  ```

  If we click the Execute Query button (looks like a Play button) it will run the query that is in the left pane and display the results in the right pane.

  Clicking Execute Query should present something that looks like this:

  ```
  {
    "data": {
      "viewer": {
        "login": "githubteacher"
      }
    }
  }
  ```

  Your result should look similar to the results displayed above, however, `githubteacher` should be replaced with your username (or login as the query displays). 

  #### Goals of this page based on outline
  - instructions for navigating to GraphiQL on web UI
    - https://developer.github.com/v4/explorer/
  - interact with interface, show how it works, live data
  - tell me why, can explain differences between rest and graphql
  - Does this have to be different than page 3, or could we combine?


show-me-how:
tell-me-why:
---
