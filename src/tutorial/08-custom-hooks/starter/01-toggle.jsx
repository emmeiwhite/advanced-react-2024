import useToggle from './useToggle'

const ToggleExample = () => {
  const { isAlive, toggle } = useToggle(false)
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button
        className="btn"
        onClick={toggle}
      >
        toggle
      </button>
      {isAlive && <Message />}
    </div>
  )
}

function Message() {
  return (
    <article>
      <h2>Life of a Component</h2>
      <p>I live and die based on your button clicks</p>
    </article>
  )
}
export default ToggleExample
