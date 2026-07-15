# 🤖 AI Resume Analyzer

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ai-resume-analyzer-aah18751.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AbdulAzeemHashmi/AI-Resume-Analyzer)

## 🎯 Purpose

A web application that uses Artificial Intelligence to analyze and improve resumes. Upload your CV in PDF or DOCX format, get detailed feedback on weaknesses, and download an enhanced version, all in one place.

---

## 🌐 Live Demo

**Try it yourself:** [https://ai-resume-analyzer-aah18751.vercel.app/](https://ai-resume-analyzer-aah18751.vercel.app/)

---

## ✨ Features

- 📄 **Upload** - Supports PDF and DOCX file formats.
- 🔍 **AI Analysis** - Detects weak action verbs, missing quantifiable achievements, poor formatting, and irrelevant skills.
- ✍️ **Automatic Enhancement** - Rewrites your resume with strong action verbs, professional summaries, and clear achievements.
- 💾 **Download** - Get your improved resume in the same format you uploaded (PDF or DOCX).
- ⚡ **Fast & Simple** - Clean user interface with instant feedback.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | TypeScript + Tailwind CSS |
| Backend | Python (Flask) |
| AI Engine | OpenAI API (GPT-3.5-turbo) |
| File Parsing | PyPDF2 (PDF), python-docx (DOCX) |
| File Generation | reportlab (PDF), python-docx (DOCX) |
| Deployment | Vercel |

---

## 📖 How It Works

1. **Upload** - You select a PDF or DOCX resume file from your computer.
2. **Extract** - The backend reads the file and extracts all the plain text.
3. **Analyze** - The AI identifies at least 5 specific weaknesses in your resume.
4. **Enhance** - The AI rewrites your resume to fix those weaknesses and improve the overall quality.
5. **Download** - You download the improved version in your preferred format (PDF or DOCX).

---

## 🚀 Deployment on Vercel

This project is deployed on Vercel. The `vercel.json` file routes API requests to the Python backend and serves static files from the frontend folder. The backend runs as a serverless function using the `api.py` handler.

**Live URL:** [https://ai-resume-analyzer-aah18751.vercel.app/](https://ai-resume-analyzer-aah18751.vercel.app/)

---

## 🧪 Local Setup Instructions

Follow these steps to run the project on your own computer.

### Prerequisites

- Python 3.8 or higher
- Node.js and npm (for the frontend)
- An OpenAI API key (get it from [platform.openai.com](https://platform.openai.com/api-keys))

---

### Backend Setup

```bash
# 1. Go to the backend folder
cd backend

# 2. Create a Python virtual environment
python -m venv venv

# 3. Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# 4. Install all required packages
pip install -r requirements.txt

# 5. Create your environment file from the example
cp .env.example .env

# 6. Open the .env file and add your OpenAI API key
# It should look like: OPENAI_API_KEY=sk-your-actual-key-here

# 7. Run the Flask server
python app.py
```

The backend will start at `http://localhost:5000`.

---

### Frontend Setup

The frontend is a simple static web page. You can serve it with any static server.

```bash
# 1. Go to the frontend folder
cd frontend

# 2. Install npm dependencies
npm install

# 3. Build or run the frontend
# For development with live reload:
npm run dev

# For production build:
npm run build
```

> **Note:** The frontend expects the backend API to be available at `/api/...` (relative path). If you are running the backend locally on port 5000, you may need to configure the API base URL in the frontend configuration.

---

## 📂 Project Structure

```
AI-Resume-Analyzer/
├── backend/
│   ├── api.py               - Vercel serverless handler
│   ├── app.py                - Main Flask application
│   ├── requirements.txt      - Python dependencies
│   ├── .env.example          - Environment variable template
│   └── tests/
│       └── test_upload.py    - Unit tests
├── frontend/
│   ├── index.html            - Main webpage
│   ├── script.ts              - TypeScript logic
│   ├── package.json          - Node.js dependencies
│   └── ...                    - Other static assets
├── vercel.json                - Vercel deployment configuration
├── .gitignore                 - Files ignored by Git
└── README.md                  - This file
```

---

## 🧪 Running Tests

To run the backend unit tests:

```bash
cd backend
pytest tests/
```

To run tests with coverage:

```bash
pytest --cov=. tests/
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/AbdulAzeemHashmi/AI-Resume-Analyzer/issues).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- OpenAI for providing the GPT-3.5-turbo API.
- Flask and the Python community for the web framework.
- Vercel for seamless hosting and serverless deployment.

---

**Made with ❤️ by Abdul Azeem**
