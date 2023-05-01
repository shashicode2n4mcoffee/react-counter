import { useEffect } from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  useEffect(() => {
    console.log('PROPS : ', props)
  }, [props])
  return (
    <div>
      {props.todoList?.map((item) => (
        <Todo todo={item} key={item.id} />
      ))}
    </div>
  )
}

export default TodoList
