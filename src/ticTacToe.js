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

const createCycler = function() {
  let turn = 0;
  return function() {
    turn++;
    return turn%2;
  }
}

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

module.exports = { playMove, turnChanger };
