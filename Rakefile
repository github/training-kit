require 'html-proofer'
require 'jekyll'

Rake.application.options.trace = true

desc 'Remove all generated files: destination folder, metadata file, Sass and Jekyll caches.'
task :clean do
  Jekyll::Commands::Clean.process({})
end

desc 'Build and serve the site'
task serve: [:build] do
  Jekyll::Commands::Serve.process({})
end

desc 'Build the site'
task build: [:clean] do
  Jekyll::Commands::Build.process({})
end

desc 'Build and test the site'
task test: [:build] do
  options = {
    :check_html => true, # Validate HTML
    :empty_alt_ignore => false, # Allow images with empty alt tags
    :check_favicon => true, # Check whether favicons are valid
    :check_img_http => true, # Enforce that images use HTTPS
    typhoeus: {
      headers: {
        # This is required to validate links to docs.github.com
        "Accept-Encoding" => "gzip",
      }
    }
  }
  HTMLProofer.check_directory("./_site", options).run
end

task default: :test
