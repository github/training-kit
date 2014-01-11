require 'html/proofer'

desc 'Clean up generated site'
task :clean do
  sh 'rm -rf _site'
end

task :test do
  sh 'bundle exec sass _stylesheets/cheatsheet.scss:_stylesheets/cheatsheet.css'
  sh 'bundle exec sass _stylesheets/colors.scss:_stylesheets/colors.css'
  sh 'bundle exec sass _stylesheets/core.scss:_stylesheets/core.css'
  sh 'bundle exec sass _stylesheets/default.scss:_stylesheets/default.css'
  sh 'bundle exec sass _stylesheets/footer.scss:_stylesheets/footer.css'
  sh 'bundle exec sass _stylesheets/home.scss:_stylesheets/home.css'
  sh 'bundle exec sass _stylesheets/links.scss:_stylesheets/links.css'
  sh 'bundle exec sass _stylesheets/outline.scss:_stylesheets/outline.css'
  sh 'bundle exec sass _stylesheets/page.scss:_stylesheets/page.css'
  sh 'bundle exec sass _stylesheets/reset.scss:_stylesheets/reset.css'
  sh 'bundle exec sass _stylesheets/slide.scss:_stylesheets/slide.css'
  sh 'bundle exec sass _stylesheets/sprockets-octicons.scss:_stylesheets/sprockets-octicons.css'

  sh 'bundle exec jekyll build'

#  HTML::Proofer.new("./_site").run
end

task default: :test
