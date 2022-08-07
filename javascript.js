let boardPieces = [];
let board = document.querySelector('#gameboard');

const gameBoard = (function() {
  for (let i = 0; i < 9; i++) {
    let boardSquare = document.createElement('div');
    board.appendChild(boardSquare).className = "boardSquare";
    boardPieces.push(boardSquare);
  };
})();

const game = () => {
  const squares = document.querySelectorAll('.boardSquare')

  const computer = () => {
    var randomnum = Math.floor(Math.random() * boardPieces.length)
    boardPieces[randomnum].innerHTML = "O"
    boardPieces.splice(randomnum, 1)
  }

  const playervsplayer = () => {
    let player1moved = false;
    let player2moved = true;
    squares.forEach(square => {
      square.addEventListener("click", () => {
      if (!square.innerHTML && !player1moved) {
        square.innerHTML = "X"
        player1moved = true;
        player2moved = false;
        //boardPieces.splice(square, 1);
      }
      else if (!square.innerHTML && !player2moved) {
        square.innerHTML = "O"
        player1moved = false;
        player2moved = true;
      }
      });
    })}

  const playervscomputer = () => {
    let player1moved = false;
    let computermoved = true;
    squares.forEach(square => {
      square.addEventListener("click", () => {
      if (!square.innerHTML && !player1moved) {
        square.innerHTML = "X"
        player1moved = true;
        computermoved = false;
        boardPieces.splice(boardPieces.indexOf(square), 1);
      }
      else if (!computermoved) {
        computer()
        player1moved = false;
        computermoved = true;
      }
      });
    })
  }
  return{game, playervsplayer, playervscomputer}};

game1 = game()
game1.playervscomputer()


//start game buttons (pvp and pvc options), empties board, restarts
//game playing functionality, player moves with one piece other
//player moves with other, checks for winner
//player v computer, player click to move computer random move
//from list of available moves (remove move from list)
