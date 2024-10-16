import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  function handleClick() {
    // setValue(value + 1)

    setTimeout(() => {
      setValue(currentState => {
        const newState = currentState + 1
        console.log(newState)
        return newState
      })
    }, 3000)

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
