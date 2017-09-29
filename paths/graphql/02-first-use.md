---
layout: simple-class
help: https://github.com/githubschool/graph-ql/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Use GraphQL for the First Time
permalink: /graphql/first-use
next-page: /graphql/first-query
facilitator: false
sidebar:
  nav: "github-graphql"
main-content: |

  ## Using GraphQL Explorer

  In this section, we are going to introduce you to a tool that enables you to experiment with GraphQL quickly and easily.

  ![animated gif of instructions outlined below](../images/gifs/graphql/first-query.gif)

  ### Running Your First GraphQL Query

   1. [Navigate to the GraphQL explorer](https://developer.github.com/v4/explorer/).
   1. Once the page has loaded, click the "Sign in with GitHub" button. If you don't have a GitHub account, [here are some instructions for getting an account setup](https://help.github.com/articles/signing-up-for-a-new-github-account/).  

      On your first log in, The GraphQL interface displays a sample query in the left pane that should look like this:

          # Type queries into this side of the screen, and you will
          # see intelligent typeaheads aware of the current GraphQL type schema,
          # live syntax, and validation errors highlighted within the text.

          # We'll get you started with a simple query showing your username!
          query {
            viewer {
              login
            }
          }

   1. Click the "Execute Query" button (it looks like a Play button) to run the query that is in the left pane and display the results in the right pane.

      Clicking "Execute Query" should present something that looks like this:


          {
            "data": {
              "viewer": {
                "login": "githubteacher"
              }
            }
          }


      The response from a query in GraphQL will be JSON, just like the query itself, and is returned in the exact same format as the request.

    1. Make changes to the sample query.

        In this case, we only asked GraphQL to tell us our login name, but what if we wanted to know more?

        Just below `login`, add a new line with the text `avatarURL`. Now your query should look like this:


            {
              viewer {
                login
                avatarUrl
              }
            }

  To learn more about the information you can request and what is being returned, check out "Tell me why" below :point_down:.

tell-me-why: |

  ### What Can I Access with the API?

  GitHub has made much of the data about a user accessible via the API. To learn more about the data available to the User object, you can check out the [user reference documents on developer.github.com](https://developer.github.com/v4/reference/object/user/).

  ### What Should I See?

  When you ran the query above, it should have returned something that looks like this:

      {
        "data": {
          "viewer": {
            "login": "githubteacher",
            "avatarUrl": "https://avatars3.githubusercontent.com/u/2132216?v=3"
          }
        }
      }


---
