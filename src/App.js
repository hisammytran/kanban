import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
class Task extends React.Component{
  render(){
    return(
      <li>
        {this.props.value}
      </li>
    )
  }
}

class TodoItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [],
      task: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let currList = this.state.list;
    currList.push(this.state.task);
    this.setState({list: currList});
    alert(this.state.list);
    this.setState({task: ""});
    // alert(currList);
    // alert(this.state.task);
    // currList.push(this.state.task);
    // this.setState({list: currList});
    // alert(this.state.list[0])

  }
  handleChange(event){
    this.setState({task: event.target.value})
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Task Name" value = {this.state.task} onChange={this.handleChange}/>
        </label>
        <input type="submit" value = "Submit"/>
        <ul>
          {this.state.list.map((item,i)=>
            <li key={i}>{item}</li>
          )}
        </ul>
      </form>
      
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>Test Text</p>
        <TodoItem name="sam"></TodoItem>
      </header>
    </div>
  ); 
}


export default App;