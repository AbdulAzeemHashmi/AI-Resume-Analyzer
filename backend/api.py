import sys
import os

# Ensure the backend directory is in the Python path
sys.path.insert(0, os.path.dirname(__file__))

from app import app

# Vercel expects the Flask app exported as 'app'
# This file acts as the WSGI entry point for Vercel's Python runtime