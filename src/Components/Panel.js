import Tasks from './Tasks'
import AddTask from './AddTask'
import Header from './Header'

import { useState } from "react"


const Panel = () => {
    const [tasks,setTasks] = useState([{id:1,text:"learn React",day:'right now',reminder:false},{id:2,text:"Go Home",day:'Feb 8th at 5:00pm',reminder:false}])

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) +1
        const newTask = {id,...task}
        setTasks([...tasks,newTask])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id != id));
    }
    
    const toggleReminder = (task) => {
        setTasks(tasks.map((currentTask) => currentTask == task ? {id:currentTask.id,text:currentTask.text,date:currentTask.date,reminder:!currentTask.reminder} : currentTask))
    }

    return (
        <div className="container">
        <Header/>
        {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} toggle = {toggleReminder}/> : <h3>You have no tasks!</h3>}
        <AddTask onAdd = {addTask}/>
        </div>
    );
}

export default Panel
