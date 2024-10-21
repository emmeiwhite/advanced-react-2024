export default function UserContainer() {
  return (
    <div className="user-container">
      <p>{name ? `Hello: ${name}` : 'Login to Enter the application'}</p>
      <button
        className="btn"
        onClick={name ? logout : login}
      >
        {user.name ? 'logout' : 'login'}
      </button>
    </div>
  )
}
