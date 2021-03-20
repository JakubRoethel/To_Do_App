import React, { useEffect, useState } from 'react'
import deleteTask from "../api/deleteTask";
import updateTask from "../api/updateTask";
import getOperation from "../api/operations"
import OperationList from './OperationList';
import "../css/taskList.css"

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
            <div className="w-75 m-3 d-flex justify-content-between  container task">
                <div>
                    <h5 style={{weight:"bolder"}}>{title}</h5>
                    <h6 style={{color:"gray"}}>{description}</h6>
                </div>
                <div className="d-flex">
                {statusOne === "open" ? 
                <div>
                    <button onClick={changeFormDisplay} class="btn btn-success">Add operation
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle ms-2" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                    <button onClick ={handleFinish} className="m-3 btn btn-dark">Finish
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive ms-2" viewBox="0 0 16 16">
                            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                </div> : null }
                {/* {statusOne === "closed" ? */}
                    <button onClick={handleDeleteTask} className="m-3 btn btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                 {/* : null } */}
                 </div>
            </div>
            <OperationList setForm={setForm} form={form} id={id} operations={operations} setOperations={setOperations} status={statusOne}/>
        </>
    )
}

export default TaskList
