---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Another Query
permalink: /graphql/another-query
next-page: /graphql/mutation
facilitator: false
sidebar:
  nav: "github-graphql"
main-content: |

  This is another query example, meaning we're asking the server (GitHub) to give us some specific information. We're asking for the ID of an issue so that we can use it when we post our information as a mutation in the next step.

  1. Build a query to find an issue ID of the repository owned by GitHubSchool named `graph-ql`. Search for the ID of issue number 1. Below is the start of the query, however, we left some of the **fields** out so you can try to build the query yourself. If you run into any issues building the query, the full code can be found in the "Tell me why" section.



        If you can't build this query yourself, that's OK. Paste this query into the explorer, and try to figure out why it's built the way it is and how you could change or recreate it.

              query FindIssueID {
                repository(owner: "githubschool", name: "graph-QL") {
                   {

                  }
                }
              }

  1. Based on the response to your query, copy the issue ID and put it in a safe place. We'll need it for the next step when we build a mutation.


show-me-how:
tell-me-why:

If you couldn't build the query yourself, that's OK. Paste this query into the explorer, and identify where you might have encountered issues while building it.

      query FindIssueID {
        repository(owner: "githubschool", name: "graph-QL") {
          issue(number: 1) {
            id
          }
        }
      }
---