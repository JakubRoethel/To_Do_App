import React, { useEffect, useState } from 'react'
import deleteTask from "../api/deleteTask";
import updateTask from "../api/updateTask";
import getOperation from "../api/operations"

function TaskList({title}) {
    const [status,setStatus] = useState()
    const [operations,setOperations] = useState([])

    useEffect(()=>{
        getOperation(setOperations)
        console.log(operations)
    }, [])



    // console.log(task.title)
    return (
            <div className="w-50 m-3">
                <div>
                    <h3>{title}</h3>
                    <h5>b</h5>
                </div>
            </div>
    )
}

export default TaskList
