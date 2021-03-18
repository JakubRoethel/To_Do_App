import React, { useEffect, useState } from 'react'
import deleteTask from "../api/deleteTask";
import updateTask from "../api/updateTask";
import getOperation from "../api/operations"

function TaskList({title,id,description,status,onDeleteTask}) {
    const [statusOne,setStatusOne] = useState()
    const [operations,setOperations] = useState([])
    // console.log(id)

    useEffect(()=>{
        getOperation(id,setOperations)
    }, [])

    // console.log(operations)

    const handleDeleteTask = () => {
        deleteTask(id, () => {
            onDeleteTask(id)
        })
    }

    return (
        <div className="w-70 m-3 d-flex justify-content-between">
            <div>
                <h4>{title}</h4>
                <h5>{description}</h5>
            </div>
            <div className="m-3">
                <button className="m-3">Add operation</button>
                <button className="m-3">Finish</button>
                <button onClick={handleDeleteTask} className="m-3">Remove</button>
            </div>
        </div>

  
    )
}

export default TaskList
