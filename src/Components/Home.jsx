import './Home.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoList from './TodoList'
import Input from './Input'

const URL = 'https://jsonplaceholder.typicode.com/todos'

const InitialInputData = {
  title: '',
  userId: '',
  completed: false,
}

const Home = () => {
  const [todos, setTodos] = useState([])
  const [showData, setShowData] = useState([])
  const [error, setError] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [inputData, setInputData] = useState(InitialInputData)

  const fetchTodos = async () => {
    // async await code
    try {
      const response = await axios.get(URL)
      setTodos(response.data)
      setShowData(response.data)
      setError(false)
    } catch (error) {
      setError(true)
      setTodos([])
      setShowData([])
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

  const handleCompletedTodos = () => {
    setShowData(todos.filter((item) => item.completed))
  }

  const handleIncompleteTodos = () => {
    setShowData(todos.filter((item) => !item.completed))
  }

  const handleShowAllTodos = () => {
    setShowData(todos)
  }

  const handleTodosAscendingOrder = () => {
    const tempTodos = todos.slice()
    setShowData(tempTodos.sort((a, b) => a.id - b.id))
  }

  const handleTodosDescendingOrder = () => {
    const tempTodos = todos.slice()
    setShowData(tempTodos.sort((a, b) => b.id - a.id))
  }

  const handleShowInputModel = () => {
    setShowInput(true)
  }

  const handleCloseInputModel = () => {
    setShowInput(false)
  }

  const handleAddTodo = () => {
    setTodos((prevState) => [
      ...prevState,
      { ...inputData, id: todos.length + 1 },
    ])
    setInputData(InitialInputData)
    setShowInput(false)
  }

  const handleCancelTodo = () => {
    setInputData(InitialInputData)
    setShowInput(false)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className='home'>
      <h1>Welcome to our crud app</h1>
      <div>
        <button onClick={handleShowAllTodos}>Show All Todos</button>
        <button onClick={handleCompletedTodos}>Show Completed Todos</button>
        <button onClick={handleIncompleteTodos}>Show Incomplete Todos</button>
        <button onClick={handleTodosAscendingOrder}>
          Ascending Order of Ids
        </button>
        <button onClick={handleTodosDescendingOrder}>
          Descending order of Ids
        </button>
        <button onClick={handleShowInputModel}>Show Input Model</button>
        <button onClick={handleCloseInputModel}>Close the Input Model</button>
      </div>
      {showInput && (
        <Input
          inputData={inputData}
          setInputData={setInputData}
          handleAddTodo={handleAddTodo}
          handleCancelTodo={handleCancelTodo}
        />
      )}
      <div className='todos-list'>
        <TodoList todoList={showData} handleDeleteById={handleDeleteById} />
      </div>
    </div>
  )
}

export default Home
