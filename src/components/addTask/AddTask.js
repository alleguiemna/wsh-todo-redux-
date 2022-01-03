import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/action/todosActions'

const AddTask = () => {
          const [text, setText] = useState("")
          const dispatch = useDispatch()
          const handleAdd = () => {
                    if(text){
                              dispatch(addTask({id:Math.random(),task:text,isDone:false}))
                              setText("")
                    }
                    else{
                              alert("please enter task")
                    }
          }
          return (
                    <div className="add">
                              <input type="text" onChange={(e) =>setText(e.target.value)} value={text} />
                              <button onClick={handleAdd}>Add</button>
                    </div>
          )
}

export default AddTask
