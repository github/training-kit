require 'html/proofer'

desc 'Clean up generated site'
task :clean do
  sh 'rm -rf _site'
end

task :test do
  sh 'bundle exec sass _stylesheets/cheatsheet.scss:_stylesheets/cheatsheet.css'
  sh 'bundle exec sass _stylesheets/materials.scss:_stylesheets/materials.css'
  sh 'bundle exec sass _stylesheets/outline.scss:_stylesheets/outline.css'
  sh 'bundle exec sass _stylesheets/page.scss:_stylesheets/page.css'
  sh 'bundle exec sass _stylesheets/slide.scss:_stylesheets/slide.css'
  sh 'bundle exec jekyll build'

#  HTML::Proofer.new("./_site").run
end

task default: :test
