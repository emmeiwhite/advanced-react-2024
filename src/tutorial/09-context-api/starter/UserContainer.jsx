export default function UserContainer({ user, logout, login }) {
  const { name } = user
  return (
    <div>
      <h3>{name ? name : 'Login to Enter the application'}</h3>
      <button
        className="btn"
        onClick={name ? logout : login}
      >
        {user.name ? 'logout' : 'login'}
      </button>
    </div>
  )
}
