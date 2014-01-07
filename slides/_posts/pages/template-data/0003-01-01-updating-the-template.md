---
chapter: "Template Data"
cover: true
layout: hydesides
tags:
  - "pages/template-data"
---

Now, we can go back to update our page layout in `_layouts/page.html` to add a page title like so:

       <html>
         <head>
           <title>&#123;{ page.title }} on &#123;{ page.site }}</title>
         </head>
         <body>
           <h1>Hello World!</h1>
         </body>
       </html>

