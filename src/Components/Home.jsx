import './Home.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

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

  useEffect(() => {
    fetchTodos()
  }, [])

  useEffect(() => console.log('TODOS DATA : ', todos, error), [todos])

  return (
    <div className='home'>
      <h1>Welcome to our crud app</h1>
      <div className='todos-list'>
        {todos.map((todo, index) => {
          return (
            <div className='todo-item'>
              <div className='todo-ids'>
                <h2>ID : {todo.id}</h2>
                <h2 className='todo-userId'>User ID : {todo.userId}</h2>
              </div>
              <h3>Title : {todo.title}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
