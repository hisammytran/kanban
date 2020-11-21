import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// class TodoItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//       task: "",
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     let currList = this.state.list;
//     currList.push(this.state.task);
//     this.setState({ list: currList });
//     this.setState({ task: "" });
//   }
//   handleChange(event) {
//     this.setState({ task: event.target.value })
//     return (
//       <p>hi</p>
//     )
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           <input type="text" placeholder="Task Name" value={this.state.task} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//         <ul>
//           {this.state.list.map((task, key) =>
//             <li key={key}>{task}<button>Start</button></li>
//           )}
//         </ul>
//       </form>

//     )
//   }
// }

class Queues extends React.Component {

  render() {
    return (
      <div>
        <table>
          <tr>
            <th className='c1'>Queue</th>
            <th className='c2'>In Progress</th>
            <th className='c3'>Completed</th>
          </tr>
          <tbody></tbody>
        </table>
      </div>
    )
  }
}

class NewTask extends React.Component {

  render() {
    return (
      <div>
        <button>New Task</button>
      </div>
    )
  }
}

class Kanban extends React.Component {
  render() {
    return (
      <div className="content">
        Kanban
        <NewTask />
        <Queues />
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <Kanban />
    </div>
  );
}


export default App;