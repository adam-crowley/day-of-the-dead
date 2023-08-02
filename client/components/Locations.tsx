function Locations() {
  return (
    <>
      <h2>locations:</h2>

      <ul className="cards">
        <li className="card">
          <div className="location">
            <span className="title">name</span>
            <p className="data">description</p>
            <a href="/locations/{{id}}/edit">edit location</a>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Locations
