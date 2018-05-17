'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function reset() {
  stacks.a = [4, 3, 2, 1];
  stacks.b = [];
  stacks.c = [];
}

function movePiece(source, dest) {
  // Your code here
  //Check for the legal move
  //move the last piece of source stack to destination stacks
  //check for the win
  if (isLegal(source, dest)) {
    const piece = stacks[source].pop();
    stacks[dest].push(piece);
    checkForWin(dest);
  } else {
    console.log('Illegal move, Try again!!')
  }

}

function isLegal(source, dest) {
  // Your code here
  //Can move the piece to a destination stack that is empty
  //check the moving piece against the last piece on the destination stack
  //should not let to move pieces from a empty stack
  //source and destination cannot be the same
  if (stacks[source] === stacks[dest]) {
    return false;
  }
  if (stacks[source].length === 0) {
    return false;
  }
  if (stacks[dest].length === 0) {
    return true;
  }
  let destPiece = stacks[dest].pop();
  let sourcepiece = stacks[source].pop();
  if (destPiece > sourcepiece) {
    stacks[dest].push(destPiece);
    stacks[source].push(sourcepiece);
    return true;
  } else {
    stacks[dest].push(destPiece);
    stacks[source].push(sourcepiece);
    return false;
  }
  return true;

}

function checkForWin(dest) {
  // Your code here
  //destination cannot be stack A
  //check if all 4 pieces at destination stack
  if (stacks[dest] != stacks.a && stacks[dest].length === 4) {
    printStacks();
    console.log('You Won!!');
    reset();
    return true;
  }
  return false;
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  // call the movePiece function
  //let source, dest;
  switch (startStack) {
    case 'a':
      //source = stacks.a;
      break;
    case 'b':
      //source = stacks.b;
      break;
    case 'c':
      //source = stacks.c;
      break;
    default:
      console.log('Invalid input');
      return false;
  }
  switch (endStack) {
    case 'a':
      //dest = stacks.a;
      break;
    case 'b':
      //dest = stacks.b;
      break;
    case 'c':
      //dest = stacks.c;
      break;
    default:
      console.log('Invalid input');
      return false;
  }
  movePiece(startStack, endStack);
  return true;
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
    //Case to check move to and from same stack
    it('should not allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'a'), false);
    });
    //check for move from and empty stack
    it('should not allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('b', 'a'), false);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(checkForWin('b'), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      };
      assert.equal(checkForWin('b'), false);
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(checkForWin('a'), false);
    });
  });
  describe('#checkForInput()', () => {
    it('should detect a Invalid Input', () => {
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(towersOfHanoi('m', 'z'), false);
    });
  });

} else {

  getPrompt();

}
