function checkInputs(){

    let cardsNumberRequested = parseInt(document.getElementById("cards-number").value);
    let playerName = document.getElementById("player-name").value;
    const errorContainer = document.getElementById('errorContainer');

    errorContainer.innerHTML = '';

    if (cardsNumberRequested > 30 || !cardsNumberRequested ){
        const errorMessage = document.createElement('h2');
        errorMessage.textContent = 'Select a number between 1 - 30'
        errorContainer.appendChild(errorMessage)
        alert('Please select a valid number of pairs.')
    }
    else if (!playerName){
        const errorMessage = document.createElement('h2');
        errorMessage.textContent = 'Insert Player Name'
        errorContainer.appendChild(errorMessage)
        alert('Please Insert Player Name.')
    }
    else {
        window.location.href = `game-page.html?cardsNumberRequested=${cardsNumberRequested}&playerName=${playerName}`
    }
}