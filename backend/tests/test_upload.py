import pytest
from app import app

def test_health():
    """Test health endpoint"""
    with app.test_client() as client:
        response = client.get('/health')
        assert response.status_code == 200
        assert response.json['status'] == 'healthy'

def test_upload_no_file():
    """Test upload without file"""
    with app.test_client() as client:
        response = client.post('/upload')
        assert response.status_code == 400
        assert 'error' in response.json