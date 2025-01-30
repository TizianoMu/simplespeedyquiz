document.addEventListener('DOMContentLoaded', function () {
    let timeLeft = 20;
    const timerElement = document.getElementById('time');
    
    const countdown = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert(TimeExpired);
            document.querySelector('form').submit();
        }
    }, 1000);
});
