import React, {useState} from 'react'
import './App.css';


function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])
  

  const handleNewTodo = (e) => {
    e.preventDefault()
    if (newTodo.length == 0){
      return
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([... todos, todoItem])
    setNewTodo("")
  }

  const handleTodoDelete = (index) => {
      const filteredTodos = todos.filter((_todo, i) => {
        return i != index
      })

      setTodos(filteredTodos)
  }

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (index == i) {
        todo.complete = !todo.complete
      }
      
      return todo
    })

    setTodos(updatedTodos)
  }

  return (
    <div className="App" style={{textAlign: "center"}}>
      <form onSubmit={(e) =>{handleNewTodo(e)}}>
        <input onChange={(e) => {setNewTodo(e.target.value)}} type="text" value={newTodo}/>
        <div>
          <button>Add</button>
        </div>
      </form>

      {
        todos.map((todo, i) => {
          const todoClasses = []

          if (todo.complete) {
            todoClasses.push("line-through")
          }else {
            todoClasses.pop()
          }

          return (
            <div key={i}>
              <input onChange = {(e) => {handleToggleComplete(i)}} checked={todo.complete} type="checkbox" />
              <span className={todoClasses.join(" ")}>{todo.text}</span>
              <button onClick={(e) => {handleTodoDelete(i)}}>Delete</button>
            </div>
          )
        })}
    </div>
  );
}

export default App;
