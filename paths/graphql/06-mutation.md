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

  So far, we've only used GraphQL to form **queries**, or requests for information. Next, we're going to use the information we've gathered to craft a **mutation**. Simply put, a mutation changes information instead of just consuming it.

  1. Get the information from the both queries ready.
  1. Create a mutation by either typing or pasting the following into the [GraphQL explorer](https://developer.github.com/v4/explorer/). Change [issueID] to the issue ID in the most recent query, and [PR template] to the template you completed earlier based on your most recent pull requests.

          mutation AddComment {
            addComment(input: {
              subjectId: "[issueID]",
              body: "[PR template]"})
            {
              subject {
                id
              }
            }
          }

   1. Look around using the built in documentation. By hovering, erasing, retyping, or changing fields, what can you learn about this mutation?
   1. Go to the [issue](https://github.com/githubschool/graph-ql/issues/1) and find your posted comment.
   1. For a challenge, use GraphQL to add an emoji reaction to your comment!



show-me-how:
tell-me-why: |

 ## Mutation

 In this exercise we created a **mutation**, but what exactly is it? With GraphQL, it is possible to do more than just extract data from a platform, using a **mutation** we can actually manipulate server-side data. 

---
