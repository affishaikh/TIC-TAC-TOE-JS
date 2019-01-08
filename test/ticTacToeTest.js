const assert = require('assert');
const { playMove, turnChanger } = require('../src/ticTacToe.js');

describe('playMove', function() {
  it('should return board with first move', function() {
    let board = new Array(9).fill('');
    const expectedOutput = ['', '', '', '', '', 'X', '', '', ''];
    const player = { name: 'Aftab', symbol: 'X', playedMoves: [] };
    const actualOutput = playMove(board, player, 5);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return board with second move', function() {
    let board = ['X', '', '', '', '', '', '', '', ''];
    const expectedOutput = ['X', '', 'O', '', '', '', '', '', ''];
    const player = { name: 'Naman', symbol: 'O', playedMoves: [] };
    const actualOutput = playMove(board, player, 2);
    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe('changeTurn', function() {
  it('should reuturn player 2', function() {
    const changeTurn = turnChanger();
    const actualOutput = changeTurn();
    const expectedOutput = { name: 'Naman', symbol: 'O', playedMoves: [] };
    assert.deepEqual(actualOutput, expectedOutput);
  });
});
