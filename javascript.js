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
    squares.forEach(square => {
        square.addEventListener("click", () => {
        if (!square.innerHTML && !moved) {
          square.innerHTML = "X"
          moved = true
          boardPieces.splice(square, 1);
          }});
        })}

  return {makemove}};



const computer = {
  move: function move() {
    var randomnum = Math.floor(Math.random() * boardPieces.length)
      if (!boardPieces[randomnum].innerHTML) {
        boardPieces[randomnum].innerHTML = "O"}
  }
};

const player = player1()
player.makemove()
computer.move()

//start game (pvp and pvc options), empties board, restarts
//player 1 moves (event listener for click), square removed from array
//then computer moves (selects random from array of unchosen squares)
