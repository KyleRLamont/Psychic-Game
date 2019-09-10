var lettersGuessed = [];
var wins = 0;
var losses = 0;
var guessesleft = 9;

var computerGuess = String.fromCharCode(Math.round(Math.random() *26) +97);

console.log(computerGuess);

document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();
    console.log(keyPress);
    addLetter(keyPress);
}
function addLetter (userskeyPress) {
    lettersGuessed.push(userskeyPress);
    console.log(lettersGuessed);
    showLettersGuessed();
    guessMatch(userskeyPress);
}
function showLettersGuessed() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("guessestxt").innerHTML = tempStr;
}
function guessMatch (character) {
    if (character === computerGuess) {
        wins = wins + 1;
        showWins();
        alert("Congratulations!");
        resetVariables();
        console.log(computerGuess);
    } else if (guessesleft === 0) {
        losses = losses + 1;
        showLosses();
        alert("You are out of guesses. Please try again...")
        resetVariables ();
        console.log(computerGuess);
    } else {
        guessesleft = guessesleft - 1;
        showGuessesleft();
    }
}
function showWins() {
    document.getElementById("winstxt").innerHTML = wins;
}
function showGuessesleft() {
    document.getElementById("guessesfree").innerHTML = guessesleft;
}
function showLosses() {
    document.getElementById("lossestxt").innerHTML = losses;
}
function resetVariables () {
    lettersGuessed = [];
    document.getElementById("guessestxt").innerHTML = lettersGuessed;
    guessesleft = 9;
    document.getElementById("guessesfree").innerHTML = guessesleft;
    computerGuess = String.fromCharCode(Math.round(Math.random() *26) +97);
}
function startGame() {
    showGuessesleft();
    showWins();
}
startGame();