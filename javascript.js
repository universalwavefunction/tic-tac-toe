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
  let moved = false;
  const blah = () => {
    const squares = document.querySelectorAll('.boardSquare')
    squares.forEach(square => {
      square.addEventListener("click", () => {
      if (!square.innerHTML) {
        square.innerHTML = "X"}})})
  };

  const listener = () => {
    for (let i = 0; i < boardPieces.length; i++) {
      const move = () => {
        boardPieces[i].innerHTML = "X";
        boardPieces.splice[i, 1];
        moved = true;
        console.log(boardPieces.length, !moved)
        return moved;
      };
      if (!(boardPieces[i].innerHTML) && !moved) {
        boardPieces[i].addEventListener("click", move)
      }}}
  return {listener}}

const computer = {
  move: function move() {
    var randomnum = Math.floor(Math.random() * boardPieces.length)
      if (!boardPieces[randomnum].innerHTML) {
        boardPieces[randomnum].innerHTML = "O"}
  }
};

const player = player1()
player.listener()
computer.move()

//start game (pvp and pvc options), empties board, restarts
//player 1 moves (event listener for click), square removed from array
//then computer moves (selects random from array of unchosen squares)
