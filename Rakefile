require 'html/proofer'

desc 'Clean up generated site'
task :clean do
  sh 'rm -rf _site'
end

task :test do
  sh 'bundle exec sass --style compressed _stylesheets/page.scss:_stylesheets/page.css'
  sh 'bundle exec sass --style compressed _stylesheets/home.scss:_stylesheets/home.css'
  sh 'bundle exec sass --style compressed _stylesheets/workbook.scss:_stylesheets/workbook.css'
  sh 'bundle exec jekyll build'

#  HTML::Proofer.new("./_site").run
end

task default: :test
