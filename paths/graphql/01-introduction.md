---
layout: simple-class
help: https://github.com/githubschool/graph-ql/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Introduction to GraphQL
permalink: /graphql/
next-page: /graphql/first-use
facilitator: false
sidebar:
  nav: "github-graphql"
main-content: |
    ## An Introduction to APIs for Complete Beginners

    Modern apps are interdependent and dynamic. For example, you probably sign in to various web apps using your GitHub account. These apps may be grabbing your [avatar](https://github.com/blog/1586-identicons) directly from GitHub, or some information about your projects. The data about your project is always changing so, as an added bonus, these connections are constantly updating the information that is displayed.

    GitHub isn't the only web app that does this. A few examples of rich data sources are:

    - [Weather Underground](https://www.wunderground.com/weather/api/): get access to your local weather or report it from you home weather station
    - [Flight stats](https://developer.flightstats.com/api-docs/flightstatus/v2): grab information about any flight, and
    - [ESPN](http://www.espn.com/static/apis/devcenter/docs/scores.html): keep track of your favorite sports team's record

    This data is available to you because the developers of these apps created a public Application Program Interface (API).

    This course is going to introduce the concept of using APIs via GitHub's GraphQL. You'll learn how to gather data from GitHub, and how to make a simple change.

    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/dsPVrbDHgaY?ecver=1" frameborder="0" allowfullscreen></iframe></center>

    There are several types of APIs. Learn more by expanding the "Tell me why" section below.


tell-me-why: |

  ## GraphQL vs. Other APIs

  If this is your first time exploring APIs, you picked the perfect time to start. GraphQL is the newest player in the API game and represents a significant leap forward.

  Many of the web apps you use on a daily basis have APIs. Common APIs include:

  - REST
  - SOAP
  - .NET

  The goal of this course isn't to teach you about all of the common API types, but it is worth mentioning some of the advantages GraphQL has over the popular REST API so you can leverage these features in your projects.

  ### Common Frustrations with REST

  - REST APIs are designed to interact with one specific end point at a time. For example, you can get a list of all your issues on GitHub, but you can't get a list of issues and the comments on those issues at the same time. This means you often need to make more than one "request" to the API to get the exact information you need.
  - REST API results are determined by the API developer, and they want to make sure you have everything you could possibly want. This often means you are getting way more information than you intend to use.

  ### GraphQL Solves These Frustrations

  GraphQL was designed to remove these frustrations by creating a more flexible query structure, which allows you to request information based on connections across traditional data points.

  GraphQL also allows you to specify the information you want. So if you only want to know how many :smile: emoji reactions were on your last comment, you can get precisely that information.

  ## How Will You Use GitHub's GraphQL?

  If you aren't sure why you might use GraphQL right now, that's ok :ok_hand:. This course walks through a few examples, and will set you confidently on the path of additional use cases.

  You can find use cases and examples of GraphQL in action in [GitHub's official GraphQL documentation](https://developer.github.com/v4/).
---
