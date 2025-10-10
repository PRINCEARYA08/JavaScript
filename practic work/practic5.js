let gameNumber = 12;
let guess = prompt("Guess a number between 1 and 20:");
while (gameNumber != guess) {
    guess = prompt("Wrong guess! Try again:");
}
console.log("Congratulations! You guessed the correct number: " + gameNumber);
alert("Congratulations! You guessed the correct number: " + gameNumber);
// This is a simple JavaScript program that implements a number guessing game using a while loop.