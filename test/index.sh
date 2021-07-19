#!/usr/bin/env bash
set -euo pipefail

parse_words () {
  while read -r line; do for word in $line; do echo "$word"; done; done;
}

readarray deprecated < <(
  ./node_modules/.bin/eslint-find-rules -d ./test/all.js --no-error | tail -n +4 | parse_words
)

readarray unused < <(
  ./node_modules/.bin/eslint-find-rules -u ./test/all.js --no-error | tail -n +4 | parse_words
)

status=0

if [ ${#deprecated[@]} -gt 0 ]; then
  status=1
  echo "[ERROR] Found deprecated rules:"
  echo " ${deprecated[*]}"
  echo ''
fi

if [ ${#unused[@]} -gt 0 ]; then
  status=1
  echo "[WARNING] Found additional rules to add:"
  echo " ${unused[*]}"
  echo ''
fi

exit $status
