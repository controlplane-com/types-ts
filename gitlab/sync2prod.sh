#!/bin/bash

set -e
git fetch origin

target="${1}"

if [ "${target}" == '' ]; then
    target="$(git rev-parse master)"
fi

echo "About to sync from ${target} to origin/prod"

if ! git merge-base --is-ancestor "${target}" origin/master; then
    echo "Target commit ${target} must be pushed to master first!"
    exit 1
fi

if git merge-base --is-ancestor "${target}" origin/prod; then
    echo "Target commit ${target} is already merged. Nothing to do!"
    exit 0
fi

echo 'All these commits will make it to the origin/prod:'
echo "=========================="
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset %N' --abbrev-commit "origin/prod..${target}"
branch_name="sync/${USER}-$(git rev-parse --short HEAD)"
echo "=========================="
echo

git branch -D "${branch_name}" || true

git branch "${branch_name}" "${target}"

git push origin "${branch_name}"

url="https://gitlab.com/controlplane/schema/-/merge_requests/new?merge_request%5Bsource_branch%5D=${branch_name}&merge_request%5Btarget_branch%5D=prod&merge_request%5Bdescription%5D=Syncing+prod+to+${target}&merge_request%5Btitle%5D=sync+prod+to+${target}"
echo "Create your merge request here: $url"

case "$(uname -s)" in
Linux*)
    xdg-open "${url}"
    ;;
Darwin*)
    open "${url}"
    ;;
esac
