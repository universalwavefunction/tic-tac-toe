let boardPieces = [];
let board = document.querySelector('#gameboard');
let gametype = document.querySelector(".startbuttons");
let winningMoves = [
 [0,1,2],[3,4,5],[6,7,8],[0,3,6],
 [1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
let player1moves = []
let player2moves = []
let computermoves = []


const startGame = () => {
  gametype.style.display = "flex"
  document.getElementById('start').style.display = "none"
}


const resetBoard = () => {
  const squares = document.querySelectorAll('.boardSquare')
  gameover.innerHTML = ""
  document.getElementById('ttt-board').style.display = "none"
  squares.forEach(square => {board.removeChild(square)});
  board.style.display="grid";
  board.style.width="530px";
  board.style.height="530px";
  board.style.background="#2c5777";
  board.style.border=".01em solid #7aa7c7";
  board.style.padding="15px"
  boardPieces = [];
  player1moves = []
  player2moves = []
  computermoves = []
}

const startGamePVP = () => {
  gameBoard()
  pvpgame = game().playervsplayer()
}

const startGamePVC = () => {
  gameBoard()
  pvcgame = game().playervscomputer()
}

const gameBoard = () => {
  resetBoard()
  for (let i = 0; i < 9; i++) {
    let boardSquare = document.createElement('div');
    board.appendChild(boardSquare).className = "boardSquare";
    boardPieces.push([boardSquare,i]);
  };
};

const game = () => {
  let player1moved = false
  let computermoved = true
  let player2moved = true
  let gameover = document.getElementById("gameover")

  const computermove = () => {
    if (0 < boardPieces.length) {
      var randomnum = Math.floor(Math.random() * boardPieces.length)
      boardPieces[randomnum][0].innerHTML = "O"
      computermoves.push(boardPieces[randomnum][1])
      boardPieces.splice(randomnum, 1)
      player1moved = false
      computermoved = true
      for (move in winningMoves) {
        if (winningMoves[move].every(num => computermoves.includes(num))){
          player1moved=true;
          gameover.innerHTML = "Game over! Welcome our new AI overlords."
          return(console.log("i for one welcome our new AI overlords"))
        }
        else if (boardPieces.length == 0) {
          gameover.innerHTML = "It's a tie."
          return
        }}
  }}

  const playermove = square => {
    if (!square[0].innerHTML && !player1moved) {
      square[0].innerHTML = "X"
      player1moved = true;
      computermoved = false;
      player1moves.push(square[1])
      boardPieces.splice(boardPieces.indexOf(square), 1);
      for (move in winningMoves) {
        if (winningMoves[move].every(num => player1moves.includes(num))){
          gameover.innerHTML = "Game over! Humans continue their reign."
          return(console.log("humans continue their reign"))
        }
        else if (boardPieces.length == 0) {
          gameover.innerHTML = "It's a tie."
          return
        }
    }
      computermove()
    }
  }


  const playervsplayer = () => {
    boardPieces.forEach(square => {
      square[0].addEventListener("click", () => {
      if (!square[0].innerHTML && !player1moved) {
        square[0].innerHTML = "X"
        player1moved = true;
        player2moved = false;
      }
      else if (!square[0].innerHTML && !player2moved) {
        square[0].innerHTML = "O"
        player1moved = false;
        player2moved = true;
      }
      });
    })}

  const playervscomputer = () => {
    boardPieces.forEach(square => {
    square[0].addEventListener("click", function() {
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
