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
let saveEl = document.getElementById("save-el")
let count = 0

const incrementCount = () => {
    count += 1
    countEl.textContent = count
}

const saveCount = () => {
    let countStr = count + " - "

    saveEl.textContent += countStr
    countEl.textContent = 0
    count=0
}
