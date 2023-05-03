const Todo = ({ todo, handleDeleteById, handleEdit }) => {
  return (
    <div className='todo-item'>
      <div className='todo-ids'>
        <h2 className='todo-userId'>User ID : {todo.userId}</h2>
        <div className='edit-wrapper'>
          <h2>ID : {todo.id}</h2>
          <button onClick={() => handleEdit(todo.id)}>Edit</button>
        </div>
      </div>
      <div className='todo-desc'>
        <h3>Title : {todo.title}</h3>
        <div className='todo-desc-actions'>
          <h5>Completed : {todo.completed ? 'Yes' : 'No'}</h5>
          <button onClick={() => handleDeleteById(todo.id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todo
