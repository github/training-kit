---
chapter: "Layouts"
cover: true
layout: hydeside
tags:
  - "pages/layouts"
---

* Let's say we pull the HTML out of `index.html` and save it to `_layouts/page.html` so that it looks like this:


        <html>
        <body>
        &#123;{ content }}
        </body>
        </html>

* so now `index.html` should just contain:

        <h1>Hello World!</h1>


