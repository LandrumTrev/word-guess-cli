// ====================================================
// WORD GUESS CLI node.js app
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================

// letter.js
// contains the Letter constructor, used by word.js (Word constructor)

// displays either a blank (unguessed letter) or displays a guessed letter
// Letter constructor defines:

// Contains a constructor, Letter. 
// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, 
//  or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, 
//  updating the stored boolean value to true if it was guessed correctly



// var aLetter = {
//     char: "a",
//     guessed: false
// };

// var aLetter = "b";
// var userGuess = "b";

var Letter = function (aLetter) {


    // return the letter object with it's "guessed:" property changed or not
    this.charChecker = function (uG, rL) {

        if (uG === rL.char) {
            // if user guesses the letter, change "guessed:" to true
            rL.guessed = true;
            return rL;
        } else {
            // otherwise, return the letter object unchanged
            return rL;
        }
    };


    this.charDisplay = function (theLet) {

        if (theLet.guessed === true) {
            // display the letter if "guessed:" is true
            return theLet.char;
        } else {
            // or display "_" if "guessed:" is false
            return "_";
        }
    };


    // create a new letter object when calling a "new Letter(arrayLetter)"
    aLetter = {
        char: aLetter,
        guessed: false
    };

    // return a new letter object as the value of an instance "new Letter(arrayLetter)"
    // console.log(aLetter);
    return aLetter;


};

module.exports = Letter;


// var letter = new Letter();

// console.log(letter.charChecker(userGuess, aLetter));
// console.log(letter.charDisplay(aLetter));