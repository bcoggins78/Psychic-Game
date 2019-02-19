
// Create an array of all possible choices for the computer
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Holds the number of wins, losses, and the guesses the user has made
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var computerLetter;

// Holds the references to place the text in the HTML
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text")
var guessText = document.getElementById("guesses-text");



var cpuPick = function () {
    computerLetter = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerLetter);
};

cpuPick();

var resetGame = function () {
    guessesLeft = 9;
    guesses = [];
    cpuPick();
};

var addUserChoice = function () {
    guessText.push(guesses);
}




document.onkeyup = function (event) {

    var userGuess = event.key;
    console.log(userGuess);

    if (userGuess === computerLetter) {
        wins++;
        resetGame();

    } else if (guessesLeft > 0) {
        guessesLeft--;

    } else if (guessesLeft === 0) {
        losses++;
        resetGame();


    }

    // display the values on the page
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    // guessText.textContent += userGuess;


}


