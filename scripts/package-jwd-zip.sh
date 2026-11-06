#!/usr/bin/env bash
# Package the Joule Work Desktop (JWD) build of the AI Native Architecture Advisor
# into a distributable .zip whose contents are WRAPPED in a top-level
# `ai-native-architecture-advisor-jwd/` folder.
#
# This is the asset published on GitHub Releases and linked from the website /
# README. Joule Work Desktop expects users to unzip and get a folder named
# `ai-native-architecture-advisor-jwd/` containing SKILL.md + references/, so the
# archive must preserve that wrapping folder (unlike package-jwd-skill.sh, which
# zips the skill contents flat at the archive root for the .skill bundle).
#
# Usage:
#   ./scripts/package-jwd-zip.sh
#
# Output:
#   dist/ai-native-architecture-advisor-jwd.zip
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

SKILL_NAME="ai-native-architecture-advisor-jwd"
SKILLS_DIR="$REPO_ROOT/skills"
SKILL_DIR="$SKILLS_DIR/$SKILL_NAME"
DIST_DIR="$REPO_ROOT/dist"
OUT_FILE="$DIST_DIR/$SKILL_NAME.zip"

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

# Zip from the skills/ parent so the `ai-native-architecture-advisor-jwd/` folder
# is preserved at the archive root. -X strips extra attributes for a reproducible
# archive; exclude OS cruft.
(
  cd "$SKILLS_DIR"
  zip -r -X "$OUT_FILE" "$SKILL_NAME" \
    -x '*.DS_Store' \
    -x '**/.DS_Store' \
    -x '__MACOSX/*'
) >/dev/null

echo "Packaged: $OUT_FILE"
echo "Contents:"
unzip -l "$OUT_FILE"
