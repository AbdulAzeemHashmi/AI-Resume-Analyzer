from app import app

# Vercel needs this handler
def handler(event, context):
    return app