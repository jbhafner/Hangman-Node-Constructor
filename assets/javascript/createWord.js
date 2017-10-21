// ============ CREATEWORD.JS - GENERATES WORD FOR GAME ============= //

// ============ REQUIRE/LOAD NPM MODULES ============= //
var hang=require.main.require('./hangman.js');
var counter=require.main.require('./hangman.js');


// ============ CREATE NEW WORD AND ASSOCIATED DATA ============= //

// ------------ export constructor playWord with     --------------- //
// ------------ function createWord to generate word --------------- //

// ------------ creates and uses selectedWord, lettersInWord,--------------- //
// ------------ dashes, partialWord variables--------------- //

// I tried keeping all of those variables within the constructor,
// but could not access them from other modules, so I store them
// in the "hang" and "counter" objects in hangman.js

module.exports.playWord = function(word) {
	this.word = word;
	this.wordList = ["javascript","html","css","firebase","mysql"];
	this.selectedWord = "";
	this.lettersInWord = [];
	this.dashes = 0;
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

		//Create right number of dashes
		for (var i=0; i<this.dashes; i++) {
			hang.partialWord.push("_");
		}

		console.log('Current Word: ', hang.partialWord);
	};
};