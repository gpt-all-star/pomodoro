let breakTimer;
let breakSeconds = 0;
let breakMinutes = 5;
let sessionCount = 0;

function startBreak() {
    clearInterval(breakTimer);
    breakTimer = setInterval(function() {
        breakSeconds--;
        if(breakSeconds < 0) {
            breakMinutes--;
            breakSeconds = 59;
        }
        if(breakMinutes < 0) {
            clearInterval(breakTimer);
            breakMinutes = 5;
            breakSeconds = 0;
            sessionCount++;
            if(sessionCount === 4) {
                breakMinutes = 15;
                sessionCount = 0;
            }
        }
        document.getElementById('break-minutes').innerText = breakMinutes < 10 ? '0' + breakMinutes : breakMinutes;
        document.getElementById('break-seconds').innerText = breakSeconds < 10 ? '0' + breakSeconds : breakSeconds;
    }, 1000);
}

document.getElementById('start').addEventListener('click', startBreak);
