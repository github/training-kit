---
chapter: Notes
layout: slide
tags: ['advanced/notes']
---

    # Push with a One-Time Refspec
    git push <remote> refs/notes/<[namespace][*]>
    
    # Configure Remote with Refspec
    push = refs/notes/*:refs/notes/*
    
    # Retrieving with a One-Time Refspec
    git fetch <remote> refs/notes/*:refs/notes/*

    # Configure Remote with Refspec
    fetch = +refs/notes/*:refs/notes/*

<small>GitHub shows `notes` with commits</small>