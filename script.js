// Accessing all toggle buttons
var toggleButtons = document.querySelectorAll('.toggle-btn');
toggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var targetId = button.getAttribute('data-target');
        if (targetId) {
            var content = document.getElementById(targetId);
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.textContent = 'Hide ' + button.textContent.replace('Toggle ', '');
            }
            else {
                content.style.display = 'none';
                button.textContent = 'Toggle ' + button.textContent.replace('Hide ', '');
            }
        }
    });
});
