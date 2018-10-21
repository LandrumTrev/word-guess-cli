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

    // An Array of `new` Letter objects representing the letters of the underlying word
    // .split theWord passed in as theWord into an array of letters
    this.letterArray = theWord.split('');


    // The master Array to hold the current state of all letter objects
    this.letterObjectsArray = function () {

        // array to collect the return value of letterObjectsArray into
        var letsArray = [];

        // forEach letter in the Array created out of the Word's letters...
        this.letterArray.forEach(function (l) {

            // create a new Letter object variable for each letter
            var letterObject = new Letter(l);

            // and then .push each Letter object's current displayed char or _ into the displayArray
            letsArray.push(letterObject);

        });

        // return letsArray as the value of letterObjectsArray
        return letsArray;

    };


    // A function that returns a string representing the word. 
    // This should call the function on each letter object (the first function defined in `Letter.js`) 
    // that displays the character or an underscore and concatenate those together.
    this.displayString = function () {

            // Array to hold the current display characters and/or _ for each letter
            var displayArray = [];

            // forEach letter object in state-holding letterObjectsArray...
            this.letterObjectsArray().forEach(function (ltrObj) {

                // .push each Letter object's current displayed char or _ into the displayArray
                displayArray.push(ltrObj.display());

            });

            // and then convert the filled displayArray into a displayString
            var displayStr = (displayArray.join(' '));

            // and return the displayString as the value of word.displayString()
            return displayStr;

        // return "Alice in Wonderland";

    };
    

    // A function that takes a character as an argument and calls the guess function 
    // on each letter object (the second function defined in `Letter.js`)
    // this.guessLetter = function (guess) {

    // };
};

module.exports = Word;

// DEMO CODE FOR word.js

var word = new Word("jabberwocky");


// console.log(word.letterArray);
console.log(word.displayString());
// console.log(word.letterObjectsArray());







// // DEMO CODE for letter.js
// var letter = new Letter("a");

// console.log(letter.character); // a
// console.log(letter.guessed); // false
// console.log(letter.display()); // _
// letter.check("a");
// console.log(letter.guessed); // true
// console.log(letter.display()); // a