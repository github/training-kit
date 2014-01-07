---
chapter: API
layout: slide
title: What can it do?
tags: ['api']
---

	$ curl -n https://api.github.com
    
    {
      "team_url": "/teams",
      "following_url": "/user/following{/target}",
      "user_repositories_url": "/users/{user}/repos{?type,page,per_page,sort}",
      "organization_repositories_url": "/orgs/{org}/repos/{?type,page,per_page,sort}",
      "hub_url": "/hub",
      "user_search_url": "/legacy/user/search/{keyword}",
      "starred_url": "/user/starred{/owner}{/repo}",
      "gists_url": "/gists{/gist_id}"
    }
