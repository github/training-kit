---
layout: simple-class
help: https://github.com/githubschool/graph-ql/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
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

  ## We Need More Information

  We are working our way to our first mutation. The first mutation will be to add a comment to an existing issue containing the list of repositories you just created.

  When we look at [the documentation for adding a comment](https://developer.github.com/v4/reference/mutation/addcomment/), we will see that the list of inputs includes a `subjectId` and `body`. We can tell these are required because they have an ! next to the data type (ID!).

  Let's build another query to get the ID of for the issue where we want to place our list of repositories.

  ![animated gif of instructions outlined below](../images/gifs/graphql/get-issue-id.gif)

  1. Open an issue in our shared class repository: https://github.com/githubschool/graph-ql
  1. Create the query to find your issue ID number
   - We have started the query for you below, however, we left some of the **fields** blank so you can try to build the query yourself. For help, [check out the documentation](https://developer.github.com/v4/). To see a full code example, expand the "Tell me why" section below.

              query FindIssueID {
                repository(owner: "", name: "") {

                }
              }
  1. Find the issue's `id` in your results and put it in a safe place. We'll need it for the next step when we build a mutation.

tell-me-why: |

  Did building the query give you trouble? That's OK! Here's the full query. Paste it into the GraphQL Explorer to get the issue `id` for your own issue, just be sure to replace `#` with the number of [your own issue](https://github.com/githubschool/graph-ql/issues).

      query FindIssueID {
        repository(owner: "githubschool", name: "graph-QL") {
          issue(number: #) {
            id
          }
        }
      }

---
