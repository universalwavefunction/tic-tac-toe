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
  };
};

const player = {
  name: "player",
  marker: "X"
}

const computer = {
  name: "computer",
  marker: "O"
}

newGame();
