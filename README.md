# AI-Resume-Analyzer

## 🎯 Purpose
A web application that uses AI to analyze and improve resumes. Upload your CV in PDF or DOCX format, get detailed feedback on weaknesses, and download an enhanced version.

## 🚀 Tech Stack
- **Frontend**: TypeScript + Tailwind CSS
- **Backend**: Python (Flask)
- **AI**: OpenAI API (GPT-3.5-turbo)
- **File Processing**: PyPDF2, python-docx, reportlab

## 📖 How It Works
1. User uploads a PDF or DOCX resume
2. Backend extracts text from the file
3. AI analyzes the resume and identifies weaknesses
4. AI generates an improved version of the resume
5. User can download the enhanced resume in the same format

## 🛠️ Setup Instructions

### Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env and add your OpenAI API key
python app.py