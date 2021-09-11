import React, { Component } from 'react';
import Title from './components/title';
import './App.css';
import Layout from './components/layout';
import Input from './components/input';
import TaskList from './components/task-list';

<<<<<<< HEAD

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: "",
      tasks: []
    };
  }

  handleTaskChange = event => {
    this.setState({
      newTask: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask);
    this.setState({
      newTask: "",
      tasks: newTasks
    });
  };

  handleDelete = (id) => {
    let newTasks = this.state.tasks;
    newTasks.splice(id, 1)
    this.setState({
      tasks: newTasks,
    })
  }

  render(){
    return (
      <Layout>
        <Title/>
        <Input
          handleSubmit={this.handleSubmit}
          handleTaskChange={this.handleTaskChange}
          value={this.state.newTask}
        />
        <TaskList
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
        />
      </Layout>
    );
  }
=======
function App() {
  return (
    <div className="container">
      <h1 className="title">
        Hello world <span aria-label="emoji" role="img">🔥</span>
      </h1>
      <input type="text" className="new-task"/>
    </div>
  );
>>>>>>> 22fbffb95f5137cd1389be01f42b1aba175cb657
}

export default App;
