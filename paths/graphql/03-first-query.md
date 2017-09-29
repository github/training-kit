---
layout: simple-class
help: https://github.com/githubschool/graph-ql/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
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

 ## Building a Useful Query

 Let's imagine that you'd like to update your team about some of your recent work via [an issue](https://guides.github.com/features/issues/). You could use a GraphQL query to find the repositories you've most recently contributed to.

 ![animated gif of instructions outlined below](../images/gifs/graphql/build-query.gif)

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

  A **query** is a request for specific information. The [previous exercise](first-use#running-your-first-graphql-query) would be similar to asking someone for their name and a picture, except with a query we can ask GitHub to get the information from _hundreds_ (or _thousands_, or even _millions_) of users, repositories, issues, commits, and pull requests.

  Additionally, since the results are JSON, you can use the response to your query to power useful apps that request and send data to GitHub. When you use GraphQL to make a change to the data, it is called a **mutation**. We'll get to that soon.

  ### Components of our query

  - [**viewer:**](https://developer.github.com/v4/reference/query/#fields) Who is currently the logged in user? (you!)
  - [**contributedRepositories(last:#, privacy:PUBLIC):**](https://developer.github.com/v4/reference/object/user/#connections) Contributed repositories is what is known as a connection. It a relationship between two sets of data. In this case, it is a connection between the user (in this case the logged in user) and the (most recent) repositories the viewer has contributed to. We are providing two arguments to help us limit the results.
    - **Last:** tells the query to return the most recent results. In this case, the `#` must be used to limit the number of repositories returned.
    - We also chose to only display PUBLIC repositories by providing the **privacy** argument. We could also set this parameter to `PRIVATE`, or leave it out altogether if we'd like PUBLIC and PRIVATE repositories.
  - [**edge:**](https://developer.github.com/v4/reference/object/repositoryedge/) It is easiest to think of an edge as a bridge between two sets of data. You will need an edge any time you are working between nodes.
  - [**node:**](https://developer.github.com/v4/reference/object/repository/) A node is a set of data. If an edge is a bridge connecting two islands, the node is the island. Within a node, you can select specific data you would like to view. In this case, the node contains the information about the repositories.

    > For a visual example of **nodes** and **edges**, view the [GraphQL Voyager site](https://apis.guru/graphql-voyager/). Any column of data in the graphs would be considered a __node__, and the lines connecting them would be considered __edges__.

  - [**owner:**](https://developer.github.com/v4/reference/interface/repositoryowner/#repositoryowner) Within the node, you will find specific pieces of information called interfaces. These are interfaces have additional layers of data.
  - [**login:**](https://developer.github.com/v4/reference/interface/repositoryowner/#repositoryowner) The repository owner's username on GitHub. The owner may be an individual, or an organization.
  - [**name:**](https://developer.github.com/v4/reference/object/repository/#fields) The name of the repository.
  - [**url:**](https://developer.github.com/v4/reference/object/repository/#fields) The repository's URL.

  > As you begin exploring and crafting your own queries for your unique projects, you can click the "< Docs" button located above the right pane of the GraphQL Explorer to get a definition of different query objects or look for query objects that will perform the task you are attempting.

---
