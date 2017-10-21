// ============ INQUIRERPROMPT.JS - INQUIRER PROMPTS AND PROGRAM LOGIC ============= //

// Note: program logic in determining wins/losses and displays is split between 
// userPrompt() and roundComplete().  I intended to move it all into roundComplete()
// but the program was working and I ran out of time.

// ============ REQUIRE/LOAD NPM MODULES ============= //
var colors = require('colors');
var inquirer = require('inquirer');
var hangLetter = require('./checkLetter.js');
var hangWord = require('./createWord.js');
var hang=require.main.require('./hangman.js');
var counter=require.main.require('./hangman.js');

console.log('hangLetter ',hangLetter);
console.log('hangWord ', hangWord);

// ============ INSTANTIATE CONSTRUCTORS ============= //
var newLetter = new hangLetter.playLetter();
var newWord = new hangWord.playWord();

counter.wins = 0;
counter.losses = 0;
hang.partialWord=[];

// ============ INQUIRER PROMPTS ============= //
// ------------ Inquirer Prompt - Start game --------------- //

module.exports.fncLetterInput = function() { 
	inquirer.prompt([{
		name: "play",
		type: "confirm",
		message: "Do you want to play Tech Hangman?".inverse
	}]).then(function(response) {
		if(response.play) {
			newWord.createWord();
			userPrompt();
		} else {
			console.log("Sorry you don't want to play :-(  Maybe next time?");
		}
	});
} // closes fncLetterInput Function	

// ------------ Inquirer Prompt - Play game --------------- //

function userPrompt(){
		inquirer.prompt([{
			  name: "chosenLtr",
			  type: "input",
			  message: "Enter a letter <[letter] + [Enter]> or <[Ctrl]-[C]> to end: ".white,
			  // validate: function(value) {
			  //   if(isLetter(value)){
			  //     return true;
			  //   } else{
			  //     return false;
			  //   }
			  // }
		}]).then(function(ltr) {
		  //toLowerCase because words in word bank are all caps
		  var letterReturned = (ltr.chosenLtr).toLowerCase();
		  console.log('Letter entered: ', letterReturned);
		  newLetter.checkLetters(letterReturned);
		      if(counter.guessLeft > 0) {
		      	// console.log("You Won!");
		        roundComplete();
		        userPrompt();
		        // continuePrompt()
		      }else {
		        console.log(' ----------------');
		        console.log(' | You lost.... | ');
		        console.log(' ----------------\n');		        
		        console.log(('The word you were guessing was: ' + hang.selectedWord).cyan + '\n');
		        roundComplete();
		        updateResults();
				userPrompt();		        
		      } 
		});
}	// closes userPrompt function

// ------------ Inquirer Prompt - continue game once round is over --------------- //
// ------------ I did not activate this yet --------------- //

function continuePrompt() { 
		inquirer.prompt([{
		name: "continue",
		type: "confirm",
		message: "Do you want to continue?".inverse
	}]).then(function(response) {
		if(response.continue) {
			newWord.createWord();
			userPrompt();
		} else {
			console.log("Thanks for playing today.  Goodbye");
		}
	});
} // closes continuePrompt Function	

// ============ FUNCTIONS ============= //
// ------------ roundComplete() runs after each letter selected --------------- //
// ------------ to update display and totals, and restart game --------------- //

function roundComplete() {

	// check if user won
	if(hang.lettersInWord.toString() == hang.partialWord.toString()) {
		counter.wins++;
		console.log("++++++++++++");
		console.log("+ You Won! +");
		console.log("++++++++++++\n");
		updateResults();
		// continuePrompt();		
		newWord.createWord();
	}

	// if user losses
	else if (counter.guessLeft === 0) {
		counter.losses++;
		// console.log("You lost");
		// continuePrompt();		
		newWord.createWord();
	}

} // closes roundComplete function

// ------------ updateResults() updates status and results --------------- //
function updateResults() {
	process.stdout.write('\033c');  // clear the screen
	console.log('\n    ' + ' Welcome to Tech Hangman '.black.bgMagenta + "\n");
	console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++");
	console.log(("    Win Count: " + counter.wins + " | Loss Count: " + counter.losses + " | Guesses Left: " + counter.guessLeft + " ").inverse);
	console.log("================================================\n");	
	// console.log('aaaaaaaaaaaaaaaaaaaaaaaaa');
	console.log('>>>>> Current word ', hang.partialWord, ' | Wrong letters guessed ', hang.wrongGuess," <<<<<\n");	
	// console.log('zzzzzzzzzzzzzzzzzzzzzzzzzz');
}

// ------------ export writeResults() - exports and runs --------------- //
// ------------ updateResults() above.  I could not export --------------- //
// ------------ updateResults() and run within this module. --------------- //

module.exports.writeResults = function() {
	updateResults();
}




