import React, { useReducer } from 'react'
import { data } from '../../../data'

const reducer = () => {}

const defaultState = {
  people: data
}

const ReducerBasics = () => {
  // const [people, setPeople] = React.useState(data)

  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = id => {
    // let newPeople = people.filter(person => person.id !== id)
    // setPeople(newPeople)
  }

  const clearList = () => {
    // setPeople([])
  }

  const resetList = () => {
    // setPeople(data)
  }
  return (
    <div>
      {state.people.map(person => {
        const { id, name } = person
        return (
          <div
            key={id}
            className="item"
          >
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={state.people.length ? clearList : resetList}
      >
        {state.people.length ? 'clear items' : 'reset'}
      </button>
    </div>
  )
}

export default ReducerBasics
