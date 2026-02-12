let gameNumber = 10;
let guess = prompt("Guess a number between 1 and 20:");
if (gameNumber == guess) {
    console.log("Congratulations! You guessed the correct number: " + gameNumber);
    alert("Congratulations! You guessed the correct number: " + gameNumber);
} else {
    console.log("Sorry, you guessed the wrong number. The correct number was: " + gameNumber);
    alert("Sorry, you guessed the wrong number. The correct number was: " + gameNumber);
}