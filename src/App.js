import './App.css';
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

import { useState } from "react"

function App() {

  const [tasks,setTasks] = useState([{id:1,text:"learn React",date:'Feb 8th at 3:00pm',reminder:false},{id:2,text:"Go Home",date:'Feb 8th at 5:00pm',reminder:false}])


  /**
   * Deletes a task from the current tasks
   * @param {*} id of the task to be removed
   */
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id))
  }

  /**
   * 
   * @param {*} task to be changed to have a reminder 
   */
  const toggleReminder = (task) => {
    setTasks(tasks.map((currentTask) => currentTask == task ? {id:currentTask.id,text:currentTask.text,date:currentTask.date,reminder:!currentTask.reminder} : currentTask))
  }

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} toggle = {toggleReminder}/> : <h3>You have no tasks!</h3>}
    </div>
  );
}

export default App;
