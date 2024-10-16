import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  function handleClick() {
    // setValue(value + 1)

    setValue(prev => {
      const newState = prev + 1
      console.log(newState)
      return newState
    })
    console.log(value)
  }
  return (
    <div>
      <h2>{value}</h2>
      <button
        className="btn"
        onClick={handleClick}
      >
        increase
      </button>
    </div>
  )
}

export default UseStateGotcha
