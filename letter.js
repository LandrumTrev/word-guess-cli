// ====================================================
// WORD GUESS CLI node.js app
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================

// letter.js
// contains the Letter constructor, used by word.js (Word constructor)

// constructor function for an individual letter
// stores the letter's value and controls whether it is displayed or not
// depending on whether it has been guessed by the user


var Letter = function (char) {

    //   * A string value to store the underlying character for the letter
    this.character = char;

    //   * A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;

    //   * A function that returns the underlying character if the letter has been guessed, 
    //  or a placeholder (like an underscore) if the letter has not been guessed
    this.display = function () {
        if (this.guessed === true) {
            return this.character;
        } else {
            return "_";
        }
    };

    //   * A function that takes a character as an argument and checks it against the underlying character, 
    //  updating the stored boolean value to true if it was guessed correctly
    this.check = function (userGuess) {
        if (userGuess === this.character) {
            this.guessed = true;
        }
    };

};

// export the Letter constructor function, to be used by word.js
module.exports = Letter;


// // DEMO CODE for letter.js
// var letter = new Letter("a");

// console.log(letter.character); // a
// console.log(letter.guessed); // false
// console.log(letter.display()); // _
// letter.check("a");
// console.log(letter.guessed); // true
// console.log(letter.display()); // a
