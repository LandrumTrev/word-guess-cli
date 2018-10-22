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

// ==========================================================================
// ==========================================================================

var inquirer = require("inquirer");

var Word = require("./word.js");

var fs = require("fs");

// ==========================================================================
// ==========================================================================

function playGame() {

    // use FS to read the guesswords.txt file
    fs.readFile('./guesswords.txt', 'utf8', function read(err, data) {

        if (err) {
            throw err;
        }

        // ==========================================================================

        var word = [];

        // text content of guesswords.txt (newline delimited data)
        var randomWords = data;
        // console.log(randomWords);

        // newline .split() Array of guesswords.txt content
        wordsArray = randomWords.split('\n');
        // console.log(wordsArray);

        // random number between 1 and wordsArray.length
        var randomNum = Math.floor(Math.random() * wordsArray.length) + 1;
        // console.log(randomNum);

        // random number picks one line out of wordsArray
        var randomLine = wordsArray[randomNum];
        // console.log(randomLine);

        // ==========================================================================

        // call new Word constructor on randomly selected guesswords.txt line
        // var word = new Word(randomLine);
        word = new Word(randomLine);
        // console.log(word);

        // call method of Word that creates Array of letter objects for the word
        word.makeWordArray();
        // console.log(word.wordArray);

        // call method of Word that creates cli display String of word letters
        word.makeWordString();

        // THIS CONSOLE.LOG() IS PART OF THE GAME:
        // IT DISPLAYS THE INITIAL ROW OF BLANK LETTERS
        console.log(word.wordString + '\n');

        // call the gamePlay() function to run the game and terminate when finished
        gamePlay(word,12);

    });
};

// ==========================================================================
// ==========================================================================

// takes over for continuing game play after the initial playGame() starts game
function gamePlay(word,guesses) {

    inquirer
        .prompt({
            name: "letter",
            type: "input",
            message: "Guess a letter!"
        })
        .then(function (answer) {


            // call .checkGuess() method on whole word, passing in answer.letter
            // switches guessed: from false to true 
            // if input matches any letter's character: in Word
            word.checkGuess(answer.letter);
            console.log(answer.letter);

            // Array of Booleans of whether answer.letter matched a letter in word
            var matchedArray = [];


            for (let b = 0; b < word.wordArray.length; b++) {

                // variable to hold a Boolean state of whether player guessed a correct character
                var matched;

                var matchChar = word.wordArray[b].character;
                // console.log(matchChar);

                if (matchChar === answer.letter) {
                    matched = true;
                    matchedArray.push(matched);
                } else {
                    matched = false;
                    matchedArray.push(matched);
                }

            }

            // console.log(matchedArray);

            if (matchedArray.includes(true)) {
                // guesses = guesses + 1;
                console.log("Awesome!");
                // console.log("Guesses left: " + guesses);

            } else {
                guesses = guesses - 1;
                // console.log("Guesses left: " + guesses);

            }

            if (guesses < 1) {
                console.log("Oopsie daisy! You don't have any guesses left!")
                anotherGame();
                guesses = 12;
                return;
            } else {
                console.log(`You have ${guesses} guesses left.`);
            }


            // THIS CONSOLE.LOG() IS PART OF THE GAME:
            // IT DISPLAYS THE CURRENTLY UPDATED ROW OF BLANK LETTERS
            console.log(word.wordString + '\n');

            // checks to see if .every() letter in wordArray is guessed: true
            var finishCheck = word.wordArray.every(function (letter) {
                return letter.guessed === true;
            });
            // console.log(finishCheck);

            // and if .every() letter is NOT guessed: true, then
            if (finishCheck === false) {
                // call gamePlay() to guess the next letter
                gamePlay(word,guesses);
            } else {
                // otherwise, if all letters guessed: true,
                // ask if player wants another game
                console.log("SQUEEEE! YOU WON!!");
                anotherGame();
                guesses = 12;
            };

        });
};

// ==========================================================================
// ==========================================================================

// after game play ends in gamePlay(), anotherGame() asks if player wants another game
function anotherGame() {

    inquirer
        .prompt({
            name: "newgame",
            type: "confirm",
            message: "\nWanna play again?\n"
        })
        .then(function (newanswer) {
            if (newanswer.newgame === true) {
                // if player wants to guess another word, then
                console.log("\nYay! Guess another thing I'm thinking about!\n");
                playGame();
            } else {
                // otherwise say goodbye and end the game
                console.log("\nOh, okay. I'm late for a very important date anyway. Bye!\n");
            }
        });
};

// ==========================================================================
// ==========================================================================

// the entry point into the game
function intro() {

    inquirer
        .prompt({
            name: "game",
            type: "confirm",
            message: "Oh hai! I'm Alice. Want to play a game? (It's not croquet)."
        })
        .then(function (answer) {
            if (answer.game === true) {
                // if player wants start the game and guess the first word
                console.log("\nWell alrighty then! Umm...guess what I'm thinking about!\n");
                playGame();
            } else {
                // otherwise, if they start the game, but don't want to play
                console.log("Buh bye!");
            }
        });
};

// ==========================================================================
// ==========================================================================

// call the intro() function to start the game
intro();

// ==========================================================================
// ==========================================================================

// fin