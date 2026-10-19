#!/usr/bin/env bash
# Package the Joule Work Desktop (JWD) build of the AI Native Architecture Advisor
# into a distributable .skill file (a .skill is just a renamed .zip).
#
# Usage:
#   ./scripts/package-jwd-skill.sh
#
# Output:
#   dist/ai-native-architecture-advisor-jwd.skill
set -euo pipefail

# Resolve repo root as the parent of this script's directory.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

SKILL_NAME="ai-native-architecture-advisor-jwd"
SKILL_DIR="$REPO_ROOT/skills/$SKILL_NAME"
DIST_DIR="$REPO_ROOT/dist"
OUT_FILE="$DIST_DIR/$SKILL_NAME.skill"

if [[ ! -d "$SKILL_DIR" ]]; then
  echo "error: skill directory not found: $SKILL_DIR" >&2
  exit 1
fi

if [[ ! -f "$SKILL_DIR/SKILL.md" ]]; then
  echo "error: SKILL.md not found in $SKILL_DIR" >&2
  exit 1
fi

mkdir -p "$DIST_DIR"
rm -f "$OUT_FILE"

# Zip the skill directory's contents at the archive root (so SKILL.md sits at the
# top level inside the .skill), excluding OS cruft. -X strips extra file attributes
# for a reproducible archive.
(
  cd "$SKILL_DIR"
  zip -r -X "$OUT_FILE" . \
    -x '.DS_Store' \
    -x '**/.DS_Store' \
    -x '__MACOSX/*'
) >/dev/null

echo "Packaged: $OUT_FILE"
echo "Contents:"
unzip -l "$OUT_FILE"
