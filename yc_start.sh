#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

# Homebrew's node@22 is keg-only; make sure it's on PATH
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"

if ! command -v npm >/dev/null 2>&1; then
  echo "Node.js not found. Install it with: brew install node@22" >&2
  exit 1
fi

if [ ! -d node_modules ] || [ package-lock.json -nt node_modules ]; then
  npm install
fi

# Check every local import in App.jsx resolves to a real file
missing=()
for imp in $(grep -oE "from '\./[^']+'" src/App.jsx | sed -E "s/from '\.\/(.*)'/\1/"); do
  found=
  for f in "src/$imp".js "src/$imp".jsx "src/$imp"/index.js "src/$imp"/index.jsx; do
    [ -f "$f" ] && found=1
  done
  [ -n "$found" ] || missing+=("src/$imp")
done

if [ ${#missing[@]} -eq 0 ]; then
  npm run dev
elif [ -f dist/index.html ]; then
  echo "WARNING: ${#missing[@]} source files imported by App.jsx are missing, e.g. ${missing[0]}"
  echo "         Serving the prebuilt app from dist/ instead (read-only, last built $(date -r dist/index.html '+%b %d %Y'))."
  echo "         Restore the missing files into src/ to run the editable dev server."
  npx vite preview --port 5173
else
  echo "Source is incomplete (${missing[*]}) and no dist/ build exists." >&2
  exit 1
fi
