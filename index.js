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
        // GETTING A RANDOM WORD FROM THE guesswords.txt FILE
        // ==========================================================================

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
        // CALLING THE Word CONSTRUCTOR FUNCTIONS ON THE SELECTED WORD
        // ==========================================================================

        // call new Word constructor on randomly selected guesswords.txt line
        var word = new Word(randomLine);
        // console.log(word);

        // call method of Word that creates Array of letter objects for the word
        word.makeWordArray();
        // console.log(word.wordArray);

        // call method of Word that creates cli display String of word letters
        word.makeWordString();


        // ==========================================================================
        // OUTPUT THE INITIAL BLANK STRING TO CONSOLE AND CALL GAME PLAY FUNCTION
        // ==========================================================================

        // THIS CONSOLE.LOG() IS PART OF THE GAME:
        // IT DISPLAYS THE INITIAL ROW OF BLANK LETTERS
        console.log(word.wordString + '\n');

        // call the gamePlay() function to run the game and terminate when finished
        gamePlay(word, 12);

    });
};


// ==========================================================================
// ==========================================================================


// takes over for continuing game play after the initial playGame() setup
function gamePlay(word, guesses) {

    inquirer
        .prompt({
            name: "letter",
            type: "input",
            message: "Guess a letter!\n"
        })
        .then(function (answer) {

            // call .checkGuess() method on whole word, passing in answer.letter
            // switches guessed: from false to true 
            // if input matches any letter's character: in Word
            word.checkGuess(answer.letter);
            // console.log(answer.letter);

            // ==========================================================================
            // CHECKING IF PLAYER GUESSED A CORRECT LETTER; IF NOT, DECREMENT GUESSES
            // ==========================================================================

            // Array of Booleans of whether answer.letter matched a letter in word
            var matchedArray = [];

            // loop wordArray and create matchedArray of Booleans for a user guess match
            for (let b = 0; b < word.wordArray.length; b++) {

                // variable to hold a Boolean state of whether player guessed a correct character
                var matched;

                // variable for the .character property of looped over array object
                var matchChar = word.wordArray[b].character;
                // console.log(matchChar);

                // push true and false values into matchedArray
                if (matchChar === answer.letter) {
                    matched = true;
                    matchedArray.push(matched);
                } else {
                    matched = false;
                    matchedArray.push(matched);
                }

            }
            // check matchedArray after it has been filled by the for loop
            // console.log(matchedArray);

            // then check to see if any values in matchedArray are true
            if (matchedArray.includes(true)) {
                // if a letter was matched, print happy message
                console.log(`\nAwesome!`);
            } else {
                // but if no letters were matched, subtract 1 from guesses left
                guesses = guesses - 1;
            }


            // ==========================================================================
            // CHECKING TO SEE IF PLAYER HAS ANY MORE GUESSES LEFT; IF NOT, GAME OVER
            // ==========================================================================

            // check to see if there are more guesses left
            if (guesses < 1) {
                // if there are no more guesses left
                console.log("Oopsie daisy! You don't have any guesses left!")
                // check to see if player wants to play again
                anotherGame();
                // reset the number of guesses
                guesses = 12;
                // AND RETURN! THIS IS A CRUCIAL PART OF CORRECT FUNCTIONALITY
                return;
            } else {
                // otherwise just tell the player how many guesses are left
                console.log(`\nYou have ${guesses} guesses left.\n`);
            }


            // ==========================================================================
            // AT THIS POINT, WRITE THE CURRENT STATE OF THE WORD STRING TO THE CONSOLE
            // ==========================================================================

            // THIS CONSOLE.LOG() IS PART OF THE GAME:
            // IT DISPLAYS THE CURRENTLY UPDATED ROW OF BLANK LETTERS
            console.log(word.wordString + '\n');


            // ==========================================================================
            // IF USER HAS GUESSED EVERY LETTER IN WORD, WINNER WINNER CHICKEN DINNER
            // ==========================================================================

            // checks to see if .every() letter in wordArray is guessed: true
            // to see if the game is over or not
            var finishCheck = word.wordArray.every(function (letter) {
                return letter.guessed === true;
            });
            // console.log(finishCheck);

            // and if .every() letter is NOT guessed: true, then
            if (finishCheck === false) {
                // call gamePlay() again to guess the next letter
                gamePlay(word, guesses);
            } else {
                // otherwise, if all letters guessed: true,
                // print celebratory message
                console.log("SQUEEEE! YOU WON!!");
                // ask if player wants another game
                anotherGame();
                // and reset the number of guesses to 12
                guesses = 12;
                // and return; here it's not crucial for game function, but good form
                return;
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
            message: "\nOh hai! I'm Alice. Want to play a game? (It's not croquet).\n"
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

// FIN