const createBoard = function() {
  return new Array(9).fill('');
};

const player1 = { name: 'Aftab', symbol: 'X', playedMoves: [] };
const player2 = { name: 'Naman', symbol: 'O', playedMoves: [] };

const isMoveValid = function(board, move) {
  return board[move] === '';
};

const playMove = function(board, player, move) {
  if (!isMoveValid(board, move)) {
    console.log('Invalid move');
    return board;
  }
  board[move] = player['symbol'];
  player['playedMoves'].push(move);
  return board;
};

const startGame = function() {
  let board = createBoard();
};

startGame();

module.exports = { playMove, isMoveValid };
