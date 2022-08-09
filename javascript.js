let boardPieces = [];
let board = document.querySelector('#gameboard');
let gametype = document.querySelector(".startbuttons");


const startGame = () => {
  gametype.style.display = "flex"
  document.getElementById('start').style.display = "none"
}


const resetBoard = () => {
  const squares = document.querySelectorAll('.boardSquare')
  squares.forEach(square => {board.removeChild(square)});
  board.style.display="grid";
  board.style.width="600px";
  board.style.height="600px";
  board.style.background="#2c5777";
  board.style.border=".01em solid #7aa7c7";
  board.style.padding="15px"
}

const startGamePVP = () => {
  gameBoard()
  pvpgame = game()
  pvpgame.playervsplayer()
}

const startGamePVC = () => {
  gameBoard()
  pvcgame = game()
  pvcgame.playervscomputer()
}

const gameBoard = () => {
  boardPieces = [];
  resetBoard()
  for (let i = 0; i < 9; i++) {
    let boardSquare = document.createElement('div');
    board.appendChild(boardSquare).className = "boardSquare";
    boardPieces.push(boardSquare);
  };
};

const game = () => {
  const squares = document.querySelectorAll('.boardSquare')
  let player1moved = false
  let computermoved = true
  let player2moved = true

  const computermove = () => {
    if (0 < boardPieces.length) {
      var randomnum = Math.floor(Math.random() * boardPieces.length)
      boardPieces[randomnum].innerHTML = "O"
      boardPieces.splice(randomnum, 1)
      player1moved = false
      computermoved = true
  }}

  const playermove = square => {
    if (!square.innerHTML && !player1moved) {
      square.innerHTML = "X"
      player1moved = true;
      computermoved = false;
      boardPieces.splice(boardPieces.indexOf(square), 1);
      computermove()
    }
  }


  const playervsplayer = () => {
    squares.forEach(square => {
      square.addEventListener("click", () => {
      if (!square.innerHTML && !player1moved) {
        square.innerHTML = "X"
        player1moved = true;
        player2moved = false;
      }
      else if (!square.innerHTML && !player2moved) {
        square.innerHTML = "O"
        player1moved = false;
        player2moved = true;
      }
      });
    })}

  const playervscomputer = () => {
    squares.forEach(square => {
      square.addEventListener("click", function() {
        playermove(square)
      })
    })
  }
  return{game, playervsplayer, playervscomputer}};

/*
To do:
- check for winner: after every move check for 3 in a row
of X or O (vertical, horizontal, and diagonal)
- make min max AI for computer
*/
