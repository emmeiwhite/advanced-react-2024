import UserContainer from './UserContainer'

export default function NavLink({ user, logout, login }) {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer
        user={user}
        logout={logout}
        login={login}
      />
    </div>
  )
}
