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

// function characterDisplay() {} 
// that returns either letter 
// (if guessed === true) { return letter };
// or a blank (underscore) 
// (if guessed === FALSE) { return "_"};

// function checker(guess) {} 
// that takes a user guess letter and checks to see 
// if(guess === theLetter)
// IF true, guessed = true;
// IF FALSE, decrement guessesRemaining--;


// var state = true;
// console.log(state);

// var realLetter = "a";
var realLetter = {
    char: "a",
    guessed: false
};
console.log(realLetter);

var userGuess = "a";
console.log(userGuess);


// var Letter = function () {

// this.charDisplay = function (char) {
charDisplay = function (char) {

    // console.log("monkey butts");
    return "mambo mamma";


};

this.charGuess = function (char) {


};


// };

// charDisplay();

console.log(charDisplay());












// variable for a letters value and whether it has been guessed
// var theLetter = {
//     char: "a",
//     // guessed: FALSE
// };


// var Letter = function() {

// // this.characterDisplay = function(userGuess, theLetter) {
// characterDisplay = function(userGuess, theLetter) {
//         // that returns either letter 

//     if (userGuess === theLetter.char) {

//         return theLetter.char;

//     } else {

//         return "_";

//     }
// };

// this.checker(guess) {}
// // that takes a user guess letter and checks to see 

// if (guess === theLetter) {
//     // IF true, guessed = true;

// } else {
//     // IF FALSE, decrement guessesRemaining--;

// }

// };

// Letter.characterDisplay("q");
// characterDisplay("q",theLetter);

// console.log(characterDisplay());
// console.log(theLetter);

// module.exports = Letter;



// // Create the TV constructor
// var TV = function () {
// // divider will be used as a spacer between the tv data we print in log.txt
// var divider = "\n------------------------------------------------------------\n\n";

// // findShow takes in the name of a tv show and searches the tvmaze API
// this.findShow = function (show) {
//     var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

//     request(URL, function (err, response, body) {
//         // Parse the response body (string) to a JSON object
//         var jsonData = JSON.parse(body);

//         // showData ends up being the string containing the show data we will print to the console
//         var showData = [
//             "Show: " + jsonData.name,
//             "Genre(s): " + jsonData.genres.join(", "),
//             "Rating: " + jsonData.rating.average,
//             "Network: " + jsonData.network.name,
//             "Summary: " + jsonData.summary
//         ].join("\n\n");

//         // Append showData and the divider to log.txt, print showData to the console
//         fs.appendFile("log.txt", showData + divider, function (err) {
//             if (err) throw err;
//             console.log(showData);
//         });
//     });
// };

// findActor takes in the name of an actor to search for
// this.findActor = function (actor) {
//     var URL = "http://api.tvmaze.com/search/people?q=" + actor;

//     request(URL, function (err, response, body) {
//         // Parse the response body (string) to a JSON object
//         // Grab the first index of the response array, access the object at the `person` key
//         var jsonData = JSON.parse(body)[0].person;

//         // actorData ends up being the string containing the show data we will print to the console
//         var actorData = [
//             "Name: " + jsonData.name,
//             "Birthday: " + jsonData.birthday,
//             "Gender: " + jsonData.gender,
//             "Country: " + jsonData.country.name,
//             "URL: " + jsonData.url
//         ].join("\n\n");

//         // Append actorData and the divider to log.txt, print showData to the console
//         fs.appendFile("log.txt", actorData + divider, function (err) {
//             if (err) throw err;
//             console.log(actorData);
//         });
//     });
// };
// };

// module.exports = TV;