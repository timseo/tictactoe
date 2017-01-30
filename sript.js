// * {
//   text-align: center;
// }
// var Display = function(displayElement) {
//   var display = displayElement;
//   function setText(message) {
//     display.innerText = message;
//   }
//   return {setMessage: setText};
// };
//
// function isValid(button) {
//   return button.innerText.length == 0;
// };
//
// function whoWon(squares, player, whosTurn) {
//   if (squares[0].innerText == player[whosTurn] &&
//       squares[1].innerText == player[whosTurn] &&
//       squares[2].innerText == player[whosTurn])
//       return true;
//
//   if (squares[3].innerText == player[whosTurn] &&
//       squares[4].innerText == player[whosTurn] &&
//       squares[5].innerText == player[whosTurn])
//       return true;
//
//   if (squares[6].innerText == player[whosTurn] &&
//       squares[7].innerText == player[whosTurn] &&
//       squares[8].innerText == player[whosTurn])
//       return true;
//
//   if (squares[0].innerText == player[whosTurn] &&
//       squares[3].innerText == player[whosTurn] &&
//       squares[6].innerText == player[whosTurn])
//       return true;
//
//   if (squares[1].innerText == player[whosTurn] &&
//       squares[4].innerText == player[whosTurn] &&
//       squares[7].innerText == player[whosTurn])
//       return true;
//
//     if (squares[2].innerText == player[whosTurn] &&
//         squares[5].innerText == player[whosTurn] &&
//         squares[8].innerText == player[whosTurn])
//         return true;
//
//     if (squares[0].innerText == player[whosTurn] &&
//         squares[4].innerText == player[whosTurn] &&
//         squares[8].innerText == player[whosTurn])
//         return true;
//
//     if (squares[2].innerText == player[whosTurn] &&
//         squares[4].innerText == player[whosTurn] &&
//         squares[6].innerText == player[whosTurn])
//         return true;
// }
//
// function setMark(btn, mark) {
//   btn.innerText = mark;
//
// }
//
// function startGame() {
//   var squares = document.getElementsByClassName("square");
//   var player = ["X", "O"];
//   var whosTurn = 0;
//   var gameOver = false;
//   var display = new Display(document.querySelector("gameInstructions"));
//
//
//   display.setMessage("Player " + player[whosTurn] + " you're up!");
//
//   for (i = 0; i < squares.length; i++) {
//     squares[i].addEventListener("click", function() {
//       if (gameOver);
//         return;
//
//         if (!isValid(this)) {
//            display.setMessage("Invalid move.");
//
//         } else {
//           setMark(this, player[whosTurn]);
//
//           gameOver = whoWon(squares, player, whosTurn);
//
//           if (gameOver) {
//             display.setMessage("Player " + player[whosTurn] + " wins!");
//             return;
//           }
//
//           if (isBoardFull(squares)) {
//             display.setMessage("Draw!");
//             return;
//           }
//
//           whosTurn++;
//           whosTurn = whosTurn % 2;
//
//           display.setMessage("Player " + player[whosTurn] + " you're up!");
//
//         }
//     })
// }
//
// startGame()


// codealong in class 1/30/17

/// global variables

var boxes = document.getElementsByClassName('square')
var turn = 0

var player1 = {
  token: "X",  //this provides us the x and o
  score: 0,
  scoreBoard: document.getElementbyID('span tag for scoreboard')
}
var player2 = {
  token: "O",  //this provides us the x and o
  score: 0,
  scoreBoard: document.getElementbyID('span tag for scoreboard')
}
var winningCombo = [
  [0,1,2]
  [3,4,5]
  [6,7,8]
  [0,4,6]
  [1,4,7]
  [2,5,8]
  [0,4,8]
  [2,4,6]
]



// happens immediately
document.getElementbyID('resetBoard').addEventListener('click', function() {
addListeners()
////remove anonymous functions
// doucment.getElementbyID('resetBoard').removeEventListener


for(var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function() {
    if(this.innerHTML == '') {
    this.innerHTML = takeTurns()
    getWinner(this.innerHTML)
  })
}


//functions
function getWinner(token) {
  for (var i = 0; i < winningCombo.length; i++) {
    if(boxes[winningCombo[i][0]].innerHTML === token
      && boxes[winningCombo[i][1]].innerHTML === token
      && boxes[winningCombo[i][2]].innerHTML === token) {
         console.log(token + 'wins')
    }
  }
  // check for tie
  var cellEmpty = false
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].innerHTML === '') {
      cellEmpty = true
    }
  }
  if (!cellEmpty) {
    console.log('its a tie')
  }
}

function takeTurns() {
  turn++
  return (turn % 2 ? 'X' : 'O')
}
