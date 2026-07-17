// ============================================
// Type Definitions
// ============================================

interface UploadResponse {
    success: boolean;
    text: string;
    file_type: string;
    filename: string;
    error?: string;
}

interface AnalyzeResponse {
    success: boolean;
    weaknesses: string[];
    error?: string;
}

interface EnhanceResponse {
    success: boolean;
    improved_text: string;
    error?: string;
}

// ============================================
// DOM Elements
// ============================================

const uploadArea = document.getElementById('uploadArea') as HTMLDivElement;
const fileInput = document.getElementById('fileInput') as HTMLInputElement;
const fileInfo = document.getElementById('fileInfo') as HTMLDivElement;
const fileName = document.getElementById('fileName') as HTMLSpanElement;
const fileStatus = document.getElementById('fileStatus') as HTMLSpanElement;
const analyzeBtn = document.getElementById('analyzeBtn') as HTMLButtonElement;
const resultsSection = document.getElementById('resultsSection') as HTMLDivElement;
const weaknessesList = document.getElementById('weaknessesList') as HTMLUListElement;
const improvedText = document.getElementById('improvedText') as HTMLDivElement;
const downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement;
const errorMessage = document.getElementById('errorMessage') as HTMLDivElement;
const uploadPrompt = document.getElementById('uploadPrompt') as HTMLDivElement;
const uploadProgress = document.getElementById('uploadProgress') as HTMLDivElement;
const progressBar = document.getElementById('progressBar') as HTMLDivElement;

// ============================================
// State
// ============================================

let uploadedText: string = '';
let uploadedFileType: string = '';
let uploadedFileName: string = '';
let weaknesses: string[] = [];
let improvedTextContent: string = '';

// ============================================
// Utility Functions
// ============================================

function showError(message: string): void {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
        errorMessage.classList.add('hidden');
    }, 5000);
}

function updateProgress(percent: number): void {
    progressBar.style.width = `${percent}%`;
}

// ============================================
// File Upload
// ============================================

uploadArea.addEventListener('click', () => {
    fileInput.click();
});

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('border-blue-500', 'bg-blue-50');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('border-blue-500', 'bg-blue-50');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('border-blue-500', 'bg-blue-50');
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
        handleFile(files[0]);
    }
});

fileInput.addEventListener('change', () => {
    if (fileInput.files && fileInput.files.length > 0) {
        handleFile(fileInput.files[0]);
    }
});

async function handleFile(file: File): Promise<void> {
    // Validate file type
    const validExtensions = ['.pdf', '.docx'];
    const ext = '.' + file.name.split('.').pop()?.toLowerCase();
    
    if (!validExtensions.includes(ext || '')) {
        showError('Please upload a PDF or DOCX file.');
        return;
    }

    // Show progress
    uploadPrompt.classList.add('hidden');
    uploadProgress.classList.remove('hidden');
    updateProgress(10);

    try {
        const formData = new FormData();
        formData.append('file', file);

        updateProgress(30);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        updateProgress(70);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Upload failed');
        }

        const data: UploadResponse = await response.json();

        if (!data.success) {
            throw new Error(data.error || 'Upload failed');
        }

        updateProgress(100);

        // Store uploaded data
        uploadedText = data.text;
        uploadedFileType = data.file_type;
        uploadedFileName = data.filename;

        // Show file info
        fileName.textContent = data.filename;
        fileInfo.classList.remove('hidden');
        analyzeBtn.classList.remove('hidden');

        // Reset progress
        setTimeout(() => {
            uploadPrompt.classList.remove('hidden');
            uploadProgress.classList.add('hidden');
            updateProgress(0);
        }, 500);

    } catch (error: any) {
        showError(error.message || 'Upload failed. Please try again.');
        uploadPrompt.classList.remove('hidden');
        uploadProgress.classList.add('hidden');
        updateProgress(0);
    }
}

// ============================================
// Analyze & Enhance
// ============================================

analyzeBtn.addEventListener('click', async () => {
    if (!uploadedText) {
        showError('Please upload a resume first.');
        return;
    }

    analyzeBtn.disabled = true;
    analyzeBtn.textContent = '⏳ Analyzing...';

    try {
        // Step 1: Analyze
        const analyzeResponse = await fetch('/api/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: uploadedText })
        });

        if (!analyzeResponse.ok) {
            const error = await analyzeResponse.json();
            throw new Error(error.error || 'Analysis failed');
        }

        const analyzeData: AnalyzeResponse = await analyzeResponse.json();

        if (!analyzeData.success) {
            throw new Error(analyzeData.error || 'Analysis failed');
        }

        weaknesses = analyzeData.weaknesses || [];

        // Step 2: Enhance
        const enhanceResponse = await fetch('/api/enhance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: uploadedText,
                weaknesses: weaknesses
            })
        });

        if (!enhanceResponse.ok) {
            const error = await enhanceResponse.json();
            throw new Error(error.error || 'Enhancement failed');
        }

        const enhanceData: EnhanceResponse = await enhanceResponse.json();

        if (!enhanceData.success) {
            throw new Error(enhanceData.error || 'Enhancement failed');
        }

        improvedTextContent = enhanceData.improved_text || '';

        // Display results
        displayResults();

    } catch (error: any) {
        showError(error.message || 'Processing failed. Please try again.');
    } finally {
        analyzeBtn.disabled = false;
        analyzeBtn.textContent = '🧠 Analyze & Improve Resume';
    }
});

function displayResults(): void {
    // Show weaknesses
    weaknessesList.innerHTML = '';
    if (weaknesses.length > 0) {
        weaknesses.forEach(w => {
            const li = document.createElement('li');
            li.textContent = w;
            weaknessesList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No weaknesses found. Great resume!';
        weaknessesList.appendChild(li);
    }

    // Show improved text
    improvedText.textContent = improvedTextContent || 'No improved text generated.';

    // Show results section
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// Download
// ============================================

downloadBtn.addEventListener('click', async () => {
    if (!improvedTextContent) {
        showError('No improved resume to download.');
        return;
    }

    downloadBtn.disabled = true;
    downloadBtn.textContent = '⏳ Generating...';

    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: improvedTextContent,
                file_type: uploadedFileType || 'pdf'
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Download failed');
        }

        // Download the file
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `improved_resume.${uploadedFileType || 'pdf'}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

    } catch (error: any) {
        showError(error.message || 'Download failed. Please try again.');
    } finally {
        downloadBtn.disabled = false;
        downloadBtn.textContent = '📥 Download Improved Resume';
    }
});