
//Create array of variable words as answers



var wordArray =
    [
        "guitar",
        "whiskey",
        "barn",
        "horse",
        "beer",
        "truck",
        "farm",
        "south",
        "cowgirl",
        "boots",
        "neon",
        "country",
        "flag",
    ];

/**Set variables for: 
* max number of wrong guesses
* wrong guesses
* correct guesses
* index value of current word
* wins
* losses
*/

var maxWrong = 5;
var userGuess = [];
var wrongGuesses = [];
var answerArray = [];
var wins = 0;
var losses = 0;
var randomIndex;
var wordIndex;
var winsField;
var lossesField;
var remaningField;

//On load, computer chooses random word.  

document.addEventListener("DOMContentLoaded", function (event) {

    //display remaning wrong guesses, wins, losses

    winsField = document.getElementById("wins");
    lossesField = document.getElementById("losses");
    remainingField = document.getElementById("remaining_guesses");
    remainingField.innerText = maxWrong;
    winsField.innerText = wins;
    lossesField.innerText = losses;

    startGame();

    /*//get the index of chosen word, then give blanks for the index value of the word. 
    for (var i = 0; i < wordArray[randomIndex].length; i++) {
        answerArray[i] = " * ";
        //answerArray.repeat(answerArray.length());
        console.log(answerArray)
    };

    var stringArray = answerArray.join(" ");
    document.getElementById("correct_word").innerHTML = stringArray;
    //replace the wins counter with 0.
    //document.getElementById("#wins").innerText = wins;*/

});

//function to record the user guess

document.onkeydown = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(event.key.toLowerCase())
    };
};

//reset the game when lossess increases
function startGame() {
    maxWrong = 5;
    randomIndex = Math.floor(Math.random() * (wordArray.length));
    wordIndex = wordArray[randomIndex];
    remainingField.innerText = maxWrong;

    //get the index of chosen word, then give stars for the index value of the word. 
    for (var i = 0; i < wordArray[randomIndex].length; i++) {
        answerArray[i] = "*";
        //answerArray = answerArray.length();
        //console.log(answerArray)
    };
    //console log the random word
    console.log(wordIndex);

    var stringArray = answerArray.join("");
    document.getElementById("correct_word").innerHTML = stringArray;
    userGuess = [];
    //replace the wins counter with 0.
    //document.getElementById("#wins").innerText = wins;
}
var currentWordStars;


//only push letters that have not already been pressed
function makeGuess(letter) {

    //var userGuess = event.key;
    if (userGuess.indexOf(letter) === -1) {
        userGuess.push(letter);
        console.log(letter);

        //function to replace * in wordIndex with correct guessed letters
        String.prototype.setCharAt = function (index, char) {
            if (index > this.length - 1) {
                return this.toString();
            }
            else {
                return this.substr(0, index) + char + this.substr(index + 1);
            }
        };

        //set the stars to equal the length of the random word
        currentWordStars = document.getElementById("correct_word").innerText;
        var indices = [];
        
        for (var i = 0; i < wordIndex.length; i++) {
            if (wordIndex[i] === letter) indices.push(i);
        }
        //console.log(indices)

        for (let i = 0; i < indices.length; i++) {
            const index = indices[i];
            currentWordStars = currentWordStars.setCharAt(index, letter);
            console.log(currentWordStars);
        }
        
        document.getElementById("correct_word").innerText = currentWordStars;
        //if the user guesses the correct word, add 1 to the wins field, reset the remaining guesses, and reset the game
        if(currentWordStars === wordIndex) {
            wins++;
            winsField.innerText = wins;
            remainingField.innerText = 5;
            startGame();
        }
        
        
        
    }


    //check if userGuess is in randomIndex
    //if wrong guess, update remaining guessess -1. 

    if (wordIndex.indexOf(letter) === -1) {
        //maxWrong = maxWrong -1
        maxWrong--;
        //console.log(maxWrong);
        //console.log
        if (maxWrong > -1) {
            remainingField.innerText = maxWrong;
        }
        //show wrong letters in the wrong guesses field
        document.getElementById("wrong_letters").innerText = wrongGuesses;

        //when user is out of wrong guesses, increase losses to 1 and display
        if (maxWrong === 0) {
            losses++;
            lossesField.innerText = losses;
            startGame();
        }
    }






    // }
    //let x = '****'.setCharAt(y.indexOf(letter), letter);
    //console.log(x)

    //ISSUES: 
    // 1. index of correct word not resetting, always defaulting to largest index since page reload
    // 2. wrong guessess not showing the letter guessed. Once a wrong letter is guessed, array showing all entered letters appears. 





};


