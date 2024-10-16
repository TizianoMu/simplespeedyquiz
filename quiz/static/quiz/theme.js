document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');

    // Assicurati che il pulsante per il toggle del tema esista
    if (themeToggle) {
        // Funzione per applicare il tema memorizzato
        function applySavedTheme() {
            const savedTheme = localStorage.getItem('theme');
            
            if (savedTheme === 'light-theme') {
                document.body.classList.add('light-theme');
                themeToggle.textContent = 'Tema Scuro';
            } else {
                document.body.classList.remove('light-theme');
                themeToggle.textContent = 'Tema Chiaro';
            }

            // Applica il tema agli elementi con la classe "primary-color"
            const elements = document.querySelectorAll('.primary-color');
            elements.forEach(element => {
                if (savedTheme === 'light-theme') {
                    element.classList.add('light-theme');
                } else {
                    element.classList.remove('light-theme');
                }
            });
        }

        // Applica il tema quando la pagina viene caricata
        applySavedTheme();

        // Aggiungi evento al toggle del tema
        themeToggle.addEventListener('click', () => {
            const isLightTheme = document.body.classList.toggle('light-theme');

            // Toggle per gli elementi con la classe "primary-color"
            const elements = document.querySelectorAll('.primary-color');
            elements.forEach(element => {
                element.classList.toggle('light-theme');
            });

            // Memorizza il tema nel localStorage
            if (isLightTheme) {
                localStorage.setItem('theme', 'light-theme');
                themeToggle.textContent = 'Tema Scuro';
            } else {
                localStorage.setItem('theme', 'dark-theme');
                themeToggle.textContent = 'Tema Chiaro';
            }
        });
    }
});
