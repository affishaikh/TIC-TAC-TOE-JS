const createBoard = function() {
  return new Array(9).fill('');
};

const player1 = { name: 'Aftab', symbol: 'X', playedMoves: [] };
const player2 = { name: 'Naman', symbol: 'O', playedMoves: [] };
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const hasWon = function(player) {
  let { playedMoves } = player;
  return winningConditions.some(condition =>
    condition.every(move => playedMoves.includes(move))
  );
};

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

const createCycler = function() {
  let turn = 0;
  return function() {
    turn++;
    return turn % 2;
  };
};

const turnChanger = function() {
  const cycler = createCycler();
  const players = [player1, player2];
  return function() {
    return players[cycler()];
  };
};

const startGame = function() {
  let board = createBoard();
};

startGame();

module.exports = { playMove, turnChanger, hasWon };
