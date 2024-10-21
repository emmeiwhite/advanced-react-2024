import UserContainer from './UserContainer'

export default function NavLink({ user, logout, login }) {
  return (
    <div className="">
      <UserContainer
        user={user}
        logout={logout}
        login={login}
      />
    </div>
  )
}
