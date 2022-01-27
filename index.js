//document.getElementById("count-el").innerText = 5;

// let count = 5 - 7
// console.log(count)

// let myAge = 30
// let humanDogRatio = 4
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bounsPoints = 50
// console.log(bounsPoints)

// bounsPoints = bounsPoints + 50
// console.log(bounsPoints)

// bounsPoints = bounsPoints - 75
// console.log(bounsPoints)

// bounsPoints = bounsPoints + 45
// console.log(bounsPoints)

//function number() {
//  console.log(42)
//}
//number()

// let lapsCompleted = 0
// function increment() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }
// increment()
// increment()
// increment()

//         let lap1 = 34
//         let lap2 = 33
//         let lap3 = 36
// function finishLapTime(){
//     let totalLapTime = lap1 + lap2 + lap3
//     console.log(totalLapTime)
// }
// finishLapTime()

// let username = "Dee"
// let message = "You have three new notifications"
// let messageToUser = username + ", " + message + "!"
// console.log(messageToUser)

// let name = "gbemi"
// let greeting = "Hi, my name is "
// let myGreeting = greeting  + name + "! "
// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")
// let name = "hello my name is gbemi "
// let greeting = "welcome to the home of love"
// welcomeEl.innerText = name + greeting
// welcomeEl.innerText = welcomeEl.innerText + " kisses"

// intialize the count as 0
// listen for clicks on the increment butten
// increase the variable when the button is cliked
// change the count-el in the HTML to reflect your count

let saveEl = document.getElementById("save-el");
//  let countEl = document.getElementById("count-el")
// let incrementCount = 0

const increment() {
  const countEl = document.getElementById("count-el");
  const countValue = countEl.textContent;
  const count = parseInt(countValue, 10);
  const incrementCount = count + 1;
  countEl.textContent = incrementCount;
}
const save() {
  const countEl = document.getElementById("count-el");
  const countValue = countEl.textContent;
  let countStr = countValue + " - ";
  saveEl.textContent += countStr;
  console.log(countValue);
  countEl.textContent = 0;
  
}

// let countEL = document.getElementById("count-el");

// let decreaseCount = 0;

const decrease() {
  const countEl = document.getElementById("count-el");
  const countValue = countEl.textContent;
  const count = parseInt(countValue, 10);
  const incrementCount = count - 1;
  countEl.textContent = incrementCount;
}

// let num1 = 10
// let num2 = 2
// let num3 = 20
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// document.getElementById("num3-el").textContent = num3

// let sumEl = document.getElementById("sum-el")

//   function add() {
//     let result = num1 + num2 + num3
//     sumEl.textContent = "sum:" + result
//   }
// function subtract() {
//   let result = num1 - num2 - num3
//     sumEl.textContent = "sum:" + result
// }
// function divide() {
//   let result = num1 / num2 / num3
//   sumEl.textContent = "sum:" + result
// }
// function multiply() {
//   let result = num1 * num2 * num3
//     sumEl.textContent = "sum:" + result
// }
