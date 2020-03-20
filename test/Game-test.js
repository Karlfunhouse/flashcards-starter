const chai = require('chai');
const expect = chai.expect;



const Deck = require('../src/Deck')
const Round = require('../src/Round');
const Game = require('../src/Game');


describe('Round', function() {

  it('should be function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should create a new instance of deck', function() {
    const game = new Game();
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should contain a method that starts the game', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  })
});
