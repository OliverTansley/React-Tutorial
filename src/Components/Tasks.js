import Task from './Task.js'

const Tasks = ({tasks,onDelete,toggle}) => {
    return (
        <>
            {tasks.map( (task) => (<Task key={task.id} task={task} onDelete={onDelete} toggle={toggle}/>)
            )}
        </>
    )
}

export default Tasks
