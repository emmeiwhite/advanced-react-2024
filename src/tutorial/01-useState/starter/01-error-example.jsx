const ErrorExample = () => {
  let count = 0

  function handleCount() {
    count += 1
    console.log(count)
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={handleCount}
        className="btn"
      >
        Click me
      </button>
    </div>
  )
}

export default ErrorExample
