---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Intro to GraphQL
permalink: /graphql/03
next-page: /graphql/04
facilitator: false
sidebar:
  nav: "github-graphql"
main-content: |

 # Queries?

 So, in the last section, we used an existing **query** to display our username in the Results pane. If you participated in the extra `avatarUrl` exercise, your query also provided a link to your GitHub avatar. But what exactly is a query?

 A query is an opportunity to ask an existing service, say, GitHub to provide specific information based on the context of your question. Our last "username and avatar exercise" would be similar to asking someone their name and asking for a picture, except with a **query** we can ask GitHub to get the information from _hundreds_ (or _thousands_, or even _millions_) users, repositories, issues, commits, and pull requests.

 Additionally, you can use the response to your **query** (or question) to dynamically update and potentially alter the way your content looks.

 # Building a Query

 **UPDATE THIS SECTION WHEN EXERCISE IS 100%**

     query RecentPRs {
       user(login: "brianamarie") {
         name
         pullRequests(last: 5) {
           edges {
             node {
               title
               body
               url
             }
           }
         }
       }
     }

 ## Defining Our Query

 We provided a query that we are going to use, but lets take a moment to identify what the different parts of the query are doing. As a side note, as you begin exploring and crafting your own queries for your unique projects, you can click the `< Docs` button located above the right pane to get a definition of different query objects or look for query objects that will perfom the task you are attempting.

  - **user(login: "githubteacher"):**
  - **name:**
  - **pullRequests(last: #):**
  - **edges:**
  - **node:**
  - **title:** The title of the Pull Request.
  - **body:** The text found in the first comment of the Pull Request.
  - **url:** The URL to the specific Pull Request.

 #### Goals of this page based on outline

  - short, direct explanation of a query
  - instructions for building the first query
  - tell me why breaks down the components of the query, links to existing documentation
  - rationale for using API instead of hardcoding data
  - Explain how we build this query, what we're searching for, how we could easily change it to search for different things.

show-me-how: |

  During the introduction to the course, we identified that using queries and API would allow you to automatically get consistently updated information and use it to power your application or website. As an example, if you wanted to list the latest commits made across GitHub manually, you would need to do a lot of searching and manually update your application. More importantly, in the time it took your to make your changes, the data might be obsolete. Using queries and APIs, we can automatically gather the latest data, display it, and schedule when that data needs to be updated.


tell-me-why:
---
