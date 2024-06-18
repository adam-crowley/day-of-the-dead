import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Vortex } from 'react-loader-spinner'

import { getAllLocations } from '../apis/api'
import { Location } from '../../models/location'

function Locations() {
  const [locations, setLocations] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const allLocations = async () => {
        setIsLoading(true)
        setLocations(await getAllLocations())
        setIsLoading(false)
      }
      allLocations()
    } catch (error) {
      console.log(`Error occured when fetching locations: ${error}`)
    }
  }, [])

  return (
    <>
      {isLoading ? (
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          colors={[
            '#DA00FD',
            '#FFC001',
            '#F3EFD3',
            '#DA00FD',
            '#FFC001',
            '#F3EFD3',
          ]}
        />
      ) : (
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
                className={`card card--${location.id} flex flex-col justify-between w-full sm:w-[47.5%] p-5 pl-[6.5rem] sm:p-7 border border-dd-yellow/50 text-dd-yellow opacity-0`}
              >
                <div>
                  <h3 className="sm:mt-28 mb-5 sm:pt-5 text-dd-gold font-serif text-xl">
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
      )}
    </>
  )
}

export default Locations
