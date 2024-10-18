const ControlledInputs = () => {
  return (
    <form className="form">
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-input"
        />
      </div>
    </form>
  )
}
export default ControlledInputs
