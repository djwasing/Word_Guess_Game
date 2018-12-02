//Create array of variable words as answers

var wordArray =
    [
        "guitar",
        "cowboy",
        "buckle",
        "horse",
        "beer",
        "truck",
        "farm",
        "south",
        "cowgirl",
        "boots",
    ];

 /**Set variables for: 
 * max number of wrong guesses
 * wrong guesses
 * correct guesses
 * index value of current word
 * wins
 * losses
 */

var maxWrong = 10;
var userGuess = [];
var wrongGuesses = [];
var answerArray = [];
var wins = 0;
var losses = 0;
var randomIndex;
var wordIndex;


//On load, computer chooses random word.  

document.addEventListener("DOMContentLoaded", function(event){
    randomIndex = Math.floor(Math.random() * (wordArray.length));
    wordIndex = wordArray[randomIndex];
    console.log(wordArray[randomIndex]);


//get the index of chosen word, then give blanks for the index value of the word. 
for (var i=0; i < wordArray[randomIndex].length; i++) {
    answerArray[i] = " * ";
    //answerArray.repeat(answerArray.length());
    console.log(answerArray)
};

var stringArray = answerArray.join(" ");
document.getElementById("correct_word").innerHTML = stringArray;
//replace the wins counter with 0.
//document.getElementById("#wins").innerText = wins;

});

//function to record the user guess

document.onkeydown = function(event) {
    var userGuess = event.key;
    if(event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(event.key.toLowerCase())
    };
};

function makeGuess(letter) {
    if (userGuess.indexOf(letter) === -1) {
        //userGuess.push(letter);
        console.log(letter);
    };
};


