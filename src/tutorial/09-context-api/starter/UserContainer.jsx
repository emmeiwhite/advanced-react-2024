import { useContext } from 'react'
import { NavbarContext } from './Navbar'

export default function UserContainer() {
  const value = useContext(NavbarContext)
  console.log(value)

  const { user, login, logout } = value
  const { name } = user

  return (
    <div className="user-container">
      <p>{name ? `Hello: ${name}` : 'Login to Enter the application'}</p>
      <button
        className="btn"
        onClick={name ? logout : login}
      >
        {name ? 'logout' : 'login'}
      </button>
    </div>
  )
}
