#!/usr/bin/env bash
# filepath: .git/hooks/pre-commit

# -e: Exit immediately when any subsequent commands fail.
# -u: Treat unset variables as an error when substituting.
# -o pipefail: Causes a pipeline to return the exit status of the last command in the pipe that returned a non-zero return value.
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

echo
echo "Lint JavaScript/TypeScript files"
npm exec --no -- lint-staged --allow-empty
