import { useState } from 'react'

function useToggle(defaultValue) {
  // Let's toggle a Message component first with how we do it without custom hook
  const [isAlive, setIsAlive] = useState(defaultValue)

  function toggle() {
    setIsAlive(!isAlive)
  }

  // let's return an object in this case
  return { isAlive, toggle }
}

export default useToggle
