//tic tac toe
var player = "X";
var computer = "O";
var turn = 0;
var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
var win = false;
var tie = false;
var winCombo = [
  [0, 0, 0, 1, 0, 2],
  [1, 0, 1, 1, 1, 2],
  [2, 0, 2, 1, 2, 2],
  [0, 0, 1, 0, 2, 0],
  [0, 1, 1, 1, 2, 1],
  [0, 2, 1, 2, 2, 2],
  [0, 0, 1, 1, 2, 2],
  [0, 2, 1, 1, 2, 0],
];
var playerWin = 0;
var computerWin = 0;
var tieGame = 0;
var playerWinText = document.getElementById("playerWin");
var computerWinText = document.getElementById("computerWin");
var tieGameText = document.getElementById("tieGame");
var playerTurn = document.getElementById("playerTurn");
var computerTurn = document.getElementById("computerTurn");
var playerTurnText = document.getElementById("playerTurnText");

function reset() {
  turn = 0;
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  win = false;
  tie = false;
  playerTurnText.innerHTML = "Player Turn";
  playerTurn.style.display = "block";
  computerTurn.style.display = "none";
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      document.getElementById(i + "" + j).innerHTML = "";
    }
  }
}

//check if the player or computer win
function checkWin() {
  for (var i = 0; i < winCombo.length; i++) {
    if (
      board[winCombo[i][0]][winCombo[i][1]] === player &&
      board[winCombo[i][2]][winCombo[i][3]] === player &&
      board[winCombo[i][4]][winCombo[i][5]] === player
    ) {
      win = true;
      playerWin++;
      playerWinText.innerHTML = playerWin;
      playerTurnText.innerHTML = "Player Win";
      playerTurn.style.display = "block";
      computerTurn.style.display = "none";
    } else if (
      board[winCombo[i][0]][winCombo[i][1]] === computer &&
      board[winCombo[i][2]][winCombo[i][3]] === computer &&
      board[winCombo[i][4]][winCombo[i][5]] === computer
    ) {
      win = true;
      computerWin++;
      computerWinText.innerHTML = computerWin;
      playerTurnText.innerHTML = "Computer Win";
      playerTurn.style.display = "block";
      computerTurn.style.display = "none";
    }
  }
  if (turn === 9 && win === false) {
    tie = true;
    tieGame++;
    tieGameText.innerHTML = tieGame;
    playerTurnText.innerHTML = "Tie Game";
    playerTurn.style.display = "block";
    computerTurn.style.display = "none";
  }
}

function computerMove() {
  var move = false;
  var i = 0;
  while (move === false) {
    var x = Math.floor(Math.random() * 3);
    var y = Math.floor(Math.random() * 3);
    if (board[x][y] === "") {
      board[x][y] = computer;
      document.getElementById(x + "" + y).innerHTML = computer;
      move = true;
    }
  }
}

function playerMove(x, y) {
  if (board[x][y] === "") {
    board[x][y] = player;
    document.getElementById(x + "" + y).innerHTML = player;
    turn++;
    checkWin();
    if (win === false && tie === false) {
      computerMove();
      turn++;
      checkWin();
    }
  }
}

function playerTurn() {
  playerTurn.style.display = "block";
  computerTurn.style.display = "none";
}

function computerTurn() {
  playerTurn.style.display = "none";
  computerTurn.style.display = "block";
}
