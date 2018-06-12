import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
       list: [
           {id: 0, item:'get milk',isDone:false},
       ],
       itemInput: '',
    };

    //Adding the input to the list
    handleInput(e){
      this.setState({itemInput:e.target.value})
    }

    //Turn the checkbox checked or not
    handleCheck(i, event){
      /*alert(i)*/
      const list = this.state.list;
      list[i].isDone = list[i].isDone ? false : true;
      this.setState({list:list});
    }

    renderList(){
      //if checkbox is checked then stike the list item else item remains
        return this.state.list.map((element, index) => {
            return (
                <p style={{'textDecoration':element.isDone ? 'line-through' : 'none'}}><input type="checkbox" name="" value="" id="CB" key={element.id} onClick={this.handleCheck.bind(this, element.id)}/> {element.item} </p>
            )
        })
    }

    //Show the button when there is input
    renderSubmit(){
      if(this.state.itemInput){
        return <button onClick ={()=> this.handleSubmit()}>Add Item </button>
      }
    }

    //Add the new item to the list
    handleSubmit(){
      const newItem ={
        id: this.state.list.length,
        item:this.state.itemInput,
        isDone:false,
      }
      const list = this.state.list;
      list.push(newItem);
      this.setState({list:list});
      this.setState({itemInput:''});
    }

  render() {
    return (
      <div className="App">
      <input value={this.state.itemInput} onChange={(e) => this.handleInput(e)} placeholder="Enter To Do item"/>
      {this.renderSubmit()}
      {this.renderList()}
      </div>
    );
  }
}

export default App;
