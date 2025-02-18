document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkMode = document.getElementById('themeBtn');
    if (!toggleDarkMode) return;

    jtd.addEvent(toggleDarkMode, 'click', function () {
        if (jtd.getTheme() === 'dark') {
            jtd.setTheme('light');
            toggleDarkMode.textContent = '🔄Theme';
        } else {
            jtd.setTheme('dark');
            toggleDarkMode.textContent = '🔄Theme';
        }
    });
});
