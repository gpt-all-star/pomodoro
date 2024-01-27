let timer;
let seconds = 0;
let minutes = 25;

function startTimer() {
    clearInterval(timer);
    timer = setInterval(function() {
        seconds--;
        if(seconds < 0) {
            minutes--;
            seconds = 59;
        }
        if(minutes < 0) {
            clearInterval(timer);
            minutes = 25;
            seconds = 0;
        }
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function stopTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    document.getElementById('minutes').innerText = '25';
    document.getElementById('seconds').innerText = '00';
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
