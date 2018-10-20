// ====================================================
// WORD GUESS CLI node.js app
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================

// word.js
// contains the Word contructor that depends on the Letter constructor
// Word consructs an object representing the current word user is guessing
// Word defines:

// var wordLetters = []; an array of "new Letter" objects representing the underlying word

// function wordString() {}
// var randomWordsString = ; gets the csv contents of random-words.txt file
// turns randomWordsString into randomWordsArray of individual words
// var randomNumber = ; a random number between 1 and randomWords.length
// var chosenWordString = randomWords[randomNumber]; chooses a word from the randomWords array
// var chosenWordObject = ; function? turn chosenWordString into
// returns a string representing the letters of the underlying word
// in either their guessed or unguesses state (returns current guess state)
// calls each "new Letter" and displays either an underscore or the letter,
// depending on the "guessed" boolean value of the letter

// function guessALetter() {}
// calls the checker(guess) function on every letter in the wordLetters array
// (the checker(guess) function in letter.js)

// index.js requires word.js, inquirer
// word.js requires letter.js
// letter.js (no requires)


// ==========================================================================

var Letter = require("./letter.js");

// ==========================================================================
// ==========================================================================


// INPUT VARIABLES FOR THE Letter constructor
var realLetter = {
    char: "a",
    guessed: false
};

var userGuess = "a";

// ==========================================================================

// CONSTRUCTING A new Letter
var letter = new Letter();
// console.log(letter);

// ==========================================================================


// CHECKING THE OUTPUT OF THE Letter constructor
console.log(letter.charChecker(userGuess, realLetter));
// console.log(letter.charDisplay(realLetter));

// ==========================================================================
// ==========================================================================
// ==========================================================================


// DEMO WORD THAT WILL BE SELECTED BY index.js
var chosenWord = "JABBERWOCKY";

// new Word CONSTRUCTOR FUNCTION
var Word = function (currentWord) {

    this.objectLetterArray = [];

    // make an Array out of chosenWord, passed in as (currentWord)
    var wordArray = currentWord.split('');
    // console.log(wordArray);

    // loop through wordArray, and
    for (let i = 0; i < wordArray.length; i++) {

        // on each loop, have a variable stand for the letter element of the Array
        var arrayLetter = wordArray[i];
        // console.log(arrayLetter);

        // then send each letter to "new Letter()" to turn it into an object
        // which has char:'A', guessed: false
        var objectLetter = new Letter(arrayLetter);
        // console.log(objectLetter);

        this.objectLetterArray.push(objectLetter);

    }
    // console.log(this.objectLetterArray);
    // return this.objectLetterArray;

    this.guessCheck = function (userLetter) {

        for (let j = 0; j < this.objectLetterArray.length; j++) {

            var checked = letter.charChecker(userLetter, this.objectLetterArray[j]);
            console.log(checked);

        }
        console.log(checked);
        return checked;
        // return this.objectLetterArray;

    };

    // console.log(this.guessCheck);

};


var thisWord = new Word(chosenWord);
// console.log(thisWord);
console.log(thisWord.guessCheck(userGuess));
console.log(thisWord.objectLetterArray);