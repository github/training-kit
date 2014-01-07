---
chapter: API
layout: slide
title: What can it do?
tags: ['api']
---

	$ curl -n https://api.github.com
    
    {
      "authorizations_url": "/authorizations",
      "user_url": "/users/{user}",
      "repository_search_url": "/legacy/repos/search/{keyword}{?language,start_page}",
      "repository_url": "/repos/{owner}/{repo}",
      "issue_search_url": "/legacy/issues/search/{owner}/{repo}/{state}/{keyword}",
      "starred_gists_url": "/gists/starred",
      "emails_url": "/user/emails",
      "current_user_repositories_url": "/user/repos{?type,page,per_page,sort}",
      "keys_url": "/user/keys",
      "emojis_url": "/emojis",
      "user_organizations_url": "/user/orgs"
    }
