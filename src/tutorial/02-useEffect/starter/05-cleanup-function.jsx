import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [isMounted, setIsMounted] = useState(false)

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

    // Assume we are subscribing to some third party service! that runs in the background
    const service = setInterval(() => {
      console.log('hello there!')
    }, 1000)

    // Cleanup function
    return () => {
      clearInterval(service)
    }
  }, [])
  // Even when the component was un-mounted, the service was still being played in the background!

  return (
    <div>
      <h3>Life Moves on!</h3>
    </div>
  )
}

export default CleanupFunction
