import { useEffect, useRef, useState } from 'react'

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null)
  // useRef helps us directly get access to the DOM, and it may have useCases (but not necessarily)

  console.log(refContainer)

  const handleSubmit = e => {
    e.preventDefault()
    // useRef - For uncontrolled input
    console.log(refContainer.current.value)
  }

  useEffect(() => {
    console.log(refContainer)
  })

  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <label
            htmlFor="name"
            className="form-label"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={refContainer}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
        >
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button
        onClick={() => setValue(value + 1)}
        className="btn"
      >
        increase
      </button>
    </div>
  )
}

export default UseRefBasics
