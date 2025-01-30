document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');

    // Check if button exist
    if (themeToggle) {
        // Set the theme based on localstorage
        function applySavedTheme() {
            const savedTheme = localStorage.getItem('theme');
            
            if (savedTheme === 'light-theme') {
                document.body.classList.add('light-theme');
                themeToggle.textContent = darkThemeString;
            } else {
                document.body.classList.remove('light-theme');
                themeToggle.textContent = lightThemeString;
            }

            // Set the theme to all the elements with class "primary-color"
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

        // Set the theme on page load
        applySavedTheme();

        themeToggle.addEventListener('click', () => {
            const isLightTheme = document.body.classList.toggle('light-theme');

            // Toggle for "primary-color" elements
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

            // Save theme in localstorage
            if (isLightTheme) {
                localStorage.setItem('theme', 'light-theme');
                themeToggle.textContent = darkThemeString;
            } else {
                localStorage.setItem('theme', 'dark-theme');
                themeToggle.textContent = lightThemeString;
            }
        });
    }
});
