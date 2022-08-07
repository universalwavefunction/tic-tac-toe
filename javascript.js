let boardPieces = [];
let board = document.querySelector('#gameboard');

const gameBoard = (function() {
  for (let i = 0; i < 9; i++) {
    let boardSquare = document.createElement('div');
    board.appendChild(boardSquare).className = "boardSquare";
    boardPieces.push(boardSquare);
  };
})();

const player1 = () => {
  const squares = document.querySelectorAll('.boardSquare')
  let moved = false;
  const makemove = () => {
    return new Promise(resolve => {
    squares.forEach(square => {
        square.addEventListener("click", () => {
        if (!square.innerHTML && !moved) {
          square.innerHTML = "X"
          moved = true
          boardPieces.splice(square, 1);
          resolve()
          }});
        })})}
  return {makemove, moved}};

const computer = () => {
  const move = () => {
    var randomnum = Math.floor(Math.random() * boardPieces.length)
      if (!boardPieces[randomnum].innerHTML) {
        boardPieces[randomnum].innerHTML = "O"}
        boardPieces.splice(randomnum, 1)
  }
  return {move}
};

const player = player1()
const computer1 = computer()

async function newGame() {
  let playermoved = true;
  let computermoved = false;
  moves = 0;
  while (moves < 9) {
    if (!computermoved) {
      computer1.move();
      computermoved = true
      playermoved = false
      moves++
      console.log(moves,playermoved,computermoved)
    }
    if (!playermoved) {
      await player.makemove();
      playermoved = true
      computermoved = false
      moves++
      console.log(moves,playermoved,computermoved)
    }
}};

newGame()
//start game (pvp and pvc options), empties board, restarts
//game playing functionality, player moves, then computer's turn,
//then player's turn, etc until game is over
