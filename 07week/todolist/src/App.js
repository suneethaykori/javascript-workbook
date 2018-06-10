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

    handleInput(e){
      this.setState({itemInput:e.target.value})
    }

    handleCheck(i, event){
      /*alert(i)*/
      const list = this.state.list;
      list[i].isDone = list[i].isDone ? false : true;
      this.setState({list:list});
    }

    renderList(){
        return this.state.list.map((element, index) => {
            return (
                <p style={{'textDecoration':element.isDone ? 'line-through' : 'none'}}><input type="checkbox" name="" value="" id="CB" key={element.id} onClick={this.handleCheck.bind(this, element.id)}/> {element.item} </p>
            )
        })
    }

    renderSubmit(){
      if(this.state.itemInput){
        return <button onClick ={()=> this.handleSubmit()}>Add Item </button>
      }
    }

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
