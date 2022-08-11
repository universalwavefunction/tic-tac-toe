let boardPieces = [];
let board = document.querySelector('#gameboard');
let gametype = document.querySelector(".startbuttons");
let winningMoves = [
 [0,1,2],[3,4,5],[6,7,8],[0,3,6],
 [1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
let player1moves = []
let player2moves = []

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
  let gameover = document.getElementById("gameover")

  const playerFactory = (name, piece, computer, turn, moves) => {

    const checkWin = () => {
      for (move in winningMoves) {
        if (winningMoves[move].every(num => moves.includes(num))){
          gameover.innerHTML = "Game over! " + name + " wins!"
          return;//how to break the loop/stop listeners?
        }
        else if (boardPieces.length == 0) {
          gameover.innerHTML = "It's a tie."
          return;
        }
    }}

    const playermove = square => {
      square[0].innerHTML = piece;
      turn = false; //why doesn't this work?
      moves.push(square[1]);
      boardPieces.splice(boardPieces.indexOf(square), 1);
      checkWin();
      }

    const computermove = () => {
      if (0 < boardPieces.length) {
        name = "Computer"
        var randomnum = Math.floor(Math.random() * boardPieces.length);
        boardPieces[randomnum][0].innerHTML = piece;
        moves.push(boardPieces[randomnum][1]);
        boardPieces.splice(randomnum, 1);
        turn = false;
        checkWin()
    }}

    return {name, piece, computer, turn, moves, checkWin, playermove, computermove}
  };

  const player1 = playerFactory('Player 1', 'X', false, true, player1moves) //anyway to add player2.turn here?
  const player2 = playerFactory('Player 2', 'O', false, false, player2moves)

  const playervsplayer = () => {
    boardPieces.forEach(square => {
      square[0].addEventListener("click", () => {
      if (!square[0].innerHTML && player1.turn) {
        player1.playermove(square)
        player1.turn = false;
        player2.turn = true;
      }
      else if (!square[0].innerHTML && player2.turn) {
        player2.playermove(square)
        player2.turn = false;
        player1.turn = true;
      }
      });
    })}

  const playervscomputer = () => {
    player2.computer = true;
    boardPieces.forEach(square => {
    square[0].addEventListener("click", function() {
        player1.playermove(square)
        player2.computermove()
      })
    })
  }
  return{game, playervsplayer, playervscomputer}};

/*
To do:
- stop moves when someone wins
- make min max AI for computer
*/
