// ============ HANGMAN.JS - MAIN MODULE ============= //
// This module stores data for all modules and starts the game.
// The program also uses createWord.js, checkLetter.js,
//   and inquirerPrompt.js


// ============ REQUIRE/LOAD NPM MODULES ============= //
var colors = require('colors');
var inquirer = require('inquirer');
var inqPrompt = require('./assets/javascript/inquirerPrompt.js');

// ============ OBJECTS TO STORE DATA FOR ALL MODULES ============= //

// ------------ Stores word generated and guesses --------------- //
module.exports.hang = {
	selectedWord: "",
	lettersInWord: [],
	dashes: 0,
	partialWord: [],
	wrongGuess: []
};

// ------------ Stores wins, losses and guesses left --------------- //
module.exports.counter = {
	wins: 0,
	losses: 0,
	guessLeft: 0
};

// ============ START GAME ============= //
process.stdout.write('\033c');  // clear the screen
console.log('\n    ' + '              ' + ' Welcome to Tech Hangman '.black.bgMagenta + "\n");
inqPrompt.fncLetterInput();

