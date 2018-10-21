// ====================================================
// WORD GUESS CLI node.js app
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================

// word.js
// contains the Word contructor that depends on the Letter constructor

// This is used to create an object representing the current word the user is attempting to guess. 
// That means the constructor should define:


// ==========================================================================

var Letter = require("./letter.js");

// ==========================================================================
// ==========================================================================

// constructor function for a new word from word, so in index.js:
// var word = new Word("jabberwocky");
var Word = function (theWord) {

    // ==========================================================================

    // .split theWord passed in as theWord into an array of letters
    this.letterArray = theWord.split('');
    // console.log(this.letterArray);

    // ==========================================================================

    // An Array of `new` Letter objects representing the letters of the underlying word
    this.wordArray = [];

    // a function to call to make the initial wordArray (all guessed: false)
    this.makeWordArray = function () {
        for (let i = 0; i < this.letterArray.length; i++) {
            var letterObject = new Letter(this.letterArray[i]);
            this.wordArray.push(letterObject);
        };
    };

    // // call this.makeWordArray() and console.log this.wordArray to check initial creation
    // this.makeWordArray();
    // console.log(this.wordArray);

    // ==========================================================================

    // the displayed output String, based on the current state of letter object in wordArray
    this.wordString = "";

    // a function to run the Letter.display() method,
    // to determine whether to display the letter or _
    this.makeWordString = function () {

        // a temporary Array to hold the whole word of output determined by Letter.display()
        var tempArray = [];

        // loop through wordArray which holds the current state of all letter objects
        for (let j = 0; j < this.wordArray.length; j++) {
            // set a variable for each letter object
            var ltr = this.wordArray[j];
            // call Letter.display() on each letter object to determine letter or _ output
            var dispLtr = ltr.display();
            // and push the determined output into the tempArray
            tempArray.push(dispLtr);
        };
        // console.log(tempArray);

        // and then convert the filled tempArray into a String called displayStr
        var displayStr = (tempArray.join(' '));
        // console.log(displayStr);

        // and make the value of this.wordString the String created by displayStr
        this.wordString = displayStr;

    };

    // call this.makeWordString() and console.log this.wordString to check initial creation
    // this.makeWordString();
    // console.log(this.wordString);


    // ==========================================================================


    this.checkGuess = function (userGuess) {

        // a temporary Array to hold the whole word of letter objects updated by checkGuess()
        var guessedArray = [];

        // loop through wordArray which holds the current state of all letter objects
        for (let k = 0; k < this.wordArray.length; k++) {

            // set a variable for each letter object
            var chkLtr = this.wordArray[k];
            // console.log(chkLtr);

            // call Letter.display() on each letter object to determine letter or _ output
            var updatedLtr = chkLtr.check(userGuess);
            // console.log(updatedLtr);

            // and push the determined output into the tempArray
            guessedArray.push(updatedLtr);
        };

        // console.log(guessedArray);

    };

    // call this.checkGuess() to test its functionality
    this.checkGuess("o");


    // ==========================================================================

};

module.exports = Word;


// DEMO CODE FOR word.js

var word = new Word("jabberwocky");
// console.log(word.letterArray);
word.makeWordArray();
// console.log(word.wordArray);
word.makeWordString();
console.log(word.wordString);
word.checkGuess("o");
