function restartGame() {
    window.location.href = 'index.html';
}

function getGameParameters(paramToGet) {
    const params = new URLSearchParams(window.location.search);
    return params.get(paramToGet);
}

function displayPlayerName() {
    document.getElementById("player-name-header").innerHTML += getGameParameters('playerName');
}

function initializeGame() {
    displayPlayerName();
    initializeTimer();
}

let seconds = -1;
function initializeTimer() {
    seconds++;
    document.getElementById('timer').textContent = seconds;
}

// Update the timer every second
setInterval(initializeTimer, 1000);

