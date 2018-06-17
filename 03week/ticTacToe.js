'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  //go through each row
  //check if all 3 are same, then retrun true. if not return false
  for (let row = 0; row < 2; row++) {
    if (board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
      return true;
    }
  }
  return false;

  // board.forEach(function(ele, index, array) {
  //   console.log('hortizntal '+ ele[0] + ele[1] + ele[2]);
  //    if (ele[0] === ele[1] && ele[0] === ele[2]) {
  //      console.log('found horizantal');
  //      return true;
  //    }
  //  })
  //  return false;
}

function verticalWin() {
  // Your code here
  //go through each column
  //check if all 3 are same, then retrun true. if not return false
  for (let column = 0; column < 2; column++) {
    if (board[0][column] === board[1][column] && board[0][column] === board[2][column]) {
      return true;
    }
  }
  return false;
}

function diagonalWin() {
  // Your code here
  //check both diagonal elements
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return true;
  }
  if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    return true;
  }
  return false;
}

function checkForWin() {
  // Your code here
  //check all wins
  return horizontalWin() || verticalWin() || diagonalWin();
}

function ticTacToe(row, column) {
  // Your code here
  //Allow only in an empty box
  // store the current player
  //switch the player
  if (board[row][column] === ' ') {
    board[row][column] = playerTurn;
    // if (checkForWin()){
    //   console.log('You win!');
    // }
    if (playerTurn === 'X') {
      playerTurn = 'O';
    } else {
      playerTurn = 'X';
    }

  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', () => {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
