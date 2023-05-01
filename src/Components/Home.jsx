import './Home.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoList from './TodoList'

const URL = 'https://jsonplaceholder.typicode.com/todos'

const Home = () => {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState(false)

  const fetchTodos = async () => {
    // async await code
    try {
      const response = await axios.get(URL)
      setTodos(response.data)
      setError(false)
    } catch (error) {
      setError(true)
      setTodos([])
    }

    // Promise code
    // axios
    //   .get(URL)
    //   .then((res) => console.log('PROMISE : ', res.data))
    //   .catch((err) => console.log('ERROR ', err))
  }

  const handleDeleteById = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className='home'>
      <h1>Welcome to our crud app</h1>
      <div className='todos-list'>
        <TodoList todoList={todos} />
        {/* {todos.map((todo, index) => {
          return (
            <div className='todo-item'>
              <div className='todo-ids'>
                <h2>ID : {todo.id}</h2>
                <h2 className='todo-userId'>User ID : {todo.userId}</h2>
              </div>
              <div className='todo-desc'>
                <h3>Title : {todo.title}</h3>
                <div>
                  <button onClick={() => handleDeleteById(todo.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )
        })} */}
      </div>
    </div>
  )
}

export default Home
