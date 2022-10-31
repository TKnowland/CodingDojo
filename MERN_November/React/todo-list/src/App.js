import './App.css';
import { useState } from 'react';
import Form from './components/form';
import List from './components/list';

function App() {
  const [tasks, setTasks] = useState([{task: "garlic bread"}])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const deleteTask = (idx) => {
    let left = tasks.slice(0, idx);
    let right = tasks.slice(idx + 1)
    setTasks([...left, ...right])
  }

  return (
    <div className="App">
      <Form tasks={tasks} addTask={addTask}/>
      <List tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
