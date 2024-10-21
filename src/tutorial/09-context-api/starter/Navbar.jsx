import { createContext, useState } from 'react'
import NavLink from './NavLink'

export const NavbarContext = createContext()

export default function Navbar() {
  const [user, setUser] = useState({ name: 'Sahil Mushtaq' })

  const logout = () => {
    setUser({ ...user, name: null })
  }

  const login = () => {
    setUser({ name: 'Sahil Mushtaq' })
  }

  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLink />
      </nav>
    </NavbarContext.Provider>
  )
}
