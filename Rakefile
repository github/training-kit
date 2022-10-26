require 'html-proofer'

desc 'Clean up generated site'
task :clean do
  sh 'rm -rf _site'
end

task :test do
  sh 'bundle exec jekyll build'
  HTMLProofer.check_directories(
    ["./_site"], {
      :empty_alt_ignore => false,
      typhoeus: {
        headers: {
          "Accept-Encoding" => "gzip",
        }
      }
    }).run
end

task default: :test
