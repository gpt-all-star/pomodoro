let sessionCount = 0;

function incrementSessionCount() {
    sessionCount++;
    document.getElementById('session-counter').innerText = sessionCount;
}

document.getElementById('stop').addEventListener('click', incrementSessionCount);
