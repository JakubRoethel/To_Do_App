import React, { useState } from 'react'
import createOperation from "../api/createOperations"
import singleOperation from './singleOperation'


function OperationList({setForm,form,id,operations,setOperations,status}) {
    // console.log(status)

    const [oprDescription,setOprDescription] = useState("")
    
    const newOperation = (e) => {
        e.preventDefault()
        console.log("jestem")
        const operationDetails = {
            description:oprDescription,
            // timeSpend: 0
        };

        console.log(operationDetails)
        createOperation(id,operationDetails, el =>{
            setOperations( prev => {
                console.log(el)
                console.log(prev)
                return [
                    el,
                    ...prev
                ]
            }
            )
        })

        setForm(false)
    }
    const getOperationDescription = (e) => {
        setOprDescription(e.target.value)
    }
    // console.log(operations)

    const handleDeleteOperation = (id) => {
        setOperations(prev => {
            prev.filter(el => el.id !== id)
        })
    }

    return (
        <div className="m-3 w-70">
            {form === true ? 
                <div>
                     <form onSubmit={newOperation}>
                        <div class="mb-3">
                            <input onChange={getOperationDescription}
                            value={oprDescription}
                            placeholder="Operation description" type="text" class="form-control"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Add</button>
                    </form>
                </div>
             : null}
            <ul>
                {operations.map(el=>{
                    <singleOperation key={el.id} {...operations} onDeleteOperation={handleDeleteOperation} status={status}/>
                })}
            </ul>
        </div>
    )
}

export default OperationList
