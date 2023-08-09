import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getEventsByDay } from '../apis/api'

function Day() {
  const { day } = useParams()
  const [events, setEvents] = useState([])

  useEffect(() => {
    const eventsByDay = async (day) => {
      setEvents(await getEventsByDay(day))
    }
    eventsByDay(day)
  }, [day])
  console.log('events', events)
  return (
    <>
      <h2>
        events: <span className="data">{day}</span>
      </h2>
      <a className="nav" href="/events/add/day">
        add event
      </a>
      <ul className="cards">
        {events.map((event) => (
          <li key={event.id} className="card">
            <div className="event">
              <span className="title">{event.eventName}</span>
              <div className="time-location">
                <p>
                  Location: <span className="data">locationName</span>
                </p>
                <p>
                  Time: <span className="data">time</span>
                </p>
              </div>
            </div>
            <p className="event-description data">description</p>
            <a href="/events/{{id}}/edit">edit event</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Day
