document.addEventListener('DOMContentLoaded', function () {
    let timeLeft = 20;
    const timerElement = document.getElementById('time');
    
    const countdown = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert('Tempo scaduto! La risposta è stata inviata automaticamente.');
            document.querySelector('form').submit();
        }
    }, 1000);
});
