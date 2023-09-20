import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getEventsByDay } from '../apis/api'
import { EventWithLocation } from '../../models/event'

function Day() {
  const { day } = useParams()
  const [events, setEvents] = useState([])

  useEffect(() => {
    const eventsByDay = async () => {
      if (day) {
        setEvents(await getEventsByDay(day))
      }
    }
    eventsByDay()
  }, [day])

  return (
    <>
      <div className="flex justify-between relative mb-10">
        <h2 className="text-center font-serif text-5xl text-dd-yellow italic">
          Events on <span className="capitalize">{day}</span>
        </h2>
        <Link
          className="self-center rounded-md border border-dd-yellow/50  hover:border-dd-yellow font-serif text-dd-gold hover:text-dd-yellow px-10 py-2"
          to={`/events/add/${day}`}
        >
          Add event
        </Link>
      </div>

      <ul className="flex flex-row gap-5 justify-center cards">
        {events.map((event: EventWithLocation) => (
          <li
            key={event.id}
            className="card w-1/4 border border-dd-yellow/50 text-dd-yellow"
          >
            <div className="event">
              <h3 className="mt-24 pt-5 border-t-4 border-dd-gold text-dd-gold font-serif text-xl">
                {event.eventName}
              </h3>
              <div className="time-location">
                <p>
                  Location: <span className="data">{event.locationName}</span>
                </p>
                <p>
                  Time: <span className="data">{event.time}</span>
                </p>
              </div>
            </div>
            <p className="event-description data">{event.description}</p>
            <Link to={`/events/${event.id}/edit`}>edit event</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Day
