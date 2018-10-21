// ====================================================
// WORD GUESS CLI node.js app
// ©2018 Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================

// index.js
// point-of-entry file to the application

// main logic for game play
// randomly selects a word, using the Word constructor to store the word
// prompts user to guess the next letter
// keeps track of user guesses remaining

// index.js requires word.js, inquirer
// word.js requires letter.js
// letter.js (no requires)

var inquirer = require("inquirer");

var Word = require("./word.js");

var fs = require("fs");

// ==========================================================================









// ==========================================================================

// DEMO CODE FOR word.js

var word = new Word("jabberwocky");
// console.log(word.letterArray);
word.makeWordArray();
// console.log(word.wordArray);
word.makeWordString();
// console.log(word.wordString);
word.checkGuess("b");
word.checkGuess("y");
// console.log(word.checkGuess());
// console.log(word.wordArray);
console.log(word.wordString);