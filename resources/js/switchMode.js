document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('light-switch');
    const htmlElement = document.documentElement;

    // Initial state from localStorage
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        htmlElement.classList.add('dark');
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            htmlElement.classList.add('dark');
            localStorage.setItem('dark-mode', 'true');
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('dark-mode', 'false');
        }
    });
});
