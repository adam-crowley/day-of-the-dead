import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { motion } from 'framer-motion'

import { getEventById, updateEvent } from '../apis/api'

import type { Event, EventByIdData, EventDay } from '../../models/event'
import type { Location } from '../../models/location'

function EditEvent() {
  const { id } = useParams<string>()
  const [eventsData, setEventsData] = useState<EventByIdData>()
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  useEffect(() => {
    const fetchEventById = async () => {
      if (id) {
        const eventData = await getEventById(Number(id))
        setEventsData(eventData)
      }
    }
    fetchEventById()
  }, [id])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Event>()

  const onSubmit: SubmitHandler<Event> = async (data: Event) => {
    await updateEvent(data)
    setIsSubmitted(true)
  }

  return (
    <>
      {isSubmitted ? (
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.4 }}
          className="success-message opacity-0"
        >
          <img className="success-icon" src="/images/success.svg" alt="" />
          <p>Event updated!</p>
        </motion.div>
      ) : eventsData ? (
        <>
          <h2 className="relative font-serif text-5xl text-dd-yellow italic mb-10">
            <motion.span
              animate={{ width: 0 }}
              transition={{ ease: 'easeInOut', duration: 1 }}
              className="fade-left bg-dd-dark-purple"
            ></motion.span>
            Edit {eventsData.event.name} event
          </h2>
          <motion.form
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.4 }}
            onSubmit={handleSubmit(onSubmit)}
            className="form opacity-0"
          >
            <input
              type="hidden"
              value={eventsData.event.id}
              {...register('id')}
            />

            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              defaultValue={eventsData.event.name}
              {...register('name', { required: true })}
            ></input>
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
              defaultValue={eventsData.event.description}
              {...register('description', { required: true })}
            ></textarea>
            {errors.description && (
              <>
                <div></div>
                <p>This field is required</p>
              </>
            )}

            <label htmlFor="location">Location</label>
            <div className="select-wrapper">
              <select
                id="location"
                defaultValue={eventsData.event.locationId}
                {...register('locationId')}
              >
                {eventsData.locations.map((location: Location) => (
                  <option key={location.name} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>

            <label htmlFor="day">Day</label>
            <div className="select-wrapper">
              <select
                id="day"
                {...register('day')}
                defaultValue={eventsData.event.day}
              >
                {eventsData.days.map((eventDay: EventDay) => (
                  <option key={eventDay.name} value={eventDay.value}>
                    {eventDay.name}
                  </option>
                ))}
              </select>
            </div>

            <label htmlFor="time">Time</label>
            <input
              type="text"
              id="time"
              defaultValue={eventsData.event.time}
              {...register('time', { required: true })}
            />
            {errors.time && (
              <>
                <div></div>
                <p>This field is required</p>
              </>
            )}

            <div></div>
            <button
              type="submit"
              className="btn self-center rounded-md border border-dd-yellow/50 hover:border-dd-yellow font-serif text-dd-gold hover:text-dd-yellow px-10 py-2"
            >
              Update event
            </button>
          </motion.form>
        </>
      ) : (
        <p>Loading form</p>
      )}
    </>
  )
}

export default EditEvent
