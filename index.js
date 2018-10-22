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

function playGame() {

    // use FS to read the random.txt file
    fs.readFile('./guesswords.txt', 'utf8', function read(err, data) {

        if (err) {
            throw err;
        }

        // set a variable to stand for the text contents of the file
        var randomWords = data;
        // console.log(randomWords);

        // make the file data an Array, .split() at each new line
        wordsArray = randomWords.split('\n');
        // console.log(wordsArray);

        // then get a random number between 1 and the length of wordsArray
        var randomNum = Math.floor(Math.random() * wordsArray.length) + 1;
        // console.log(randomNum);

        // and use that random number to pick one line out of wordsArray
        var randomLine = wordsArray[randomNum];
        // console.log(randomLine);

        var word = new Word(randomLine);
        // console.log(word);

        // console.log(word.letterArray);
        word.makeWordArray();
        // console.log(word.wordArray);
        word.makeWordString();
        console.log(word.wordString);
        // word.checkGuess("b");
        // word.checkGuess("y");
        // console.log(word.checkGuess());
        // console.log(word.wordArray);
        // console.log(word.wordString);

        gamePlay(word);


    });
};


function gamePlay(word) {

    inquirer
        .prompt({
            name: "letter",
            type: "input",
            message: "\nGuess a letter!\n"
        })
        .then(function (answer) {

            word.checkGuess(answer.letter);
            console.log(word.wordString);

            // var theArray = word.wordArray;
            // console.log(theArray);

            var finishCheck = word.wordArray.every(function (letter) {
                return letter.guessed === true;
            });
            console.log(finishCheck);

            if (finishCheck === false) {
                gamePlay(word);
            } else {
                anotherGame()
            }

        });

};


function anotherGame() {

    inquirer
        .prompt({
            name: "game",
            type: "confirm",
            message: "\nYou won! Wanna play again?\n"
        })
        .then(function (answer) {
            if (answer.game === true) {
                console.log("\nYay! Guess another thing I'm thinking about!\n");
                playGame();

            } else {
                console.log("\nOh, okay. I'm late for a very important date anyway. Bye!\n");
            }
        });

};


function intro() {

    inquirer
        .prompt({
            name: "game",
            type: "confirm",
            message: "Oh hai! I'm Alice. Want to play a game? (It's not croquet)."
        })
        .then(function (answer) {
            if (answer.game === true) {
                console.log("\nWell alrighty then! Umm...guess what I'm thinking about!\n");
                playGame();

            } else {
                console.log("Buh bye!");
            }
        });

};


intro();

// inquirer
//     .prompt({
//         name: "game",
//         type: "confirm",
//         message: "Alice wants to know if you want to play a game? (It's not croquet)."
//     })
//     .then(function (answer) {
//           if (answer.game === true) {
//             readRandom();
//             console.log(word.wordString);
//         } else {
//             console.log("Buh bye!");
//           }
//     });


// ==========================================================================


// DEMO CODE FOR word.js

// var word = new Word("jabberwocky");
// console.log(word.letterArray);
// word.makeWordArray();
// console.log(word.wordArray);
// word.makeWordString();
// console.log(word.wordString);
// word.checkGuess("b");
// word.checkGuess("y");
// console.log(word.checkGuess());
// console.log(word.wordArray);
// console.log(word.wordString);



// The Ambientalist - They Will Come Back
// https://www.youtube.com/watch?v=F48ua-h8Bo8