import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [isMounted, setIsMounted] = useState(false)

  const handleToggle = () => {
    setIsMounted(!isMounted)
  }

  return (
    <section>
      {/* {isMounted && <ToggleComponent />} */}
      {isMounted && <RandomToggle />}
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

    // useEffect assumes that we only return a cleanup fxn, that's why we must not return a promise or set the useEffect callback as async-await (since async-await returns a promise)
  }, [])
  // Even when the component was un-mounted, the service was still being played in the background!

  return (
    <div>
      <h3>Life Moves on!</h3>
    </div>
  )
}

function RandomToggle() {
  useEffect(() => {
    function someFunc() {
      // some logic
    }

    window.addEventListener('scroll', someFunc)

    // Cleanup fxn to remove event handler as soon as the RandomToggle component is unmounted
    return () => {
      window.removeEventListener('scroll', someFunc)
    }
  }, [])

  return <p>Event Handler Example in useEffect</p>
}
export default CleanupFunction
