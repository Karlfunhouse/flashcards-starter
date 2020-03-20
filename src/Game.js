const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Deck = require ('../src/Deck');
const Round = require ('../src/Round');


class Game {
  constructor() {
    this.currentRound = null
  }

  start() {
    const deck = new Deck(prototypeQuestions)
    const round = new Round(deck)
    this.currentRound = round
    this.printMessage(deck)
    this.printQuestion(round)
    round.startTimer()
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round)
  }
};

module.exports = Game;
