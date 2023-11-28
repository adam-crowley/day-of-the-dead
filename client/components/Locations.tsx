import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

import { getAllLocations } from '../apis/api'
import { Location } from '../../models/location'

function Locations() {
  const [locations, setLocations] = useState([])
  const comp = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const allLocations = async () => {
      setLocations(await getAllLocations())
    }
    allLocations()
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.fade-left', {
        width: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      })
      gsap.to('.card', {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.inOut',
      })
    }, comp)
    return () => ctx.revert() // cleanup
  })

  return (
    <>
      <div ref={comp}>
        <h2 className="relative mb-10 font-serif text-5xl text-dd-yellow italic">
          <span className="fade-left bg-dd-dark-purple"></span>
          Locations
        </h2>
        <ul className="flex flex-wrap flex-row gap-[5%] gap-y-10">
          {locations.map((location: Location) => (
            <li
              key={location.id}
              className={`card card--${location.id} flex flex-col justify-between w-[47.5%] p-7 border border-dd-yellow/50 text-dd-yellow opacity-0`}
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
      </div>
    </>
  )
}

export default Locations
