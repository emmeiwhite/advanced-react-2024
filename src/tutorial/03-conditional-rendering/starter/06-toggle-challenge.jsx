import { useState } from 'react'

const ToggleChallenge = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        Toggle
      </button>

      {isOpen && <p>This modal is open</p>}
    </div>
  )
}

export default ToggleChallenge
