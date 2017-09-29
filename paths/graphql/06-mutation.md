---
layout: simple-class
help: https://github.com/githubschool/graph-ql/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Create a Mutation
permalink: /graphql/mutation
facilitator: false
sidebar:
  nav: "github-graphql"
main-content: |

  ## Using GraphQL to Add an Issue Comment

  So far, we've only used GraphQL to form **queries**, or requests for information. Next, we're going to use the information we've gathered to craft a **mutation**. Simply put, using a **mutation** we can actually manipulate server-side data.

  ![animated gif of instructions outlined below](../images/gifs/graphql/mutation.gif)

  1. Get your information from the both previous queries ready (list of repositories, and your issue's `id`).
  1. Create a mutation by either typing or pasting the following into the [GraphQL explorer](https://developer.github.com/v4/explorer/).

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

   1. Change `[issueID]` to the issue `id` you found in the [most recent query](another-query), and `[contribution template]` to the [template you completed earlier](query-info) based on your most recent contributions. _You will need to delete the new lines in between the list items in the template for it to process correctly._
   1. Click the "Execute Query" button
   1. Go to your issue and find your posted comment.
   1. For an extra challenge, use GraphQL to add an emoji reaction to your comment!

  ## Done but not Finished

  This was just the tip of the iceberg when it comes to using GraphQL to supercharge your interactions with GitHub.

  In this course, we used GraphQL to automagically post information about repositories you recently worked on to an issue, but the possibilities of what your future queries can do is limited by your imagination.

  So go out there, experiment with some queries, and share them with the Training team at GitHub and other students in an issue on the course [repository](https://github.com/githubschool/graph-ql). Our favorite queries will be added to a document within the repository for all students to view!

  Good luck out there and may your queries be responsive.


---
