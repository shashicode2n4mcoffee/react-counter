const Todo = ({ todo }) => {
  return (
    <div className='todo-item'>
      <div className='todo-ids'>
        <h2 className='todo-userId'>User ID : {todo.userId}</h2>
        <h2>ID : {todo.id}</h2>
      </div>
      <div className='todo-desc'>
        <h3>Title : {todo.title}</h3>
        <div>
          {/* <button onClick={() => handleDeleteById(todo.id)}>Delete</button> */}
        </div>
      </div>
    </div>
  )
}

export default Todo
