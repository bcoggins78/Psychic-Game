
// Create an array of all possible choices 
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
var crystalBall = document.getElementById("crystal-ball");
var winAudio = document.getElementById("win");
var loseAudio = document.getElementById("lose");

// CPU picks a random letter and contents is displayed in the console
var cpuPick = function () {
    computerLetter = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerLetter);
};

cpuPick();

// Clears the guesses array, "guesses left", and "guesses so far" when the game is won or lost and cpu picks another letter from the choices array
var resetGame = function () {
    guessesLeft = 9;
    guesses = [];
    guessText.textContent = " ";
    cpuPick();
};






document.onkeyup = function (event) {

    // User picks a letter and sets it to lowercase
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);


    // Checks to see if the user has already picked the letter by checking the guesses array.
    if (guesses.includes(userGuess) === false) {

        // Verifies the user is picking a letter by looking in the choices array
        if (choices.includes(userGuess)) {

            // Adds the user's guess to the guesses array
            guesses.push(userGuess);

            // Adds the user's guess to "Guesses So Far:" in the HTML
            guessText.textContent +=userGuess + " ";

            // Checks to see if the user's guess matches the letter the cpu picked
            if (userGuess === computerLetter) {

                // if condition is met, the wins count increases by 1 and the game is reset
                crystalBall.classList.remove("lose");
                crystalBall.classList.add("win");
                winAudio.play();
                wins++;
                alert("How did you know I picked \"" + computerLetter + "\"?");
                resetGame();

                // Checks to see how many guesses are left.  If the guesses count is greater than 1, then the "Gueses left" is reduced by 1
            } else if (guessesLeft > 1) {
                guessesLeft--;

                // Once the guessesLeft  equals 1, then the losses increases by 1 and the game resets
            } else if (guessesLeft === 1) {
                crystalBall.classList.remove("win");
                crystalBall.classList.add("lose");
                loseAudio.play();
                losses++;
                alert("I picked \"" + computerLetter + "\" I guess it just wasn't in the cards!");
                resetGame();

            }
        }

        // display the values on the page
        winsText.textContent = wins;
        lossesText.textContent = losses;
        guessesLeftText.textContent = guessesLeft;



    }
}

