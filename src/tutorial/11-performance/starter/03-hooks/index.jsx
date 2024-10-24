import { useCallback, useState } from 'react'
import { data } from '../../../../data'
import List from './List'

const LowerState = () => {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0)

  // The deletePerson will now only be re-created only if the people array dependency changes!!
  const deletePerson = useCallback(
    id => {
      setPeople(people.filter(person => person.id !== id))
    },
    [people]
  )

  // If we delete an item, then LowerState component has to re-render, since setPeople() changed, but the issue here is that, even if we update the count, List is re-rendered, Even though List is memoized with React.memo(List). The reason is When setCount() re-renders the component, deletePerson is created on each re-render, and for React, it is a prop change !

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List
        people={people}
        deletePerson={deletePerson}
      />
    </section>
  )
}
export default LowerState
