import { data } from '../../../data'

const UseStateArray = () => {
  console.log(data)
  const peopleJSX = data.map(person => (
    <Person
      name={person.name}
      key={person.id}
    />
  ))
  return <div>{peopleJSX}</div>
}

function Person({ name }) {
  return (
    <div>
      <h4>{name}</h4>
    </div>
  )
}
export default UseStateArray
