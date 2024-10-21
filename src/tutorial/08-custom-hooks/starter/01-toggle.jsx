import { useState } from 'react'

const ToggleExample = () => {
  // Let's toggle a Message component first with how we do it without custom hook
  const [isAlive, setIsAlive] = useState(true)

  function toggle() {
    setIsAlive(!isAlive)
  }
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button
        className="btn"
        onClick={toggle}
      >
        toggle
      </button>
      {isAlive && <Message />}
    </div>
  )
}

function Message() {
  return (
    <article>
      <h2>Life of a Component</h2>
      <p>I live and die based on your button clicks</p>
    </article>
  )
}
export default ToggleExample
