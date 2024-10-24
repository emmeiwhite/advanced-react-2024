import Person from './Person'

const List = ({ people }) => {
  // When the parent component re-renders List also re-renders along with its child components!
  // Too many re-renders are not good for performance if done for no purpose!
  return (
    <div>
      {people.map(person => {
        return (
          <Person
            key={person.id}
            {...person}
          />
        )
      })}
    </div>
  )
}
export default List
