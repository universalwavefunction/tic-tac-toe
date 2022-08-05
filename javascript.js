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
  const move = count => {
    boardPieces[count].innerHTML = "X";
    boardPieces.splice[count, 1];
    moved = true;
    endmove()
    console.log(count, moved, boardPieces.length)
  };
  const makemove = () => {
    const squares = document.querySelectorAll('.boardSquare')
    squares.forEach(square => {
      if (!square.innerHTML && !moved) {
        let count = boardPieces.indexOf(square);
        square.addEventListener("click", function(){
          move(count)});
        }})}

  const endmove = () => {
    const squares = document.querySelectorAll('.boardSquare')
    squares.forEach(square => {
      let count = boardPieces.indexOf(square);
      square.removeEventListener("click", function(){
        move(count)});
    })};
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
