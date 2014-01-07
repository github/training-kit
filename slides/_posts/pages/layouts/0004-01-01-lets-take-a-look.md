---
chapter: "Layouts"
cover: true
layout: hydeside
tags:
  - "pages/layouts"
---

* When we push our template to to GitHub pages Jekyll will replace <code>&#123;{ content }}</code> with the actual content, so lets...

       $ git add _layouts
       $ git add index.html
       $ git commit -m 'Moving formatting to a layout'
       $ git push

* Now, if you visit your site, you'll see that Jekyll generated a file that should look like this (look familiar?):

       <html>
         <body>
           <h1>Hello World!</h1>
         </body>
       </html>