require 'html-proofer'

desc 'Clean up generated site'
task :clean do
  sh 'rm -rf _site'
end

task :test do
  sh 'bundle exec jekyll build --quiet --config _config.yml'

  ignored_links = []

  # internal
  ignored_links.push(%r{https?://github\.com/})
  ignored_links.push(%r{https?://github\.github\.io/})

  # external
  ignored_links.push(%r{https?://(.+?.)gitter\.im})
  ignored_links.push(%r{https?://jekyllthemes\.io})
  ignored_links.push(%r{https?://mademistakes\.com})
  ignored_links.push(%r{https?://(www.)taniarascia\.com})

  HTMLProofer.check_directory('./_site', {
    :check_opengraph => true,
    :check_html => true,
    :empty_alt_ignore => true,
    :url_ignore => ignored_links,
    :connecttimeout => 600,
    :typhoeus => {
      :ssl_verifypeer => false,
      :ssl_verifyhost => 0,
      :followlocation => true
    }
  }).run
end

task default: :test
