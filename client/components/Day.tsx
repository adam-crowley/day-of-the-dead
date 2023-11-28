import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gsap } from 'gsap'

import { getEventsByDay } from '../apis/api'
import { EventWithLocation } from '../../models/event'
import { log } from 'console'

function Day() {
  const { day } = useParams()
  const [events, setEvents] = useState([])
  const comp = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const eventsByDay = async () => {
      if (day) {
        setEvents(await getEventsByDay(day))
      }
    }
    eventsByDay()
  }, [day])

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
      gsap.to('.btn', {
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
        <div className="flex justify-between relative mb-10">
          <h2 className="relative text-center font-serif text-5xl text-dd-yellow italic">
            <span className="fade-left bg-dd-dark-purple"></span>
            Events on <span className="capitalize">{day}</span>
          </h2>
          <Link
            className="btn self-center rounded-md border border-dd-yellow/50 hover:border-dd-yellow font-serif text-dd-gold hover:text-dd-yellow px-10 py-2 opacity-0"
            to={`/events/add/${day}`}
          >
            Add event
          </Link>
        </div>

        <ul className="flex flex-wrap flex-row gap-[5%] gap-y-10">
          {events.map((event: EventWithLocation) => (
            <li
              key={event.id}
              className={`card card--${event.locationId} flex flex-col justify-between w-[30%] p-7 border border-dd-yellow/50 text-dd-yellow opacity-0`}
            >
              <div>
                <h3 className="mt-28 mb-5 pt-5 text-dd-gold font-serif text-xl">
                  {event.eventName}
                </h3>
                <div className="mb-5">
                  <p className="">
                    Location:{' '}
                    <span className="text-dd-gold">{event.locationName}</span>
                  </p>
                  <p>
                    Time: <span className="text-dd-gold">{event.time}</span>
                  </p>
                </div>
                <p className="mb-5">{event.description}</p>
              </div>

              <Link
                to={`/events/${event.id}/edit`}
                className="block w-full rounded-md border border-dd-yellow/50  hover:border-dd-yellow font-serif text-center text-dd-gold hover:text-dd-yellow px-10 py-2"
              >
                Edit event
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Day
