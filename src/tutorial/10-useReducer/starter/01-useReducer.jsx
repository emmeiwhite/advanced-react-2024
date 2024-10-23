import React, { useReducer } from 'react'
import { data } from '../../../data'

// This is our Application state
const defaultState = {
  people: data,
  isLoading: false
}
// Whatever we return from reducer is going to be our new application state
const reducer = (state, action) => {
  if (action.type === 'REMOVE_ITEM') {
    // update state accordingly
  }

  if (action.type === 'CLEAR_LIST') {
    // update state accordingly
    console.log('Action is here with type', action.type)
    return state
  }
}

const ReducerBasics = () => {
  // const [people, setPeople] = React.useState(data)

  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = id => {
    // let newPeople = people.filter(person => person.id !== id)
    // setPeople(newPeople)
    dispatch({ type: 'REMOVE_ITEM' })
  }

  const clearList = () => {
    // setPeople([])

    dispatch({ type: 'CLEAR_LIST' })
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
