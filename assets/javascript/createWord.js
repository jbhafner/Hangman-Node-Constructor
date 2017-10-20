var hang=require.main.require('./hangman.js');
var counter=require.main.require('./hangman.js');
// var inqPrompt = require('./inquirerPrompt.js');

// creates and uses selectedWord,
// lettersInWord, dashes, partialWord

module.exports.playWord = function(word) {
	this.word = word;
	this.wordList = ["javascript","html","css","firebase","mysql"];
	this.selectedWord = "";
	this.lettersInWord = [];
	this.dashes = 0;
	// this.partialWord = [];
	this.wrongGuess = [];
	this.createWord = function() {
		this.selectedWord = this.wordList[Math.floor(Math.random()*this.wordList.length)];
		hang.selectedWord = this.selectedWord;
		this.lettersInWord = this.selectedWord.split("");
		hang.lettersInWord = this.lettersInWord;
		this.dashes = this.lettersInWord.length;
		hang.dashes = this.dashes;

		// Reset
		counter.guessLeft=9;
		hang.wrongGuess=[];
		this.wrongGuess=[];
		hang.partialWord=[];
		// this.partialWord=[];

		//Create right number of dashes
		for (var i=0; i<this.dashes; i++) {
			hang.partialWord.push("_");

		}

		console.log('Current Word: ', hang.partialWord);
		// inqPrompt.writeResults();
	};
};