desc 'Clean up generated site'
task :clean do
  sh 'rm -rf _site'
end

task :test do
  sh 'bundle exec jekyll build'

end

task default: :test
