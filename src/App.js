import React from 'react';
import './App.css';


class App extends React.Component {


  constructor(props) {
  super(props);
  this.state = {
  tasks: [],
  input: ""
  };
  }
 
  render() {
    
let tasksArr=[];
  return (
  <div>
  <h1>Tasks</h1>
  <ul>
  <input onChange={this.handleChange} value={this.state.input} />
  <button onClick={this.addTask}>Add Task</button>
  <button onClick={this.removeTask}>Remove Task</button>
  <button onClick={this.removeAll}>Remove All</button>
  {this.state.tasks.map((task, i) =>
  <li key={i}>
  {task}
  </li>
  )}
  </ul>
  <div>
  
  </div>
  </div>
  );
  }
  
  handleChange = (event) => {
  this.setState({
  input: event.target.value
  });
  }
  
  addTask = () => {

      this.setState(previousState=>({
        tasks:[...previousState.tasks,this.state.input],
        input:""
      
      }))
  }


  removeTask= () =>{
    this.setState((previousState)=>{
      let oldTasks=[...previousState.tasks];
      let newTasks=[];
      for(let i=0;i<oldTasks.length;i++){
        if(oldTasks[i] !==previousState.input){
          newTasks.push(oldTasks[i]);
        }
      }
      return (
      
      
      {
      
      tasks:[...newTasks],
      input:""
    
    })})
  

  }


  
  removeAll= () =>{
    this.setState((previousState)=>{

      return (
      
      
      {
      
      tasks:[],
      input:""
    
    })})
  

  }
  
  }
  
  
  

export default App;



