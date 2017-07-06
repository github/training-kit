---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Intro to GraphQL
permalink: /graphql/06
next-page: /graphql/07
facilitator: false
sidebar:
  nav: "github-graphql"
main-content: |

  #### Goals of this page based on outline
  - short, direct explanation of a mutation
  - instructions for building the mutation
  - tell my why break down the components of the mutation

  ```
  mutation AddComment {
    addComment(input: {
      subjectId: "[issueID from step 4]",
      body: "[template from step 2]"})
    {
      subject {
        id
      }
    }
  }
  ```


show-me-how:
tell-me-why:
---
