import { useEffect, useState } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import getTasks from "./api/tasks"
import TaskList from './components/TaskList';


function App() {

  const [task,setTask] = useState([])
  

  useEffect(()=> {
    getTasks(setTask)
  },[task])

  // console.log(task)

  const onDeleteTask = (id) => {
    setTask(prev=> prev.filter(el=> el.id != id))
  }

  const onAddTask = (task => {
    setTask(prev => {
      return [
        task,
        ...prev
      ]
    })
  })
  
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <NewTask onAddTask={onAddTask}/>
        {task.map(el=> {
          // console.log(el)
          return <TaskList key={el.id} {...el} onDeleteTask={onDeleteTask}/>
        })}
    </div>
  );
}

export default App;
