#!/usr/bin/env bash
# Local preview of the coinupbtc.xyz holding page (no build step).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
PORT="${PORT:-8766}"
echo "Serving $ROOT at http://127.0.0.1:${PORT}/"
exec python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ROOT"
