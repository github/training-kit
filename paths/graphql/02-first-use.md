---
layout: simple-class
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

  When we introduced APIs, the technology that allows programs to interact with existing information, we briefly mentioned GraphQL. In this section, we are going to use a tool that enables you to experiment with GraphQL quickly and easily.

  ### Navigating to GraphQL
   1. [Navigate to the GraphQL explorer](https://developer.github.com/v4/explorer/).
   1. Once the page has loaded, click the "Sign in with GitHub" button. If you don't have a GitHub account, [here are some instructions for getting an account setup](https://help.github.com/articles/signing-up-for-a-new-github-account/).  

      After logging in, The GraphiQL interface displays a sample query in the left pane that should look like this:

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


      Your result should look similar to the results displayed above, however, `githubteacher` should be replaced with your username (or login as the query displays).

  1. Make a minor change to find the URL of your avatar on GitHub. Add the following code to your query, so it will return a URL to your avatar image.

      ```
      avatarUrl { }
      ```

      To see how to add the `avatarUrl` **field** click on "Tell me why" below :point_down:.

show-me-how:

tell-me-why: |

  ### Using `avatarUrl`

  At the end of the lesson, we provided an opportunity for you to experiment using the `avatarUrl` field. If you weren't able to get the query to run, or you just want to see how you would add additional fields to your query, you can make your query look like the following:

      {
        viewer {
          login {
          }
          avatarUrl {
          }
        }
      }      

  This will present the following results:

      {
        "data": {
          "viewer": {
            "login": "githubteacher",
            "avatarUrl": "https://avatars3.githubusercontent.com/u/2132216?v=3"
          }
        }
      }

  The `login` and `avatarUrl` fields will be unique to your user account. If you haven't setup a unique avatar for your account, you totally should! If you need an idea for a cool avatar to use, [why not an Octocat?](https://octodex.github.com/)

  ### REST vs GraphQL

  If you're already familiar with RESTful APIs, there are some major differences between REST and GraphQL that you should know about. Along with the [official documentation](https://developer.github.com/v4/), you may want to read up on [this blog post](https://githubengineering.com/the-github-graphql-api/).

---
