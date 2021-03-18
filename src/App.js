import { useEffect, useState } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import getTasks from "./api/tasks"
import TaskList from './components/TaskList';


function App() {

  const [task,setTask] = useState([])

  useEffect(()=> {
    getTasks(setTask)
    // console.log(task)
  },[])

  
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <NewTask task={task}/>
       {task.map(el=>{
         return <TaskList {...task} key={task.id}/>
      })}
    </div>
  );
}

export default App;
