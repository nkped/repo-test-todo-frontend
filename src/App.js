import { useState } from "react"
import Content from "./Content"
import AddTodo from "./AddTodo"



const App = () => {

  const [ newTodo, setNewTodo ] = useState('')
  
  const [ todos, setTodos ] = useState([
    { id: 1, todo: 'run', checked: false },
    { id: 2, todo: 'jump', checked: false },
    { id: 3, todo: 'walk', checked: false }
  ])

  const setAndSave = (newTodos) => {
    setTodos(newTodos)
    localStorage.setItem('mytodolist', JSON.stringify(newTodos))
  } 


  const handleCheck = (id) => {
    const listItems = todos.map((todo) => id === todo.id ? { ...todo, checked: !todo.checked} : todo )
   setAndSave(listItems)
 }

  const handleAddTodo = (todo) => {
    const id = todos[todos.length - 1].id + 1
    const newTodo = { todo, id, 'checked': false}
    const newTodos = [...todos, newTodo]
    setAndSave(newTodos)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddTodo(newTodo)
    setNewTodo('')
  }


  const handleDelete = (id) => {
    const listItems = todos.filter((todo) => id !== todo.id )
    setAndSave(listItems)
  }

  return (
    <div>
      <h1>List of Todos</h1>
      <main>
        <AddTodo 
          handleSubmit={handleSubmit} 
          newTodo={newTodo} 
          setNewTodo={setNewTodo}
          />
        <Content 
          todos={todos} 
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />        
      </main>
    </div>
  )
}





export default App

