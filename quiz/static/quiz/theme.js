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
            submitAnswer = document.getElementById("submitAnswer")
            if (submitAnswer != null && submitAnswer != undefined){
                if (savedTheme === 'light-theme'){
                    submitAnswer.classList.remove('btn-outline-light');
                    submitAnswer.classList.add('btn-outline-dark');
                } else{
                    submitAnswer.classList.add('btn-outline-light');
                    submitAnswer.classList.remove('btn-outline-dark');
                }
            }

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
            var submitButtons = document.querySelectorAll('.btn-outline-light');
            if (submitButtons.length==0){
                submitButtons = document.querySelectorAll('.btn-outline-dark');
                submitButtons.forEach(element => {
                    element.classList.add('btn-outline-light');
                    element.classList.remove('btn-outline-dark');
                });
            } else {
                submitButtons.forEach(element => {
                    element.classList.remove('btn-outline-light');
                    element.classList.add('btn-outline-dark');
                    
                });
            }

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
