#!/usr/bin/env bash
# Deploys dist/ to Cloud Run as a static nginx site
set -e
cd "$(dirname "$0")"

PROJECT=vec-gc-proj-demo
REGION=us-central1
SERVICE=vec-los

gcloud run deploy "$SERVICE" \
  --source . \
  --project "$PROJECT" \
  --region "$REGION" \
  --port 8080 \
  --allow-unauthenticated \
  --memory 256Mi \
  --quiet
