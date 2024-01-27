let alarm = new Audio('alarm.mp3');

function playSound() {
    alarm.play();
}

document.getElementById('start').addEventListener('click', playSound);
document.getElementById('pause').addEventListener('click', function() { alarm.pause(); alarm.currentTime = 0; });
