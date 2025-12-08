#!/bin/bash

if [[ "${GITHUB_ACTIONS}" != 'true' ]]; then
    echo "You can run this only on GitHub Actions"
    exit 0
fi

if [[ ${SLACK_NOTIFY_URL:-} == '' ]]; then
    echo "You must define SLACK_NOTIFY_URL in the job env"
    exit 1
fi

curl -X POST -H 'Content-type: application/json' --data @- "${SLACK_NOTIFY_URL}" <<EOF
{
  "text":"${GITHUB_ACTOR} has run *${GITHUB_REF_NAME}* in *${GITHUB_REPOSITORY}*: ${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}"
}
EOF

exit 0

