import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../../redux/action/todosActions'
import EditTask from '../editTask/EditTask'


const TaskItem = ({todo}) => {
          const dispatch = useDispatch()
          return (
                    <div className='task'>
                              <div className={todo.isDone ? "done" : null}>{todo.task}</div>
                              <button onClick={()=>dispatch(completeTask(todo.id))}>{todo.isDone ? "Undo" : "Complete"}</button>
                              <EditTask todo={todo} />
                              <button onClick={()=>dispatch(deleteTask(todo.id))}>Delete</button>
                    </div>
          )
}

export default TaskItem
