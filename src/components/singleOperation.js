import React, { useState } from 'react'
import updateOperation from "../api/updateOperation"
import deleteOperation from "../api/deleteOperation"
import "../css/singleOperation.css"

function SingleOperation({id,description,timeSpent,status,onDeleteOperation}) {
    const [time,setTime] = useState(timeSpent)
    const [timeInput, setTimeInput] = useState("")
    const [timeFlag, setTimeFlag] = useState(false)
    // console.log(id)
    // console.log(time)
    console.log(timeInput)

    const changeFlag = () => {
        setTimeFlag(!timeFlag)
    }

    const getTime = (e) => {
        setTimeInput(e.target.value)
    }

    const saveTime =(e) => {
        e.preventDefault();
        const operation = {
            description,
            timeSpent: parseInt(time) + parseInt(timeInput)
        };

        updateOperation(id,operation,el =>{
            // console.log(el)
            setTime(el.timeSpent)
            setTimeFlag(false)
            setTimeInput("")
        })

    }

    const handleDeleteOperation = () => {
        deleteOperation(id, () => {
            onDeleteOperation(id)
        })
    }


    const timeHours = Math.floor(time/60)
    const timeMinutes = time % 60

    return (
        <ul className="container w-75">
            <li>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <h5>{description}</h5>
                        {time !== 0 ? <span 
                        style={
                            {
                                backgroundColor:"seagreen",
                                borderRadius: "15px"
                            }
                            } className="ms-3 p-1">{timeHours}h {timeMinutes}m</span> : null}
                    </div>
                    {timeFlag === false ?
                    <div>
                        {status === "open" ? 
                            <button className="btn btn-outline-success" onClick={changeFlag}>Add time
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock ms-2" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                </svg>
                            </button> : null
                    }
                        <button onClick={handleDeleteOperation} className="m-3 btn btn-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                    </div> : null
                    }
                    {timeFlag === true ? 
                        <div>
                            <form onSubmit={saveTime} className="d-flex">
                                <div>
                                    <input onChange ={getTime}
                                    placeholder="time in minutes" type="number" value={timeInput} class="form-control"/>
                                </div>
                                    <button type="submit" class="btn btn-outline-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save2" viewBox="0 0 16 16">
                                            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                                        </svg>
                                    </button>
                                    <button onClick={changeFlag} class="btn btn-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                            </form>
                        </div>
                        : null
                    }
                </div>
            </li>
        </ul>
    )
}

export default SingleOperation
