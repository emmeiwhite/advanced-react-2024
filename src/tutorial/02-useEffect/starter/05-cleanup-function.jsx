import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [isMounted, setIsMounted] = useState(true)

  const handleToggle = () => {
    setIsMounted(!isMounted)
  }

  return (
    <section>
      {isMounted && <ToggleComponent />}
      <button
        className="btn"
        onClick={handleToggle}
      >
        Toggle Mount
      </button>
    </section>
  )
}

function ToggleComponent() {
  useEffect(() => {
    console.log('Invoked on the initial render')
  }, [])

  return (
    <div>
      <h3>Life Moves on!</h3>
    </div>
  )
}

export default CleanupFunction
