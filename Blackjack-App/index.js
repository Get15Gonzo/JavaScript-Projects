let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

const getRandomCard = () => {
    return 5;
}

const startGame = () => {
    renderGame()
}

const renderGame = () => {
    cardsEl.textContent = "Cards: "
    
    for(i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " " 
    }

    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
        message ="Do you want to draw another?"
    } else if (sum === 21) {
        message ="Whoo! Blackjack!"
        hasBlackJack = true
    } else {
        message ="You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}

const newCard = () => {
    let card = getRandomCard()
    sum += card
    cards.push (card)
    renderGame()
}
