import React, { useEffect, useState } from 'react'
import deleteTask from "../api/deleteTask";
import updateTask from "../api/updateTask";
import getOperation from "../api/operations"
import OperationList from './OperationList';

function TaskList({title,id,description,status,onDeleteTask}) {
    const [statusOne,setStatusOne] = useState(status)
    const [operations,setOperations] = useState([])
    const [form, setForm] = useState(false)
    

    useEffect(()=>{
        getOperation(id,setOperations)
    }, [])

    

    const handleDeleteTask = () => {
        deleteTask(id, () => {
            onDeleteTask(id)
        })
    }

    const changeFormDisplay = () => {
        setForm(prev => !prev)
    }
    
    const handleFinish = () => {
        const task ={
            title,
            description,
            status:"closed"
        }

        updateTask(id,task, () => {
            setStatusOne("closed")
        })
    }
    // console.log(operations)

    return (
        <>
            <div className="w-70 m-3 d-flex justify-content-between">
                <div>
                    <h4>{title}</h4>
                    <h5>{description}</h5>
                </div>
                {statusOne === "open" ? 
                <div>
                    <button className="m-3" onClick={changeFormDisplay}>Add operation</button>
                    <button onClick ={handleFinish} className="m-3">Finish</button>
                </div> : null }
                {operations.length === 0 ?
                <div>
                    <button onClick={handleDeleteTask} className="m-3">Remove</button>
                </div> : null }
            </div>
            <OperationList setForm={setForm} form={form} id={id} operations={operations} setOperations={setOperations} status={statusOne}/>
        </>
    )
}

export default TaskList
