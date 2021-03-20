import React, { useState } from 'react'
import createOperation from "../api/createOperations"
import SingleOperation from './SingleOperation'


function OperationList({setForm,form,id,operations,setOperations,status}) {
    
    // console.log(operations)
    const [oprDescription,setOprDescription] = useState("")
    
    const newOperation = (e) => {
        e.preventDefault()
        console.log("jestem")
        const operationDetails = {
            description:oprDescription,
            // timeSpend: 0
        };

        // console.log(operationDetails)
        createOperation(id,operationDetails, el =>{
            setOperations( prev => {
                // console.log(el)
                // console.log(prev)
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
    console.log(operations)

    const handleDeleteOperation = (id) => {
        setOperations(prev => {
            prev.filter(el => el.id !== id)
        })
    }

    return (
        <>
            {form === true ? 
                <div className=" w-75 container">
                     <form onSubmit={newOperation} className="d-flex">
                        <div className="mb-3" style={{width:"93%"}}>
                            <input onChange={getOperationDescription}
                            value={oprDescription}
                            placeholder="Operation description" type="text" class="form-control"/>
                        </div>
                        <div className="ms-2">
                            <button type="submit" className="btn btn-success">Add
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle ms-2" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
             : null}
                {operations.map( el => {
                    console.log(el)
                    return <SingleOperation key={el.id} {...el} onDeleteOperation={handleDeleteOperation} status={status}/>
                })}
        </>
    )
}

export default OperationList
