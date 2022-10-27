#!/bin/sh

set -e
export CC=gcc

echo "==> Installing gem dependencies…"
bundle config set --local path 'vendor/gems' > /dev/null 2>&1 || {
  time bundle install --binstubs bin --path vendor/gems
}

echo "==> Installing node dependencies…"
npm install
