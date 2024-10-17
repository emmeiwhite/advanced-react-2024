import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)
  function logout() {
    setUser(null)
  }

  function login() {
    setUser({ name: 'Imran & Rawdha!' })
  }
  return (
    <div>
      <button
        className="btn"
        onClick={user ? logout : login}
      >
        {user ? 'Logout' : 'Login '}
      </button>
      <div>{user ? 'User is Logged in' : 'User is Logged out'}</div>
    </div>
  )
}

export default UserChallenge
