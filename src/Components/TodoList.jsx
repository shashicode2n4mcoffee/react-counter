import { useEffect } from 'react'
import Todo from './Todo'

const TodoList = ({ todoList, handleDeleteById }) => {
  return (
    <div>
      {todoList?.map((item) => (
        <Todo todo={item} key={item.id} handleDeleteById={handleDeleteById} />
      ))}
    </div>
  )
}

export default TodoList
