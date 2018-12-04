//function to replace * in wordIndex with correct guessed letters
String.prototype.setCharAt = function (index, char) {
    if (index > this.length - 1) {
        return this.toString();
    }
    else {
        return this.substr(0, index) + char + this.substr(index + 1);
    }
}



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

//function to replace * in wordIndex with correct guessed letters
String.prototype.setCharAt = function (index, char) {
    if (index > this.length - 1) {
        return this.toString();
    }
    else {
        return this.substr(0, index) + char + this.substr(index + 1);
    }
}

//On load, computer chooses random word.  

document.addEventListener("DOMContentLoaded", function (event) {
    //     randomIndex = Math.floor(Math.random() * (wordArray.length));
    //     wordIndex = wordArray[randomIndex];
    //     console.log(wordArray[randomIndex]);
    //     console.log(wordIndex);

    //function to replace * in wordIndex with correct guessed letters
    String.prototype.setCharAt = function (index, char) {
        if (index > this.length - 1) {
            return this.toString();
        }
        else {
            return this.substr(0, index) + char + this.substr(index + 1);
        }
    }

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
    //get the index of chosen word, then give blanks for the index value of the word. 
    for (var i = 0; i < wordArray[randomIndex].length; i++) {
        answerArray[i] = " * ";
        //answerArray.repeat(answerArray.length());
        console.log(answerArray)
    };
    console.log(wordIndex);
    var stringArray = answerArray.join(" ");
    document.getElementById("correct_word").innerHTML = stringArray;
    //replace the wins counter with 0.
    //document.getElementById("#wins").innerText = wins;
}


//only push letters that have not already been pressed
function makeGuess(letter) {
    //function to replace * in wordIndex with correct guessed letters
    String.prototype.setCharAt = function (index, char) {
        if (index > this.length - 1) {
            return this.toString();
        }
        else {
            return this.substr(0, index) + char + this.substr(index + 1);
        }
    }
    //var userGuess = event.key;
    if (userGuess.indexOf(letter) === -1) {
        userGuess.push(letter);
        console.log(letter);
        var currentWordStars = document.getElementById("correct_word").innerText;
        console.log(currentWordStars);
        currentWordStars = setCharAt(wordIndex.indexOf(letter), letter);
        document.getElementById("correct_word").innerText = currentWordStars;
    };


    //check if userGuess is in randomIndex
    //if wrong guess, update remaining guessess -1. 

    if (wordIndex.indexOf(letter) === -1) {
        //maxWrong = maxWrong -1
        maxWrong--;
        console.log(maxWrong);
        //console.log
        if (maxWrong > -1) {
            remainingField.innerText = maxWrong;
        }
        //when user is out of wrong guesses, increase losses to 1 and display
        if (maxWrong === 0) {
            losses++;
            lossesField.innerText = losses;
            startGame();
        }
    }





};


