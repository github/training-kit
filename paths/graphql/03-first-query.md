---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Build a Query
permalink: /graphql/first-query
next-page: /graphql/query-info
facilitator: false
sidebar:
  nav: "github-graphql"
main-content: |

 ![img](../images/gifs/graphql/build-query.gif)

 Let's imagine that you'd like to update your team about some of your recent work via [an issue](https://guides.github.com/features/issues/). You could use a GraphQL query to find the pull requests you've most recently contributed to.

 1. Paste this query into the [GraphQL explorer](https://developer.github.com/v4/explorer/).

         query {
            viewer {
             contributedRepositories(last:5, privacy:PUBLIC) {
               edges {
                 node {
                   owner {
                     login
                   }
                   name
                   url
                 }
               }
             }
           }
         }

    > To identify what the different parts of this query are doing, click "Tell me why" below. We could easily change this query to ask for different information. If you'd like, feel free to do that in your own query!

  1. Click the "Execute Query" button (it looks like a Play button) to run the query that is in the left pane and display the results in the right pane.

  This example shows that with the same code, we can get updated data! Any time you have to manually search for information, try to find out if and how you could use an API to do it for you.

tell-me-why: |

  ### What is a query?

  A query is an opportunity to ask an existing service, say, GitHub to provide specific information based on the context of your question. Our [username and avatar exercise](first-use#running-your-first-graphql-query) would be similar to asking someone their name and asking for a picture, except with a **query** we can ask GitHub to get the information from _hundreds_ (or _thousands_, or even _millions_) of users, repositories, issues, commits, and pull requests.

  Additionally, you can use the response to your **query** (or question) to dynamically update and potentially alter the way your content looks.

  During the introduction to the course, we identified that using queries and APIs would allow you to automatically get consistently updated information and use it to power your application or website. As an example, if you wanted to list the latest commits made across GitHub manually, you would need to do a lot of searching and manually update your application. More importantly, in the time it took your to make your changes, the data might be obsolete. Using queries and APIs, we can automatically gather the latest data, display it, and schedule when that data needs to be updated.

  ### Components of our query

  - [**viewer:**](https://developer.github.com/v4/reference/query/#fields) Who is currently viewing this information? (you!)
  - [**contributedRepositories(last:#, privacy:PUBLIC):**](https://developer.github.com/v4/reference/object/user/#connections) The last (most recent) repositories the viewer has contributed to. The `#` can be used to limit the number of repositories you want returned. Only public repositories are turned due to the `PUBLIC` parameter. We could also set this parameter to `PRIVATE`, or leave it out altogether if we'd like all results.
  - [**edges:**](https://developer.github.com/v4/reference/object/repositoryedge/) Representation that there's a connection to another array of data.
  - [**node:**](https://developer.github.com/v4/reference/object/repository/) The related object, data, or other item referenced by an edge.
  - [**owner:**](https://developer.github.com/v4/reference/interface/repositoryowner/#repositoryowner) An object representing the owner of the returned repository.
  - [**login:**](https://developer.github.com/v4/reference/interface/repositoryowner/#repositoryowner) The repository owner's username on GitHub. The owner may be an individual, or an organization.
  - [**name:**](https://developer.github.com/v4/reference/object/repository/#fields) The name of the repository.
  - [**url:**](https://developer.github.com/v4/reference/object/repository/#fields) The repository's URL.

  > As you begin exploring and crafting your own queries for your unique projects, you can click the "< Docs" button located above the right pane of the GraphQL Explorer to get a definition of different query objects or look for query objects that will perform the task you are attempting.

---
