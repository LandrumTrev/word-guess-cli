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

var Letter = require("./letter.js");

