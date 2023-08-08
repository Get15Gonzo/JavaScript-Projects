let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

const startgame = () => {
    if (sum <= 20) {
        message ="Do you want to draw another?"
        console.log(message)
    } else if (sum === 21) {
        message ="Whoo! Blackjack!"
        console.log(message)
        hasBlackJack = true
    } else {
        message ="You're out of the game!"
        console.log(message)
        isAlive = false
    }
}