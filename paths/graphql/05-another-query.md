---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Use a Query to Find Specific Information
permalink: /graphql/another-query
next-page: /graphql/mutation
facilitator: false
sidebar:
  nav: "github-graphql"
main-content: |

  Let's build another query. We'll ask GitHub for the ID of an issue so that we can post to that issue using the API in a later step.
  
  ![img](../images/gifs/graphql/get-issue-id.gif)

  1. Build a query to find [this issue](https://github.com/githubschool/graph-ql/issues/1)'s unique identifier, or `id`.
   - Below is the start of the query, however, we left some of the **fields** out so you can try to build the query yourself. See the full code in the "Tell me why" section.

              query FindIssueID {
                repository(owner: "githubschool", name: "graph-QL") {

                }
              }
  1. Find the issue's `id` in your results and put it in a safe place. We'll need it for the next step when we build a mutation.

tell-me-why: |

  Did building the query give you trouble? That's OK! Here's the full query. Paste it into the GraphQL Explorer to get the issue `id`.

      query FindIssueID {
        repository(owner: "githubschool", name: "graph-QL") {
          issue(number: 1) {
            id
          }
        }
      }

---
