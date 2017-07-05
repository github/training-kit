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
  - Explain why this is necessary for us to post in the mutation coming up
  - Build another query
  - Copy issue ID in response for use in next step.

  ```
  query FindIssueID {
    repository(owner: "githubschool", name: "graphQL-standup") {
      issue(number: 2) {
        id
      }
    }
  }
  ```

show-me-how:
tell-me-why:
---
