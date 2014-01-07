---
chapter: Notes
layout: slide
tags: ['advanced/notes']
---

    # Namespacing (multiple notes per "ref")
    git notes --ref=<namespace> add <ref>
    
    # Edit a namespaced note
    git notes --ref=<namespace> edit <ref>

    # Showing namespaced or all notes
    git log --show-notes="[<namespace>][*]"
