import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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
      <h2 className="relative mb-10 font-serif text-4xl md:text-5xl text-dd-yellow italic">
        <motion.span
          animate={{ width: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.4 }}
          className="fade-left bg-dd-dark-purple"
        ></motion.span>
        Locations
      </h2>
      <ul className="flex flex-wrap flex-row gap-[5%] gap-y-10">
        {locations.map((location: Location) => (
          <motion.li
            key={location.id}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.4 }}
            className={`card card--${location.id} flex flex-col justify-between w-full sm:w-[47.5%] p-7 border border-dd-yellow/50 text-dd-yellow opacity-0`}
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
          </motion.li>
        ))}
      </ul>
    </>
  )
}

export default Locations
