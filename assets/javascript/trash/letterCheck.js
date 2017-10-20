var hang=require.main.require('./hangman.js');
var counter=require.main.require('./hangman.js');
var inqPrompt = require('./inquirerPrompt.js');

// uses dashes, lettersInWord, partialWord

 // function playLetter(letter) {
module.exports.playLetter = function(letter) {	
	this.letter=letter;
	this.checkLetters = function(checkLetters) {
		this.isLetterInWord = false;
		for (var i=0; i<hang.dashes; i++) {
			if(hang.lettersInWord[i] == checkLetters) {
				this.isLetterInWord = true;
			}
		}	
		//check where in word letter exits, then populate partialWord array
		if(this.isLetterInWord){
			for (var i=0; i<hang.dashes; i++) {
				if(hang.lettersInWord[i] == checkLetters) {
					hang.partialWord[i] = checkLetters;
				}
			}
		
		// letter wasn't found
		} else {
			hang.wrongGuess.push(checkLetters);
			counter.guessLeft--;
			console.log('letter not found');
		}
		if(counter.guessLeft > 0) {
			// inqPrompt.userPrompt();
		}
		inqPrompt.writeResults();

	}; // end this.checkLetters function

};
