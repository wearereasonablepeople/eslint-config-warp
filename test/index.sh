#!/usr/bin/env bash
set -euo pipefail

parse_words () {
  while read -r line; do for word in $line; do echo "$word"; done; done;
}

status=0

for module in ./*.js; do
  readarray deprecated < <(
    ./node_modules/.bin/eslint-find-rules -d "$module" --no-error | tail -n +4 | parse_words
  )

  if [ ${#deprecated[@]} -gt 0 ]; then
    status=1
    echo "The '$module' module sets deprecated rules:"
    echo " ${deprecated[*]/%/$'\n'}" | column
    echo ''
  fi
done;

exit $status
