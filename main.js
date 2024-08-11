function checkCardsNumber(){

    let cardsNumberRequested =parseInt(document.getElementById("cards-number").value);
    const errorContainer = document.getElementById('errorContainer');

    errorContainer.innerHTML = '';

    if (cardsNumberRequested > 30 || !cardsNumberRequested ){
        const errorMessage = document.createElement('h2');
        errorMessage.textContent = 'Select a number between 1 - 30'
        errorContainer.appendChild(errorMessage)
        alert('Please select a valid number of pairs.')
    } else {
        window.location.href = 'game-page.html'
    }
}


function restartGame(){
    window.location.href = 'index.html'
}