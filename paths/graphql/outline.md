## Page 1: Introduction
- Motivation, present the problem that needs solving
- API as the solution (context: dynamic, consumable information)
  - Examples of API usages (format: service, how API is used, link)

## Page 2: First use (jump right in, no later than pg 2)
- instructions for navigating to GraphiQL on web UI
- interact with interface, show how it works, live data
- tell me why, can explain differences between rest and graphql
- Does this have to be different than page 3, or could we combine?

## Page 3: Your first query (get personal statistic)
- short, direct explanation of a query
- instructions for building the first query
- tell me why breaks down the components of the query, links to existing documentation
- rationale for using API instead of hardcoding data
- Explain how we build this query, what we're searching for, how we could easily change it to search for different things.

```
query RecentPRs {
  user(login: "brianamarie") {
    name
    pullRequests(last: 5) {
      edges {
        node {
          title
          body
          url
        }
      }
    }
  }
}
```

## Page 4: Get relevant query information
- Context of why we're doing this, explain standups, show this could be useful for weekly updates of work
- Pick out titles and URLs manually and copy them into this template

```
My most recent PRs are: <br>
1. [title1](url1)
1. [title2](url2)
1. [title3](url3)
1. [title4](url4)
1. [title5](url5)
```

## Page 5: Another Query: Find a relevant issue ID
- Explain why this is necessary for us to post in the mutation coming up
- Build another query
- Copy issue ID in response for use in next step.

```
query FindIssueID {
  repository(owner: "githubschool", name: "graphQL-standup") {
    issue(number: 2) {
      id
    }
  }
}
```

## Page 6: Your first mutation (push to existing personal site)
- short, direct explanation of a mutation
- instructions for building the mutation
- tell my why break down the components of the mutation

```
mutation AddComment {
  addComment(input: {
    subjectId: "[issueID from step 4]",
    body: "[template from step 2]"})
  {
    subject {
      id
    }
  }
}
```
