import { useState } from 'react'
import { data } from '../../../data'

import { v4 as uuidv4 } from 'uuid'

const UserChallenge = () => {
  const [persons, setPersons] = useState(data)
  const [name, setName] = useState('')
  const handleDelete = id => {
    // Delete Functionality, wisely passing down the function and getting back the id when being called in the child component, function is itself like a complex variable in JS and we can call it  anywhere if we have the access to it

    setPersons(persons.filter(person => person.id !== id))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const person = {
      id: uuidv4(),
      name
    }

    setPersons([...persons, person])
  }
  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <h4>Add User</h4>
        <div className="form-row">
          <label
            htmlFor="name"
            className="form-label"
          >
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-block"
        >
          submit
        </button>
      </form>
      {/* render users below */}

      {persons.map(person => (
        <Person
          {...person}
          key={person.id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}

function Person({ id, name, handleDelete }) {
  return (
    <div className="person">
      <h2>{name}</h2>
      <button
        className="btn"
        onClick={() => handleDelete(id)}
      >
        Remove
      </button>
    </div>
  )
}
export default UserChallenge
