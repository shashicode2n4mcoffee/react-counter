import { useEffect } from 'react'
import Todo from './Todo'

const TodoList = ({ todoList, handleDeleteById, handleEdit }) => {
  return (
    <div>
      {todoList?.map((item) => (
        <Todo
          todo={item}
          key={item.id}
          handleDeleteById={handleDeleteById}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  )
}

export default TodoList
