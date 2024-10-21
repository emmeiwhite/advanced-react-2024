import { useState } from 'react'
import NavLink from './NavLink'

export default function Navbar() {
  const [user, setUser] = useState({ name: 'Sahil Mushtaq' })

  const logout = () => {
    setUser({ ...user, name: null })
  }

  const login = () => {
    setUser({ name: 'Sahil Mushtaq' })
  }
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLink
        user={user}
        logout={logout}
        login={login}
      />
    </nav>
  )
}
