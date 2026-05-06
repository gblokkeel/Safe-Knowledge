#!/usr/bin/env python3
"""Simple HTTP server to serve the SAFe Knowledge Base website locally.
   Serves from the /website directory so relative paths to /content work correctly.

   Usage: python3 serve.py [port]
   Default port: 8080
"""
import http.server
import socketserver
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
os.chdir(DIRECTORY)

class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def log_message(self, format, *args):
        pass  # Suppress default logging for cleaner output

with socketserver.TCPServer(("", PORT), CORSHTTPRequestHandler) as httpd:
    print(f"✅ SAFe Knowledge Base running at: http://localhost:{PORT}")
    print(f"   Serving from: {DIRECTORY}")
    print(f"   Press Ctrl+C to stop.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n⏹  Server stopped.")
