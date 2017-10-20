var hang=require.main.require('./hangman.js');
var counter=require.main.require('./hangman.js');
var inqPrompt = require('./inquirerPrompt.js');

// uses dashes, lettersInWord, partialWord

 // function playLetter(letter) {
module.exports.playLetter = function(letter) {	
	this.letter=letter;
	this.checkLetters = function(checkLetters) {
		this.isLetterInWord = false;
		console.log('playLetter.checkLetters() ran');
		for (var i=0; i<hang.dashes; i++) {
			console.log(`i is ${i} | hang.dashes is ${hang.dashes} | hang.lettersInWord ${hang.lettersInWord[i]} | checkLetters ${checkLetters}`);
			if(hang.lettersInWord[i] == checkLetters) {
				console.log(hang.lettersInWord[i] + " " + checkLetters);
				this.isLetterInWord = true;
			}
		}	
		//check where in word letter exits, then populate partialWord array
		console.log('isLetterInWord ', this.isLetterInWord);
		if(this.isLetterInWord){
			console.log('isLetterInWord true');
			for (var i=0; i<hang.dashes; i++) {
				if(hang.lettersInWord[i] == checkLetters) {
					hang.partialWord[i] = checkLetters;
					console.log(`correct letter ${checkLetters} | partialWord ${hang.partialWord}`);
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

		console.log('partial word ', hang.partialWord);	
	}; // end this.checkLetters function

};

// exports = playLetter();
// module.exports = new playLetter();