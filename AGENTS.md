# AGENTS.md - Guide for AI Agents Working in training-kit

## Project Overview

This is the **GitHub Training Kit** repository - an open source courseware project from the GitHub Professional Services team. The repository contains Git and GitHub cheat sheets translated into 25+ languages, Git guides, and training materials served as a static website.

**Primary Purpose**: Provide educational resources for people learning Git and GitHub  
**Tech Stack**: Jekyll static site generator, Primer CSS (GitHub's CSS toolkit), Markdown content  
**Deployment**: GitHub Pages  
**Repository**: https://github.com/github/training-kit

## Essential Commands

### Development Workflow (Scripts to Rule Them All Pattern)

This project follows the [Scripts to Rule Them All](https://github.com/github/scripts-to-rule-them-all) pattern. All main scripts are in the `script/` directory:

```bash
# Initial setup - Install all dependencies (Ruby gems + Node modules)
script/bootstrap

# Build the site (runs rake build which includes jekyll build)
script/build

# Start local development server
script/server
# Opens site at http://127.0.0.1:4000/

# Package site for distribution behind firewall
script/package
# Creates release-<git-sha>.tgz with built site
```

### Rake Commands

The project uses Rake for build automation (see `Rakefile`):

```bash
# Build the site (cleans first, then builds with Jekyll)
bundle exec rake build

# Serve the site (builds first, then serves)
bundle exec rake serve

# Run full test suite (builds + runs html-proofer validation)
bundle exec rake test
# or just: bundle exec rake (test is default task)

# Clean generated files
bundle exec rake clean
```

### Direct Jekyll Commands

```bash
# Build site directly with Jekyll
bundle exec jekyll build

# Build with production environment
JEKYLL_ENV=production bundle exec jekyll build

# Build with custom baseurl (used in CI)
bundle exec jekyll build --baseurl "/some-path"

# Serve site directly
bundle exec jekyll serve
```

### Dependency Management

```bash
# Install Ruby dependencies
bundle install --path vendor/gems --binstubs bin

# Install Node dependencies  
npm install

# Update dependencies
bundle update
npm update
```

## Project Structure

```
training-kit/
├── _config.yml              # Jekyll configuration
├── _layouts/                # Jekyll layout templates
│   ├── default.html         # Base layout with header/footer
│   └── cheat-sheet.html     # Layout for cheat sheets
├── _includes/               # Reusable HTML partials
│   ├── header.html          # Site navigation header
│   ├── footer.html          # Site footer
│   ├── head.html            # HTML head with meta tags
│   ├── breadcrumbs.html     # Breadcrumb navigation
│   └── analytics.html       # Google Analytics tracking
├── _pages/                  # Standalone pages
│   └── 404.md              
├── downloads/               # Main content directory
│   ├── github-git-cheat-sheet.md  # English Git cheat sheet
│   ├── <lang>/             # Language-specific directories (de/, fr/, ja/, etc.)
│   │   └── github-git-cheat-sheet.md  # Translated cheat sheets
│   ├── subversion-migration.md
│   └── submodule-vs-subtree-cheat-sheet.md
├── git-guides/              # Educational Git guides
│   ├── git-commit.md
│   ├── git-clone.md
│   ├── git-add.md
│   └── ...
├── assets/                  # Frontend assets
│   ├── css/                 # Compiled CSS
│   ├── _scss/              # Sass source files
│   └── fonts/              # Font files (FontAwesome)
├── index.html              # Homepage with language links
├── script/                 # Build/dev scripts
├── Gemfile                 # Ruby dependencies
├── package.json            # Node dependencies
└── Rakefile               # Build tasks
```

## Content Organization

### Cheat Sheets

- **Location**: `downloads/` directory
- **Layout**: Use `layout: cheat-sheet` in front matter
- **Structure**: Two-column layout using Liquid capture blocks (`{% capture colOne %}` / `{% capture colTwo %}`)
- **Translations**: Each language gets its own subdirectory (e.g., `downloads/fr/`, `downloads/ja/`)
- **Naming**: Use language code subdirectory names from ISO 639-1 (with regional variants like `zh_CN`, `pt_BR`)

### Git Guides

- **Location**: `git-guides/` directory
- **Format**: Standard Markdown files
- **Topics**: Individual Git commands and concepts (git-commit, git-clone, etc.)
- **Style**: Educational, beginner-friendly, includes explanations of how commands work

### Index Page

- **File**: `index.html`
- **Purpose**: Landing page with links to all translated cheat sheets and resources
- **When adding translations**: Must update this file to add new language links
- **Format**: HTML with Liquid templating, uses Primer CSS classes and Octicons

## Content Conventions

### Front Matter

All Markdown files require Jekyll front matter:

```yaml
---
layout: cheat-sheet  # or 'default'
title: "Page Title"
redirect_to: false   # Important: prevents auto-redirect to training.github.com
---
```

**Critical**: The `redirect_to: false` is essential for content pages. Without it, pages redirect to the parent site due to the default in `_config.yml:88-89`.

### Markdown Files

- Use standard Markdown with Kramdown extensions
- Code blocks: Use triple backticks with optional language specifier
- Command examples: Prefix with `$` to indicate shell commands
- Formatting: Follow existing patterns in similar files

### Cheat Sheet Structure

Two-column layout using Liquid capture blocks:

```liquid
{% capture colOne %}
## Section Title
Content here...
{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>

{% capture colTwo %}
## Another Section
More content...
{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
```

### HTML/Liquid Templates

- **Primer CSS**: Use Primer utility classes (e.g., `d-flex`, `flex-items-center`, `color-bg-subtle`)
- **Octicons**: Include icons with `{% octicon icon-name %}`
- **Conditionals**: Check for page variables with `{% if page.variable %}`
- **Loops**: Iterate collections with `{% for item in collection %}`

### Styling

- **Framework**: Primer CSS v20+ (GitHub's design system)
- **Import**: Main stylesheet imports from `@primer/css/index.scss`
- **Custom styles**: In `assets/_scss/` directory
- **Variables**: Use Primer CSS variables (e.g., `$spacer-4`, `--color-scale-blue-6`)
- **Responsive**: Use Primer's responsive utilities (`col-12 col-md-6`)

## Translation Workflow

When adding a new translation:

1. **Create language directory**: `downloads/<language-code>/`
2. **Copy English version**: Start from `downloads/github-git-cheat-sheet.md`
3. **Translate content**: Keep front matter, translate body
4. **Update index.html**: Add link to new translation in the appropriate list
5. **Follow language codes**: 
   - Two-letter codes: `de`, `fr`, `ja`, `ko`
   - Regional variants: `pt_BR`, `pt_PT`, `es_ES`, `zh_CN`, `zh_TW`
   - Use underscores for separators, not hyphens
6. **Get native speaker review**: As per CONTRIBUTING.md, @ mention friends for review
7. **PDF versions** (optional): Some languages have both `.md` and `.pdf` versions

## Testing

### Local Testing

```bash
# Build and serve locally
script/server

# Visit http://127.0.0.1:4000/ in browser
```

### Automated Testing (html-proofer)

The `rake test` task validates:
- ✅ HTML validity
- ✅ Valid links (internal and external)
- ✅ Images use HTTPS
- ✅ Favicon exists
- ✅ Alt tags on images

**Note**: External link checking can be slow and may fail due to rate limiting or temporary outages.

### CI/CD

GitHub Actions workflows in `.github/workflows/`:

- **jekyll.yml**: Main build/test/deploy workflow
  - On PR: Runs `bundle exec rake` (full test suite)
  - On push to main: Builds with Jekyll and deploys to GitHub Pages
  - Uses Node 16 and Ruby (version from Gemfile)
- **codeql.yml**: Security scanning
- **dependency-review.yml**: Dependency security checks

## Important Gotchas

### 1. Default Redirect Behavior

**CRITICAL**: The `_config.yml` sets a global default redirect:

```yaml
defaults:
  - scope:
      path: ""
    values:
      redirect_to:
        - https://training.github.com
```

**Solution**: Every content page MUST override with `redirect_to: false` in front matter, or it will redirect away from the site.

### 2. Package Script Platform Dependency

The `script/package` uses `sed -i ""` which is macOS-specific:
```bash
sed -i "" 's/tracking_id *:.*/tracking_id:/' _config.yml
```

On Linux, `sed -i` doesn't take an empty string argument. May need adjustment for cross-platform use.

### 3. Jekyll Plugins

Required plugins (see `_config.yml:38-45`):
- jekyll-paginate
- jekyll-sitemap
- jekyll-gist
- jekyll-feed
- jemoji (emoji support)
- jekyll-redirect-from
- jekyll-octicons (GitHub icon support)

All must be installed via bundle for site to build correctly.

### 4. Primer CSS Import

The project uses `@primer/css` from npm, imported in Sass files. Must run `npm install` before building or styles will fail to compile.

### 5. Sass Configuration

Uses `sass-embedded` implementation (see `_config.yml:78`). If you encounter Sass compilation errors, ensure this gem is installed.

### 6. Language/Locale Handling

The site uses `lang` variable for internationalization:
- Default: `en` (set in `_config.yml:81`)
- Per-page: Set `lang: "<code>"` in front matter
- Used in templates to fetch language-specific navigation data

### 7. Breadcrumbs Configuration

Breadcrumbs are enabled globally (`breadcrumbs: true` in `_config.yml:18`) but can be controlled per-page. Some pages set `breadcrumbColor` to customize appearance.

## File and Directory Conventions

### File Naming

- **Markdown files**: Use lowercase with hyphens (e.g., `github-git-cheat-sheet.md`)
- **Directories**: Lowercase, use underscores for language variants (e.g., `pt_BR`, `zh_CN`)
- **Layouts/includes**: Lowercase with hyphens (e.g., `cheat-sheet.html`)

### Front Matter Requirements

Minimum front matter for content pages:
```yaml
---
layout: default
title: "Page Title"
redirect_to: false
---
```

For cheat sheets:
```yaml
---
layout: cheat-sheet
redirect_to: false
title: "Cheat Sheet Title"
byline: "Brief description"
leadingpath: ../../  # Relative path to root for assets
---
```

### Excluded from Build

Per `_config.yml:47-59`, these are excluded from Jekyll build:
- `bin/`
- `Gemfile*`
- `node_modules/`
- `Rakefile`
- `README.md`
- `script/`
- `vendor/`
- `package.json`
- `package-lock.json`

Don't reference these files from content pages.

## Code Style and Patterns

### HTML/Liquid

- **Indentation**: 2 spaces
- **Liquid tags**: Space inside delimiters: `{% if condition %}` not `{%if condition%}`
- **Primer utilities**: Prefer utility classes over custom CSS
- **Semantic HTML**: Use appropriate elements (`<header>`, `<nav>`, `<main>`, `<footer>`)

### Markdown

- **Headers**: ATX-style (`#` prefix) not Setext-style
- **Lists**: Use `-` for unordered, `1.` for ordered
- **Code blocks**: Triple backticks with language identifier
- **Links**: Prefer reference-style for readability in long documents
- **Line length**: No hard limit, but keep readable (around 80-120 chars when practical)

### Sass/CSS

- **Variables**: Use Primer variables when available
- **Custom classes**: Namespace with project-specific prefix if needed
- **Organization**: Partial files in `assets/_scss/`, imported in `assets/css/index.scss`
- **Syntax**: SCSS syntax, not Sass indented syntax

## Development Workflow Best Practices

### Making Changes

1. **Read existing patterns**: Look at similar files first
2. **Test locally**: Always run `script/server` and verify changes in browser
3. **Check all translations**: If modifying layout/includes, ensure all language versions still work
4. **Validate**: Run `bundle exec rake test` before committing (if time allows)
5. **Small commits**: Logical, focused changes

### Adding New Content

1. **Cheat sheets**: Follow existing two-column pattern
2. **Git guides**: Follow structure in `git-guides/git-commit.md` as template
3. **New pages**: Add appropriate front matter, use `default` layout
4. **Images/assets**: Place in `assets/` directory, reference with `{{ site.baseurl }}/assets/path`

### Debugging

- **Jekyll errors**: Check front matter YAML syntax (common culprit)
- **404s**: Verify `permalink` in front matter and `baseurl` in config
- **Missing styles**: Ensure `npm install` and `bundle install` completed successfully
- **Liquid errors**: Check for unmatched `{% %}` tags and filter syntax
- **Build failures**: Look at `_site/` directory to see what Jekyll generated

### Performance Considerations

- **Incremental builds**: Jekyll supports incremental builds, but not enabled by default here
- **Large file sets**: With 25+ translations, full site builds can take time
- **External links**: Testing with html-proofer is slow due to HTTP requests
- **Cache busting**: Jekyll doesn't auto-bust CSS cache; may need to clear browser cache

## Contributing Context

Per `CONTRIBUTING.md`, this project welcomes:
- ✅ Improvements to existing cheat sheets
- ✅ Translations into new languages
- ✅ New courseware aligned with helping people learn Git/GitHub

**Not accepted**:
- ❌ Unrelated content
- ❌ Changes that don't align with educational mission
- ❌ Breaking changes without discussion

**Process**:
1. Open issue first for new features/major changes
2. Fork repository for your work
3. Create pull request against `main` branch
4. For translations: include native speaker reviews
5. Be patient - this is maintained by GitHub Professional Services team

## License Information

- **Content**: CC-BY-4.0 (Creative Commons Attribution)
- **Code**: CC0-1.0 (Public domain)
- **Trademarks**: GitHub trademarks are NOT licensed

When reusing content, must provide attribution:
> Content based on github.github.com/training-kit/ used under the CC-BY-4.0 license.

## Useful Resources

- **Primer CSS docs**: https://primer.style/css/
- **Jekyll docs**: https://jekyllrb.com/docs/
- **Markdown guide**: https://guides.github.com/features/mastering-markdown/
- **Liquid templating**: https://shopify.github.io/liquid/
- **Octicons**: https://primer.style/octicons/
- **GitHub Pages**: https://docs.github.com/en/pages

## Quick Reference: Common Tasks

### Add a new Git cheat sheet translation

```bash
# 1. Create directory for language
mkdir -p downloads/NEW_LANG

# 2. Copy English version
cp downloads/github-git-cheat-sheet.md downloads/NEW_LANG/

# 3. Edit the translation
# (translate content, keep front matter structure)

# 4. Add link to index.html
# (add <li> with download link in appropriate section)

# 5. Test locally
script/server

# 6. Create PR with native speaker reviews
```

### Update Primer CSS version

```bash
# Edit package.json, change @primer/css version
npm install
script/build
# Test thoroughly - breaking changes possible
```

### Fix broken links

```bash
# Run html-proofer to find issues
bundle exec rake test

# Check specific URLs
# Fix links in content or add to ignore list if appropriate
```

### Modify site layout

1. Edit files in `_layouts/` or `_includes/`
2. Test with multiple content types (cheat sheets, guides, index)
3. Test with different translations
4. Verify responsive behavior (mobile, tablet, desktop)
5. Run full test suite

## Environment Variables

- `JEKYLL_ENV`: Set to `production` for production builds (affects some plugins)
- `CC`: Set to `gcc` by bootstrap script (for native gem compilation)

## Dependencies

### Ruby Gems (Gemfile)

- `jekyll`: Static site generator (core)
- `html-proofer`: Link and HTML validation
- `rake`: Task automation
- `jekyll-sass-converter`: Sass compilation (custom fork from GitHub)
- `sass-embedded`: Modern Sass implementation
- Plus jekyll plugins listed in _config.yml

### Node Packages (package.json)

- `@primer/css`: GitHub's CSS framework (only production dependency)

### System Requirements

- Ruby (version in `.ruby-version`: check that file for specific version)
- Node.js (CI uses Node 16)
- Bundler
- Git

## Deployment

**Production deployment**: Automated via GitHub Actions to GitHub Pages
- Triggered on push to `main` branch
- Site available at: https://training.github.com
- Uses custom CNAME (see `CNAME` file)

**Manual package**: Use `script/package` to create tarball for internal hosting

---

Last updated: 2025-11-30
