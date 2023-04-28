import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [count, setCount] = useState(0)
  const [check, setCheck] = useState(false)

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1)
  }

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1)
  }

  useEffect(() => {
    console.log('Krihna Krishna')
  }, [check])

  console.log('RAM RAM')
  return (
    <div>
      <h1>Counts</h1>
      <p>{count}</p>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export default Dashboard
