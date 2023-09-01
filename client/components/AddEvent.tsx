import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { addEventByDay } from '../apis/api'
import type { Event } from '../../models/event'

function AddEvent() {
  const { day } = useParams()
  const [eventsData, setEventsData] = useState({})
  // const locations = []

  useEffect(() => {
    const fetchEventsByDay = async () => {
      if (day) {
        const eventData = await addEventByDay(day)
        setEventsData(eventData)
      }
    }
    fetchEventsByDay()
  }, [day])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <h2>add new event</h2>
      {/* id: newEvent.id, */}
      {/* locationId: number */}
      {/* time: string */}
      {console.log('addEventByDay', eventsData)}
      {/* {console.log('addEventByDay', eventsData.locations)} */}
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="name">Event name</label>
        <input
          id="name"
          type="text"
          placeholder="Event name"
          {...register('name', { required: true })}
        />
        {errors.name && (
          <>
            <div></div>
            <p>This field is required</p>
          </>
        )}
        <label htmlFor="description">Description</label>
        <textarea
          rows={3}
          id="description"
          placeholder="Event description"
          {...register('description', { required: true })}
        ></textarea>
        {errors.description && (
          <>
            <div></div>
            <p>This field is required</p>
          </>
        )}
        <label htmlFor="location">Location</label>
        <select
          id="location"
          {...register('locationId', { required: true })}
        ></select>

        <label htmlFor="day">Day</label>
        {/* <h1>{eventsData.day}</h1> */}
        {/* {eventsData.day && (
          <select id="day" {...register('day', { required: true })}>
            {eventsData.day.map((eventDay: string) => (
              <option key={eventDay} value={eventDay}>
                {eventDay}
              </option>
            ))}
          </select>
        )} */}

        <div></div>
        <button>Add new event</button>
      </form>
    </>
  )
}

export default AddEvent
