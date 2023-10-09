



const AddTodo = ({handleSubmit, newTodo, setNewTodo}) => {
  return (
    <form className="addTodo" onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Add Todo.." 
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
        />
    </form>
  )
}

export default AddTodo