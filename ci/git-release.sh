#! bin/bash
set -e -u

CURRENT_VERSION=`cat package.json | jq -r .version`

git fetch --tags

if [ `git branch | grep tmp-release` ]; then
    git branch -D tmp-release
fi
git checkout -b tmp-release

npm install
npm run build
git add -f lib/
git commit -m "Release v$CURRENT_VERSION"
git tag "v$CURRENT_VERSION"
git push --tags

git checkout master
git branch -D tmp-release
