const rollButton = document.querySelector('#roll-button')
const showRollsButton = document.querySelector('#show-rolls')
const showRollList = document.querySelector('#roll-list')
const numberOfDice = document.querySelector('#numdice')
const numberOfSides = document.querySelector('#numsides')
const sumOutput = document.querySelector('#display-sum')
const resetButton = document.querySelector('#reset-button')

let diceRolls = []


rollButton.addEventListener('click', function () {
    let rolls = 0
    let numDice = numberOfDice.value
    while (rolls < numDice) {
        let x = Math.floor(Math.random() * numberOfSides.value) + 1;
        diceRolls.push(x)

        rolls++
        console.log(x)
    }

    diceRollsSum = sumDiceRolls()

    console.log(diceRolls)
    console.log(diceRollsSum)
    sumOutput.innerHTML = 'You rolled a ' + diceRollsSum

})

showRollsButton.addEventListener('click', function () {
    let index = 0
    let list = ''
    while (index < diceRolls.length) {
        list = list + '<li>' + diceRolls[index] + '</li>'
        index++
    }

    showRollList.innerHTML = list
})

resetButton.addEventListener('click', function () {
    diceRolls = []
    sumOutput.innerHTML = ''
    showRollList.innerHTML = ''
    numberOfDice.value = ''
    numberOfSides.value = ''
})

function sumDiceRolls() {
    let total = 0
    let index = 0
    while (index < diceRolls.length) {
        total = total + diceRolls[index]

        index++
    }

    return total


}