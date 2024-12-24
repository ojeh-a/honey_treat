console.log("19th DECEMBER");
console.log("\n");

const welcomeMessage = document.getElementById("welcomeMessage");
const instruction = document.getElementById("instruction");
const guessInput = document.getElementById("guessInput");
const inputLabel = document.getElementById("inputLabel");
let guessNumber = document.getElementById("guessNumber");
const checkButton = document.getElementById("checkButton");
const feedbackMessage = document.getElementById("feedbackMessage");
let attemptCount = document.getElementById("attemptCount");
const luck = document.getElementById("luck");
const reset = document.getElementById('reset');
const contain = document.getElementById("contain");

console.log(welcomeMessage);

let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);

function ojeh(e) {
  e.preventDefault();
  let myGuess = Number(guessNumber.value);
//   console.log("My name is Ojeh, let's I'm thinking of a number, guess the number.");
  console.log(myGuess);

  if (myGuess < 1 || myGuess > 100) {
    feedbackMessage.textContent = `Your number must be between 1 and 100`
  }
  else if (myGuess === randomNumber) {
    feedbackMessage.textContent = `Congratulations, you got it right`;
    guessNumber.value = "";
    contain.style.background = "green"; 
  }
  else if (myGuess < randomNumber){
    feedbackMessage.textContent = `oops, you got it wrong, your number is lower, try again`;
    guessNumber.value = "";
  }
  else {
   feedbackMessage.textContent = `oops, you got it wrong, your number is higher than expected, try again`;
     guessNumber.value = "";
  }
}


checkButton.addEventListener("click", ojeh);