import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [list, setList] = useState(data)
  function handleDelete(id) {
    console.log(id)
    setList(list.filter(item => item.id !== id))
  }

  function handleClear() {
    setList([])
  }

  const peopleJSX = list.map(person => (
    <Person
      {...person}
      key={person.id}
      handleDelete={handleDelete}
    />
  ))
  return (
    <div>
      {peopleJSX}
      <button
        className="btn"
        onClick={handleClear}
      >
        Clear All
      </button>
    </div>
  )
}

function Person({ id, name, handleDelete }) {
  return (
    <div>
      <h4 onClick={() => handleDelete(id)}>{name}</h4>
    </div>
  )
}
export default UseStateArray
