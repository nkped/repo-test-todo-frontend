import React from 'react'




const Content = ({ todos, handleCheck, handleDelete }) => {

  return (
    <ul>
        {todos.map((todo) => <li className='todo' key={todo.id}>
            <input
                type='checkbox' 
                checked={todo.checked}
                onChange={() => handleCheck(todo.id)}
                />
            <label>{todo.todo}</label>
            <button 
              type='submit' 
              onClick={() => handleDelete(todo.id)}
              >Del</button>
            </li>)}
    </ul>
  )
}

export default Content