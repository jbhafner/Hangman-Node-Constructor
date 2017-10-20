var colors = require('colors');
var inquirer = require('inquirer');
var hangLetter = require('./checkLetter.js');
var hangWord = require('./createWord.js');
var hang=require.main.require('./hangman.js');
var counter=require.main.require('./hangman.js');

console.log('hangLetter ',hangLetter);
console.log('hangWord ', hangWord);
var newLetter = new hangLetter.playLetter();
var newWord = new hangWord.playWord();

// console.log('var newLetter ', newLetter);
// console.log('hang ', hang);
// console.log('counter ', counter);

counter.wins = 0;
counter.losses = 0;
hang.partialWord=[];

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

function userPrompt(){
		// var that = this;
		//asks player for a letter
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

module.exports.writeResults = function() {
	updateResults();
}

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



