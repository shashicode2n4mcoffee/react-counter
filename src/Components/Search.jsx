import { useState, useEffect } from 'react'
const Search = ({ handleSearch }) => {
  const [state, setState] = useState('')

  useEffect(() => {
    console.log('STATE VALUE : ', state)
  }, [state])
  return (
    <div style={{ margin: '1rem' }}>
      <input
        type='text'
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={() => handleSearch(state)}>Search</button>
    </div>
  )
}

export default Search
