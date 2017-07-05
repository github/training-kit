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

  #### Goals of this page based on outline
  - short, direct explanation of a query
  - instructions for building the first query
  - tell me why breaks down the components of the query, links to existing documentation
  - rationale for using API instead of hardcoding data
  - Explain how we build this query, what we're searching for, how we could easily change it to search for different things.

  ```
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
  ```

show-me-how:
tell-me-why:
---
