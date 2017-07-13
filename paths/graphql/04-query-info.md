---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Grab a Query's Response
permalink: /graphql/query-info
next-page: /graphql/another-query
facilitator: false
sidebar:
  nav: "github-graphql"
main-content: |

  ![img](../images/gifs/graphql/recent-prs.gif)

  1. Using the response from the query in the last step, fill in this template.

          My most recent contributions are to: <br>
          1. [repository1](url1)<br>
          1. [repository2](url2)<br>
          1. [repository3](url3)<br>
          1. [repository4](url4)<br>
          1. [repository5](url5)<br>


  1. Save this template somewhere where you can get to it later, like a text editor or as a comment in an issue.

tell-me-why: |

  ### Why are we making this query?

  Maybe you are a trying to work on an open source project and want to provide a consistently updated list of other projects you have contributed to. Perhaps you are trying to land a job and want to show your potential employer the projects that you work on. Maybe you already have a job, but you want to be able to show your team or manager what you have been working on recently.

  Either way, this query will automatically generate a list of the projects that you are actively contributing to, and more importantly, it's doing it automagically.

  Later on, we'll use this information to craft a **mutation**.
---
