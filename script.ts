// Accessing all toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-btn') as NodeListOf<HTMLButtonElement>;

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        if (targetId) {
            const content = document.getElementById(targetId) as HTMLElement;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.textContent = 'Hide ' + button.textContent!.replace('Toggle ', '');
            } else {
                content.style.display = 'none';
                button.textContent = 'Toggle ' + button.textContent!.replace('Hide ', '');
            }
        }
    });
});
