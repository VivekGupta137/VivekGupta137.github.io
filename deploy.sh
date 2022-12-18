#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
echo 'www.iamvivekgupta.me' > CNAME

git init
git checkout -B master
git add -A
git commit -m 'deploy'

# if you are deploying to https://VivekGupta137.github.io
git push -f git@github.com:VivekGupta137/VivekGupta137.github.io.git main

# if you are deploying to https://VivekGupta137.github.io/<REPO>
# git push -f git@github.com:VivekGupta137/<REPO>.git main:gh-pages

cd -