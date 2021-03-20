import { useEffect, useState } from "react"
import {API_KEY, API_URL} from "../api/constants"
import createTask from "../api/createTask"
import "../css/newTask.css"

function NewTask(onAddTask) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleAddTask = (e) => {
        e.preventDefault();
        const task = {
            title,
            description,
            status:"open"
        }
        createTask(task,onAddTask)
    }

    const getTitle = (e)=>{
        setTitle(e.target.value)
        // console.log(title)
    }

    const getDescription = (e)=>{
        setDescription(e.target.value)
        // console.log(description)
    }

    // console.log(task)
    
    return (
        <div className="w-75 m-3 container">
            <h1>New Task</h1>
            <form onSubmit={handleAddTask}>
                <div class="mb-3">
                    <input onChange={getTitle} value={title} placeholder="Title" type="text" class="form-control"/>
                </div>
                <div class="mb-3">
                    <input onChange={getDescription} value= {description} placeholder="Description" type="text" class="form-control"/>
                </div>
                <button 
                class="btn btn-success">Add task
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle ms-2" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default NewTask
