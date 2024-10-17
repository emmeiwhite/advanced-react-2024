import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  // UI is the reflection of state, so let's describe the state

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchUsers = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Could not fetch data')
      }
      const data = await response.json()

      console.log(data)

      setLoading(false)
      setUser(data)
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
      {/* <User {...user} />
       */}

      <div className="">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="img"
        />
        <h2>{user.login}</h2>
        <h3>{user.company}</h3>
        <p>{user.bio}</p>
      </div>
    </section>
  )
}

function User({ id, name, login, company, bio, avatar_url }) {
  return (
    <div className="">
      <img
        src={avatar_url}
        alt={login}
        className="img"
      />
      <h2>{login}</h2>
      <h3>{company}</h3>
      <p>{bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData
