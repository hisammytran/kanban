import './App.css';
import React, { Component } from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
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
// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>hi</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  handleClose = () => {
    this.setState({
      show: false,
    })
    this.forceUpdate();
  }
  handleShow = () => {
    this.setState({
      show: true,
    })
  }
  render() {

    const name = this.props.name;
    return (
      <ListGroup.Item action >
        <Button variant="secondary" onClick={this.handleShow}>{name}</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>

          </Modal.Header>
          <Modal.Body>this is a level {this.props.priority} priority task</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </ListGroup.Item>
    )
  }
}
class AltQueue extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const row = []
    var tasklist = this.props.tasks;
    if (tasklist) {
      tasklist.forEach(element => {
        row.push(<Task name={element.name} priority={element.priority}></Task>)
      });
    }

    return (
      <Card bg='primary'>
        <Card.Header >{this.props.level}</Card.Header>
        {/* create a list of tasks and just place inside list group */}
        <ListGroup className="lg" variant="flush" >
          {/* <Task list={this.props.tasks}> </Task> */}
          {/* <Example name="bob"></Example> */}
          {row}
          {/* <ListGroup.Item action>Vestibulum at eros</ListGroup.Item> */}
        </ListGroup>
      </Card>
    )
  }

}

class Queues extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <Row>
        <Col>
          <AltQueue level="TODO" tasks={this.props.tasks} />
        </Col>
        <Col>
          <AltQueue level="Due Today" />
        </Col>
        <Col>
          <AltQueue level="In Progress"/>
        </Col>
        <Col>
          <AltQueue level="Completed" />
        </Col>
      </Row>

    )
  }
}

class NewTask extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose(){
    this.setState({show:false});
  }
  handleShow(){
    this.setState({show:true});
  }
  render() {
    return (
      <div>
        {/* <button>New Task</button> */}

        <Button variant="secondary" onClick={this.handleShow}>New Task</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Task Name:<input type="text"/></Modal.Title>

          </Modal.Header>
          <Modal.Body>this is a level <input type="value"></input> priority task
          <br/><br/>Body Text: <input type="text"></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

class Kanban extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            Kanban
          <NewTask />
          </Col> 
        </Row>
        <Queues tasks={this.props.list} />
      </Container>
    )
  }
}

const TASKLIST = [{ name: 'Start Homework', priority: 2, queue: 1 }, { name: 'Read Book', priority: 5, queue: 2 },]

function App() {
  return (
    <div className="App">
      <Kanban list={TASKLIST} />
    </div>
  );
}


export default App;