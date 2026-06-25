#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  echo "→ Installing dependencies..."
  if command -v bun >/dev/null 2>&1; then
    bun install
  else
    npm install
  fi
fi

echo "→ Starting dev server..."
if command -v bun >/dev/null 2>&1; then
  exec bun run dev
else
  exec npm run dev
fi
