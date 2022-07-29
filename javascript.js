//start with 3x3 square grid gameboard
//make button to add circle or x to square
//attach move button to player and computer

const gameBoard = {

};

let boardPieces = [];
let board = document.querySelector('#gameboard');

function newGame() {
  for (let i = 0; i < 9; i++) {
    let boardSquare = document.createElement('div');
    board.appendChild(boardSquare).className = "boardSquare";
    boardPieces.append(boardSquare);
    boardSquare.addEventListener("click", () => {
      if (!boardSquare.innerHTML) {
        boardSquare.innerHTML = "X";
      }
    })
  };
};

//start game (pvp and pvc options), empties board, restarts
//player 1 moves (event listener for click), square removed from array
//then computer moves (selects random from array of unchosen squares)


newGame();
