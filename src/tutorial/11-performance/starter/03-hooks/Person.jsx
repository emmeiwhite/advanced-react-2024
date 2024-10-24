const Person = ({ name, deletePerson, id }) => {
  console.log('Person is rendered')
  return (
    <div>
      <h4>{name}</h4>
      <button
        className="btn"
        onClick={() => deletePerson(id)}
      >
        remove
      </button>
    </div>
  )
}
export default Person
