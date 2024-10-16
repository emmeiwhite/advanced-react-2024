import { useState } from 'react'

const ErrorExample = () => {
  let count = 0 // Normal value
  const stateArray = useState(0) // State value
  console.log('state count ', stateArray[0])

  function handleCount() {
    count += 1
    console.log(count)
    // only updating within the function, there is no  component level re-render - principle on which React works!
  }

  function handleCountWithState() {
    stateArray[1](count => count + 1)
  }

  return (
    <div>
      {/* <h2>Count: {count}</h2> */}
      <h2>Count: {stateArray[0]}</h2>
      <button
        onClick={handleCount}
        className="btn"
      >
        Click me
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={handleCountWithState}
        className="btn"
      >
        update state
      </button>
    </div>
  )
}

export default ErrorExample
