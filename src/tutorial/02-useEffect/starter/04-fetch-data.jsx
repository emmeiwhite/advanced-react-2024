import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  // UI is the reflection of state, so let's describe the state

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = ''

  if (loading) {
    return <p>loading ...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  const fetchUsers = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return <h2>fetch data example</h2>
}
export default FetchData
