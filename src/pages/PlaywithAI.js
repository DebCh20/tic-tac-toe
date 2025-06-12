export default function createTicTacToeAI() {
  let board = Array(9).fill(null);

  const checkWinner = (b, player) => {
    const wins = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    return wins.some(line => line.every(i => b[i] === player));
  };

  const isFull = (b) => b.every(cell => cell !== null);

  const minimax = (b, isMax) => {
    if (checkWinner(b, 'O')) return { score: 1 };
    if (checkWinner(b, 'X')) return { score: -1 };
    if (isFull(b)) return { score: 0 };

    let best = { score: isMax ? -Infinity : Infinity, move: null };

    for (let i = 0; i < 9; i++) {
      if (b[i] === null) {
        b[i] = isMax ? 'O' : 'X';
        let result = minimax(b, !isMax);
        b[i] = null;
        if (isMax ? result.score > best.score : result.score < best.score) {
          best = { score: result.score, move: i };
        }
      }
    }
    return best;
  };

  return function(playerMove) {
    if (playerMove < 0 || playerMove > 8 || board[playerMove] !== null) {
      throw new Error("Invalid move");
    }

    board[playerMove] = 'X';

    if (checkWinner(board, 'X') || isFull(board)) return -1; // game ends

    const { move } = minimax(board, true);

    if (move === null) return -1; // draw

    board[move] = 'O';
    return move;
  };
}
