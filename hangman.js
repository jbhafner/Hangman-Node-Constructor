var colors = require('colors');
var inquirer = require('inquirer');
var inqPrompt = require('./assets/javascript/inquirerPrompt.js');

module.exports.hang = {
	selectedWord: "",
	lettersInWord: [],
	dashes: 0,
	partialWord: [],
	wrongGuess: []
};

module.exports.counter = {
	wins: 0,
	losses: 0,
	guessLeft: 0
};

// ----------- START GAME -----------
process.stdout.write('\033c');  // clear the screen
console.log('\n    ' + ' Welcome to Tech Hangman '.black.bgMagenta + "\n");
inqPrompt.fncLetterInput();

