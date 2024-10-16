import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Rawdha Bejaoui',
    age: 26,
    profession: 'boutique'
  })

  function handlePerson() {
    setPerson({
      ...person,
      name: 'Imran & Rawdha',
      age: '32 & 26',
      profession: 'EveDress & EmmeiSoft'
    })
  }
  return (
    <div>
      <h2>Person Details</h2>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>Profession: {person.profession}</h3>

      <button
        className="btn"
        onClick={handlePerson}
      >
        {person.name === 'Imran & Rawdha' ? 'Together Forever' : 'Update Person'}
      </button>
    </div>
  )
}

export default UseStateObject
