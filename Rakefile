require 'html/proofer'

desc 'Clean up generated site'
task :clean do
  sh 'rm -rf _site'
end

task :test do
  sh 'bundle exec sass _stylesheets/page.scss:_stylesheets/page.css'
  sh 'bundle exec sass _stylesheets/home.scss:_stylesheets/home.css'
  sh 'bundle exec sass _stylesheets/outline.scss:_stylesheets/outline.css'

  sh 'bundle exec jekyll build'

#  HTML::Proofer.new("./_site").run
end

task default: :test
