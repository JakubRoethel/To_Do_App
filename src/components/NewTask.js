import { useEffect, useState } from "react"
import {API_KEY, API_URL} from "../api/constants"
import createTask from "../api/createTask"

function NewTask({task}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleAddTask = (e) => {
        e.preventDefault();
        const task = {
            title,
            description,
            status:"open"
        }
        // console.log(task)

        createTask(task)
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
        <div className="w-50 m-3">
            <h1>New Task</h1>
            <form onSubmit={handleAddTask}>
                <div class="mb-3">
                    <input onChange={getTitle} value={title} placeholder="Title" type="text" class="form-control"/>
                </div>
                <div class="mb-3">
                    <input onChange={getDescription} value= {description} placeholder="Description" type="text" class="form-control"/>
                </div>
                <button type="submit" class="btn btn-primary">Add task</button>
            </form>
        </div>
    )
}

export default NewTask
