import React from 'react'

const Content = ({ todos, handleCheck }) => {

      

  return (
    <ul>
        {todos.map((todo) => <li className='todo' key={todo.id}>
            <input
                type='checkbox' 
                checked={todo.checked}
                onChange={() => handleCheck(todo.id)}
                />
            <label>{todo.todo}</label></li>)}
    </ul>
  )
}

export default Content