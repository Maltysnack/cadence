#!/bin/sh
# Serve Cadence on a fixed port so browser storage (your settings) stays put.
cd "$(dirname "$0")" && echo "http://localhost:8765" && exec python3 -m http.server 8765 --bind 127.0.0.1
