import {FaTimes} from 'react-icons/fa'


const Task = ({task,onDelete,toggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={() => toggle(task)}>
            <h3>
                <span>{task.text}</span>
                <FaTimes style={{color:'red',cursor:'pointer'}} onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>

        </div>
    )
}

export default Task
