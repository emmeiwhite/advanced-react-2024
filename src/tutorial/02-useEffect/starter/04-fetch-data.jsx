import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  // UI is the reflection of state, so let's describe the state

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = ''

  const fetchUsers = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Could not fetch data')
      }
      const data = await response.json()

      console.log(data)

      setLoading(false)
      setUsers(data)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <p>loading ...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <section className="container">
      {users.map(user => (
        <User
          {...user}
          key={user.id}
        />
      ))}
    </section>
  )
}

function User({ id, login, avatar_url }) {
  return (
    <div className="user">
      <h3>Github Users</h3>
      <img
        src={avatar_url}
        alt={login}
        className="img"
      />
      <h3>{login}</h3>
    </div>
  )
}
export default FetchData
