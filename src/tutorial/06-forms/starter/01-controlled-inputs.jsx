import { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    // send the values to the backend
    if ((name, email)) {
      console.log(name, email)
    }

    setEmail('')
    setName('')
  }
  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <h4>Controlled Inputs</h4>

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
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label
          htmlFor="email"
          className="form-label"
        >
          email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <button
        className="btn btn-block"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}
export default ControlledInputs
