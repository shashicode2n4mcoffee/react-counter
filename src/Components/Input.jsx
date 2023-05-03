import { useEffect } from 'react'

const Input = ({
  inputData,
  setInputData,
  handleAddTodo,
  handleCancelTodo,
}) => {
  return (
    <div className='input-wrapper'>
      <div>
        <span>Title</span>
        <input
          type='text'
          placeholder='Enter the title'
          value={inputData?.title}
          onChange={(e) =>
            setInputData((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <span>UserId</span>
        <input
          type='number'
          placeholder='Enter the User Id'
          value={inputData?.userId}
          onChange={(e) =>
            setInputData((prevState) => ({
              ...prevState,
              userId: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <span>IsCompleted</span>
        <input
          type='radio'
          checked={inputData?.completed}
          onChange={(e) =>
            setInputData((prevState) => ({
              ...prevState,
              completed: e.target.value === 'on' ? true : false,
            }))
          }
        />
      </div>
      <div>
        <button onClick={handleAddTodo}>Submit</button>
        <button onClick={handleCancelTodo}>Cancel</button>
      </div>
    </div>
  )
}

export default Input
