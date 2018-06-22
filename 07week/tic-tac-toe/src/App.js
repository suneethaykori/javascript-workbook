import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
      //create an array of 9 elements with null
      squares: Array(9).fill(null),
      player: "O",
      gameOver: false
    };

    //check for win after every update
    componentDidUpdate() {
      if (this.state.gameOver == false) {
        this.winCheck(this.state.squares);
      }
    }

    //handle the button click
    handleClick(i) {
      if (!this.state.gameOver) {
        //make a shallow copy of the array
        //store the player in the button if empty
        //then update the state
        let new_squares = this.state.squares.slice();
        if (new_squares[i] == null) {
          new_squares[i] = this.state.player;
          let new_player = this.state.player == "O" ? "X" : "O";
          this.setState({
            squares: new_squares,
            player: new_player,
            gameOver: this.state.gameOver
          });
        }
      }
    }

    handleReset(){
      this.setState({
        squares: Array(9).fill(null),
        player: "O",
        gameOver: false
      });

    }
    winCheck(gameState) {
      //winnning combinations
      const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      //find the combinations that has all three same
      let gameOver = winCombos.find((combo) => {
        let [a, b, c] = combo;
        return (gameState[a] && gameState[a] == gameState[b] && gameState[a] == gameState[c]);
      })

      //if found, set gameover to true
      if (gameOver) {
        this.setState({
          squares: this.state.squares,
          player: this.state.player,
          gameOver: true
        })
      }
    }

  render() {
    const nextPlayer = "It is " + this.state.player + " turn."
    return (
      <div id="board">
        <div id="status">{this.state.gameOver? "Game Over!" : "Tic Tac Toe"}</div>
        <div id="status">{this.state.gameOver? " " : nextPlayer}</div>
        <div className="board-row">
          <button className="button1" onClick={() => this.handleClick(0)}> {this.state.squares[0]} </button>
          <button className="button1" onClick={() => this.handleClick(1)}> {this.state.squares[1]} </button>
          <button className="button1" onClick={() => this.handleClick(2)}> {this.state.squares[2]} </button>
        </div>
        <div className="board-row">
        <button className="button1" onClick={() => this.handleClick(3)}> {this.state.squares[3]} </button>
        <button className="button1" onClick={() => this.handleClick(4)}> {this.state.squares[4]} </button>
        <button className="button1" onClick={() => this.handleClick(5)}> {this.state.squares[5]} </button>

        </div>
        <div className="board-row">
        <button className="button1" onClick={() => this.handleClick(6)}> {this.state.squares[6]} </button>
        <button className="button1" onClick={() => this.handleClick(7)}> {this.state.squares[7]} </button>
        <button className="button1" onClick={() => this.handleClick(8)}> {this.state.squares[8]} </button>
        </div>

        <button id="status" onClick={() => this.handleReset()}> "Reset" </button>

      </div>
    );
  }
}

export default App;
