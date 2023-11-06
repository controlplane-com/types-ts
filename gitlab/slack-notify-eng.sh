if [[ "${GITLAB_CI}" != 'true' ]]; then
    echo "You can run this only on gitlab"
    exit 0
fi

if [[ ${SLACK_NOTIFY_URL:-} == '' ]]; then
    echo "You must define SLACK_NOTIFY_URL in the job env"
    exit 1
fi

curl -X POST -H 'Content-type: application/json' --data @- "${SLACK_NOTIFY_URL}" <<EOF
{
  "text":"${GITLAB_USER_NAME} has run *${CI_JOB_NAME}* in *${CI_PROJECT_PATH}*: ${CI_PIPELINE_URL}"
}
EOF

exit 0
