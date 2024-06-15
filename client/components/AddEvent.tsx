import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Vortex } from 'react-loader-spinner'

import { addEventByDay, addEvent } from '../apis/api'

import type { Event, EventsData, EventDay } from '../../models/event'
import type { Location } from '../../models/location'

function AddEvent() {
  const { day } = useParams()
  const navigate = useNavigate()
  const [eventsData, setEventsData] = useState<EventsData>()
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchEventsByDay = async () => {
      if (day) {
        setIsLoading(true)
        const eventData = await addEventByDay(day)
        setEventsData(eventData)
        setIsLoading(false)
      }
    }
    fetchEventsByDay()
  }, [day])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Event>()

  const onSubmit: SubmitHandler<Event> = async (data: Event) => {
    await addEvent(data)
    setIsSubmitted(true)
    setTimeout(() => {
      navigate(-1)
    }, 2000)
  }

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
        <h2 className="relative font-serif text-4xl md:text-5xl text-dd-yellow italic mb-10">
          <motion.span
            animate={{ width: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.4 }}
            className="fade-left bg-dd-dark-purple"
          ></motion.span>
          Add new event for <span className="capitalize">{day}</span>
        </h2>
      )}

      {isSubmitted ? (
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.4 }}
          className="success-message opacity-0"
        >
          <img className="success-icon" src="/images/success.svg" alt="" />
          <p>Event added!</p>
        </motion.div>
      ) : eventsData ? (
        <motion.form
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.4 }}
          onSubmit={handleSubmit(onSubmit)}
          className="form opacity-0"
        >
          <label htmlFor="name">Event name</label>
          <input
            id="name"
            type="text"
            placeholder="Event name"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <>
              <p className="error-message">This field is required</p>
            </>
          )}

          <label htmlFor="description">Event Description</label>
          <textarea
            rows={3}
            id="description"
            placeholder="Event description"
            {...register('description', { required: true })}
          ></textarea>
          {errors.description && (
            <>
              <p className="error-message">This field is required</p>
            </>
          )}

          <label htmlFor="location">Location</label>
          <div className="select-wrapper">
            <select id="location" {...register('locationId')}>
              {eventsData.locations.map((location: Location) => (
                <option key={location.name} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="day">Day</label>
          <div className="select-wrapper">
            <select id="day" {...register('day')} defaultValue={day}>
              {eventsData.days.map((eventDay: EventDay) => (
                <option
                  key={eventDay.name}
                  value={eventDay.value}
                  className="capitalize"
                >
                  {eventDay.name.charAt(0).toUpperCase() +
                    eventDay.name.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="time">Time</label>
          <input
            type="text"
            id="time"
            placeholder="Example: 1pm - 2pm"
            {...register('time', { required: true })}
          />
          {errors.time && (
            <>
              <p className="error-message">This field is required</p>
            </>
          )}

          <button
            type="submit"
            className="btn self-center rounded-md border border-dd-yellow/50 hover:border-dd-yellow font-serif text-dd-gold hover:text-dd-yellow px-10 py-2"
          >
            Add new event
          </button>
        </motion.form>
      ) : null}
    </>
  )
}

export default AddEvent
