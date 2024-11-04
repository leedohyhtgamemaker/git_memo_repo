document.addEventListener('DOMContentLoaded', () => {
    const contentTextarea = document.getElementById('note-content');
    const saveFileButton = document.getElementById('save-file');

    // Load saved note from Local Storage
    contentTextarea.value = localStorage.getItem('note-content') || '';

    // Save note to Local Storage on input
    contentTextarea.addEventListener('input', () => {
        localStorage.setItem('note-content', contentTextarea.value);
    });

    // Save note to a file
    saveFileButton.addEventListener('click', () => {
        const content = contentTextarea.value.trim();
        const blob = new Blob([content], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'note.txt';
        link.click();
    });
});
