// Simulated database
const database = {
    notes: {
        'CCS341': 'https://drive.google.com/file/d/19msEQIVBXzODSY6M_12ROxPVXDNRr28e/view?usp=sharing',
        'MA102': 'ma102_notes.pdf'
    },
    questionPapers: {
        'CS101': 'cs101_question_paper.pdf',
        'MA102': 'ma102_question_paper.pdf'
    },
    projects: {
        'AIRLINE RESERVATION ': 'AIRLINE RESERVATION SYSTEM.pdf',
        'LIBRARY MANAGEMENT SYSTEM': 'library_management_system.pdf'
    }
};

function fetchNotes() {
    const code = document.getElementById('notes-code').value;
    const resultDiv = document.getElementById('notes-result');
    resultDiv.innerHTML = '';

    if (database.notes[code]) {
        const fileLink = document.createElement('a');
        fileLink.href = database.notes[code];
        fileLink.textContent = 'Download Notes';
        fileLink.download = database.notes[code];
        resultDiv.appendChild(fileLink);
    } else {
        resultDiv.textContent = 'No notes found for this code.';
    }
}

function fetchQuestionPapers() {
    const code = document.getElementById('question-paper-code').value;
    const resultDiv = document.getElementById('question-papers-result');
    resultDiv.innerHTML = '';

    if (database.questionPapers[code]) {
        const fileLink = document.createElement('a');
        fileLink.href = database.questionPapers[code];
        fileLink.textContent = 'Download Question Paper';
        fileLink.download = database.questionPapers[code];
        resultDiv.appendChild(fileLink);
    } else {
        resultDiv.textContent = 'No question papers found for this code.';
    }
}

function fetchProject() {
    const projectName = document.getElementById('search-project-name').value;
    const resultDiv = document.getElementById('project-search-result');
    resultDiv.innerHTML = '';

    if (database.projects[projectName]) {
        const fileLink = document.createElement('a');
        fileLink.href = database.projects[projectName];
        fileLink.textContent = 'Download Project';
        fileLink.download = database.projects[projectName];
        resultDiv.appendChild(fileLink);
    } else {
        resultDiv.textContent = 'No projects found for this name.';
    }
}
