// document.getElemntById("count-el").innerText = 5
// let count = 5
// count = count + 1
// console.log(count)

// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

let countEl = document.getElementById("count-el")
let count = 0

const incrementCount = () => {
    count = (count + 1)
    countEl.innerText = count
}

let saveEl = doucment.getElementById("save-el")

const saveCount = () => {
        saveEl.innerText = ('countEl')
}

let names = "John"
let greeting = "Hi, my name is"
let myGreeting = names + " " + greeting + "!"
console.log(myGreeting)




