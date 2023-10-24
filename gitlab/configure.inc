#!/bin/bash

if [[ "${CI_JOB_STAGE}" == publish ]]; then
  if ! git merge-base --is-ancestor "${CI_COMMIT_SHA}" origin/prod; then
    echo "Current commit is not merged in the prod branch: exiting"
    echo "Do this first: sync2prod.sh ${CI_COMMIT_SHA}"
    exit 1
  fi

  echo "//registry.npmjs.org/:_authToken=${BUILD_NPM_TOKEN}" >.npmrc
fi
