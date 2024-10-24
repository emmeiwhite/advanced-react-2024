import Item from './Person'

import { memo } from 'react'

// React.memo(Component) : returns memoized Component and effectively it means it will not monitor the props, only when props changes it will re-render the component
const List = ({ people, deletePerson }) => {
  return (
    <div>
      {people.map(person => {
        return (
          <Item
            key={person.id}
            {...person}
            deletePerson={deletePerson}
          />
        )
      })}
    </div>
  )
}
export default memo(List)
