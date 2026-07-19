<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:11998e,100:38ef7d&height=200&section=header&text=AI%20Resume%20Analyzer&fontSize=40&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Upload.%20Analyze.%20Improve.%20Download.&descAlignY=55&descSize=18" width="100%"/>

<br/>

![TypeScript](https://img.shields.io/badge/TypeScript-Frontend-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-Backend-000000?style=for-the-badge&logo=flask&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5-412991?style=for-the-badge&logo=openai&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)

<img src="https://img.shields.io/github/stars/AbdulAzeemHashmi/AI-Resume-Analyzer?style=social" alt="stars"/>
<img src="https://img.shields.io/github/forks/AbdulAzeemHashmi/AI-Resume-Analyzer?style=social" alt="forks"/>
<img src="https://img.shields.io/github/last-commit/AbdulAzeemHashmi/AI-Resume-Analyzer?color=38ef7d" alt="last commit"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=11998E&center=true&vCenter=true&width=650&lines=Upload+Your+Resume+in+PDF+or+DOCX;AI+Powered+Weakness+Detection;Automatic+Resume+Enhancement;Download+Your+Improved+Resume" alt="Typing SVG" />

<br/>

<p align="center">
<a href="https://ai-resume-analyzer-aah18751.vercel.app/">
<img src="https://img.shields.io/badge/🚀%20Try%20it%20Live-Visit%20App-11998e?style=for-the-badge" alt="try it live"/>
</a>
&nbsp;
<a href="https://github.com/AbdulAzeemHashmi/AI-Resume-Analyzer">
<img src="https://img.shields.io/badge/💻%20View%20Source-GitHub-181717?style=for-the-badge&logo=github" alt="view source"/>
</a>
</p>

</div>

<br/>

## 🎯 Purpose

AI Resume Analyzer is a modern web application that uses Artificial Intelligence to analyze and improve resumes. Upload your CV in PDF or DOCX format, get detailed feedback on weaknesses, and download an enhanced version, all in one place.

<div align="center">
<img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="380" alt="resume analysis animation"/>
</div>

---

## ⚡ Interactive Workflow

<div align="center">

```mermaid
graph TD
    A[📄 Upload Resume PDF/DOCX] --> B[🔍 Extract Plain Text]
    B --> C[🧠 OpenAI GPT-3.5 Analysis]
    C --> D[⚠️ Identify Weaknesses]
    D --> E[✨ Generate Improved Resume]
    E --> F[📥 Download PDF/DOCX File]
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#bbf,stroke:#333,stroke-width:2px
    style F fill:#bfb,stroke:#333,stroke-width:2px
```

</div>

---

## ✨ Features

- 📄 **Upload Support:** Handles both PDF and DOCX file formats.
- 🔍 **AI Analysis:** Detects weak action verbs, missing quantifiable achievements, poor formatting, and irrelevant skills.
- ✍️ **Automatic Enhancement:** Rewrites your resume with strong action verbs, professional summaries, and clear achievements.
- 💾 **Smart Download:** Get your improved resume in the same format you uploaded (PDF or DOCX).
- ⚡ **Fast and Simple:** Clean user interface with interactive feedback.

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology | Description |
| :--- | :--- | :--- |
| 🎨 **Frontend** | TypeScript plus Tailwind CSS | Clean, responsive user interface |
| ⚙️ **Backend** | Python (Flask) | Lightweight web backend |
| 🧠 **AI Engine** | OpenAI API (GPT 3.5 turbo) | Advanced language model processing |
| 📄 **File Parsing** | PyPDF2 plus python docx | Text extraction tools |
| 📥 **File Generation** | reportlab plus python docx | PDF and Word document generators |
| ▲ **Deployment** | Vercel | Seamless serverless hosting |

<br/>

![TypeScript](https://skillicons.dev/icons?i=typescript)
&nbsp;
![Tailwind](https://skillicons.dev/icons?i=tailwind)
&nbsp;
![Flask](https://skillicons.dev/icons?i=flask)
&nbsp;
![Python](https://skillicons.dev/icons?i=python)
&nbsp;
![Vercel](https://skillicons.dev/icons?i=vercel)

</div>

---

## 📂 Project Structure

```text
AI-Resume-Analyzer/
├── 📂 api/
│   └── index.py             # Vercel serverless entry point
├── 📂 backend/
│   ├── app.py               # Main Flask application
│   ├── requirements.txt     # Local python dependencies
│   ├── .env.example         # Environment variable template
│   └── tests/
│       └── test_upload.py   # Unit tests
├── 📂 frontend/
│   ├── index.html           # Main webpage
│   ├── script.ts            # TypeScript logic
│   ├── package.json         # Node.js dependencies
│   └── dist/
│       └── script.js        # Compiled JavaScript
├── ⚙️ vercel.json            # Vercel deployment configuration
├── 📋 requirements.txt       # Root python dependencies for Vercel
├── 🚫 .gitignore             # Files ignored by Git
└── 📘 README.md              # This file
```

---

## 🚀 Deployment on Vercel

This project is deployed on Vercel. The `vercel.json` file routes API requests to the Python backend and serves static files from the frontend folder. The backend runs as a serverless function using the `api/index.py` handler.

👉 **Live URL:** [ai-resume-analyzer-aah18751.vercel.app](https://ai-resume-analyzer-aah18751.vercel.app/)

---

## 🧪 Local Setup Instructions

Follow these steps to run the project on your own computer.

### 📋 Prerequisites

- 🐍 Python 3.8 or higher
- 🟢 Node.js and npm (for the frontend)
- 🔑 An OpenAI API key (get it from platform.openai.com)

### 🔧 Backend Setup

<details open>
<summary><b>Show backend setup commands</b></summary>
<br/>

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
# Example: OPENAI_API_KEY=sk-your-actual-key-here

# 7. Run the Flask server
python app.py
```

The backend will start at `http://localhost:5000`. ✅

</details>

### 🎨 Frontend Setup

The frontend is a simple static web page. You can serve it with any static server.

<details open>
<summary><b>Show frontend setup commands</b></summary>
<br/>

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

</details>

> 💡 **Note:** The frontend expects the backend API to be available at `/api/...` (relative path). If you are running the backend locally on port 5000, you may need to configure the API base URL in the frontend configuration.

---

## 🧪 Running Tests

To run the backend unit tests:

```bash
cd backend
python -m pytest tests/
```

To run tests with coverage:

```bash
python -m pytest --cov=. tests/
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgements

- 🧠 OpenAI for providing the GPT 3.5 turbo API.
- ⚙️ Flask and the Python community for the web framework.
- ▲ Vercel for hosting and serverless deployment.

---

<div align="center">

### ⭐ If you found this project helpful, consider giving it a star

<a href="https://github.com/AbdulAzeemHashmi/AI-Resume-Analyzer/stargazers">
<img src="https://img.shields.io/badge/Star%20this%20repo-⭐-yellow?style=for-the-badge" alt="star this repo"/>
</a>

<br/><br/>

Made with ❤️ by Abdul Azeem

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:38ef7d,100:11998e&height=100&section=footer" width="100%"/>

</div>
