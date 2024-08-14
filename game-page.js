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
    displayCards();
}

let seconds = -1;
function initializeTimer() {
    seconds++;
    document.getElementById('timer').textContent = seconds;
}

// Update the timer every second
setInterval(initializeTimer, 1000);


// Card Game
function displayCards() {
    const numOfCards = parseInt(getGameParameters('cardsNumberRequested') * 2);
    const gridContainer = document.getElementById('grid-container');
    
    // Clear any existing cards
    gridContainer.innerHTML = '';

    // Calculate the number of rows and columns
    const containerWidth = gridContainer.clientWidth;
    const containerHeight = gridContainer.clientHeight;
    const cardSize = Math.min(containerWidth, containerHeight) / Math.ceil(Math.sqrt(numOfCards));
    
    gridContainer.style.gridTemplateColumns = `repeat(auto-fill, minmax(${cardSize}px, 1fr))`;
    gridContainer.style.gridAutoRows = `${cardSize}px`;

    for (let i = 0; i < numOfCards; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        // card.dataset.value = i % (numOfCards / 2) + 1; // Example value assignment
        // card.innerHTML = `<img src="https://via.placeholder.com/100?text=${card.dataset.value}" alt="Card ${card.dataset.value}">`;
        gridContainer.appendChild(card);
    }
}