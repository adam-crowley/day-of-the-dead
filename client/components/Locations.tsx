import { useState, useEffect } from 'react'

import { getAllLocations } from '../apis/api'
import { Location } from '../../models/location'

function Locations() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const allLocations = async () => {
      setLocations(await getAllLocations())
    }
    allLocations()
  }, [])

  return (
    <>
      <h2>locations:</h2>
      <ul className="cards">
        {locations.map((location: Location) => (
          <li key={location.id} className="card">
            <div className="location">
              <span className="title">{location.name}</span>
              <p className="data">{location.description}</p>
              <a href={`/locations/${location.id}/edit`}>edit location</a>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Locations
