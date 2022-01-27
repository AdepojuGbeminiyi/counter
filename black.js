
let firstCard = 11
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    console.log("Do you want to draw another card?")
   
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack")
    hasBlackJack = true 
} else {
    console.log("You are out of the Game, Sorry!")
    isAlive = false
}
console.log(hasBlackJack)
console.log(isAlive)


// let age = 18

// if ( age < 20) {
//     console.log("You can not enter the club")
// } else {
//     console.log("welcome")
// }

// let age = 100

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday cardfron the king")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }