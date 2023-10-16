import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
      <h2 className="mb-10 font-serif text-5xl text-dd-yellow italic">
        Locations
      </h2>
      <ul className="flex flex-wrap flex-row gap-[5%] gap-y-10">
        {locations.map((location: Location) => (
          <li
            key={location.id}
            className={`card card--${location.id} flex flex-col justify-between w-[47.5%] p-7 border border-dd-yellow/50 text-dd-yellow`}
          >
            <div>
              <h3 className="mt-28 mb-5 pt-5 text-dd-gold font-serif text-xl">
                {location.name}
              </h3>
              <p className="mb-5">{location.description}</p>
            </div>
            <Link
              to={`/locations/${location.id}/edit`}
              className="block w-full rounded-md border border-dd-yellow/50  hover:border-dd-yellow font-serif text-center text-dd-gold hover:text-dd-yellow px-10 py-2"
            >
              Edit location
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Locations
