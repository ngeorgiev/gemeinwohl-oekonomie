#!/usr/bin/env bash

# Updates the GitHub page with the contents in the dist folder
# find ../gh-pages/gemeinwohl-oekonomie -name "*" -type f -not -path "*.git*" | xargs rm
cp -r dist/* ../gh-pages/gemeinwohl-oekonomie
