---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Create a Mutation
permalink: /graphql/mutation
facilitator: false
sidebar:
  nav: "github-graphql"
main-content: |

  So far, we've only used GraphQL to form **queries**, or requests for information. Next, we're going to use the information we've gathered to craft a **mutation**. Simply put, using a **mutation** we can actually manipulate server-side data.

  ![img](../images/gifs/graphql/mutation.gif)

  1. Get your information from the both previous queries ready (list of repositories, and your issue's `id`).
  1. Create a mutation by either typing or pasting the following into the [GraphQL explorer](https://developer.github.com/v4/explorer/). Change `[issueID]` to the issue `id` you found in the [most recent query](another-query), and `[contribution template]` to the [template you completed earlier](query-info) based on your most recent contributions. _You will need to delete the new lines in between the list items in the template for it to process correctly._

          mutation AddComment {
            addComment(input: {
              subjectId: "[issueID]",
              body: "[contribution template]"})
            {
              subject {
                id
              }
            }
          }

        > Look around using the built in documentation. By hovering, erasing, retyping, or changing fields, what can you learn about this mutation?

   1. Go to your issue and find your posted comment.
   1. For a challenge, use GraphQL to add an emoji reaction to your comment!

---
