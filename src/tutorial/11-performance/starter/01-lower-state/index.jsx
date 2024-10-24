import { useState } from 'react'
import { data } from '../../../../data'
import List from './List'

import Button from './Button'

const LowerState = () => {
  const [people, setPeople] = useState(data)
  // const [count, setCount] = useState(0)

  return (
    <section>
      <Button />

      {/* button re-renders the whole LowerState Component, which inturn renders List Component as well, and whatever is within List as well! */}
      {/* <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button> */}
      <List people={people} />
    </section>
  )
}
export default LowerState
