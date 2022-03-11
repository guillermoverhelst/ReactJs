import React from 'react';
import './App.css';
import Tasks from './componentes/Tasks';
import tasks from './Jsons/tasks.json';
import TaskForm from './componentes/TaskForm';
import Post from './componentes/Post';
import {BrowserRouter as Router ,Link,Route,Routes} from 'react-router-dom';
class App extends React.Component{
  
  state={
    tasks:tasks
  }

  addTask = (title,description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length    
    }
    console.log(newTask)
    this.setState({
      tasks:[...this.state.tasks,newTask]
    })
  }

  deleteTask= (id) =>{
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: newTasks
    })
  }

  checkDone = id =>{
    const newTask = this.state.tasks.map(task =>{
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({
      tasks: newTask
    })
  
  }

  render(){
    return (
      <div>
       <Router>
         <Link to="/">Home</Link>
         <br/>
         <Link to="/posts">Posts</Link>
         <Routes>
          <Route path="/posts" element={<Post/>}/>
          <Route path="/" element={<div><TaskForm addTask={this.addTask}/><Tasks tasks={this.state.tasks} 
              deleteTask={this.deleteTask} 
              checkDone={this.checkDone}
            /></div>}></Route>
         </Routes>
       </Router>                  
      </div>
    )
  }
}

export default App;
