document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const header = document.querySelector('header');

    toggleButton.addEventListener('click', function() {
        header.classList.toggle('menu-open'); // Fügt eine Klasse hinzu, die das Menü öffnet oder schließt
    });
});
