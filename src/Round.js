const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = null;
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    var turn = new Turn(guess, this.returnCurrentCard());
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.deck[0].id)
    }
    this.turns ++;
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    var wrongGuesses = this.incorrectGuesses.length;
    return Math.round(((this.turns - wrongGuesses) / this.turns) * 100)
  }

  endRound() {
    console.log(this.calculateTimeElapsed())
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }

  startTimer() {
    if (this.startTime === null) {
      this.startTime = new Date().getTime();
    }
  }

  calculateTimeElapsed() {
    let elapsedTime = (new Date().getTime() - this.startTime)
    let minutes = Math.floor(elapsedTime / 60000);
    let seconds = ((elapsedTime % 60000) / 1000).toFixed(0);
    console.log(`This round took you ${minutes} minutes  & ${seconds} seconds`)
    this.startTime = null;
  }

};


module.exports = Round;
