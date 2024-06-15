import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Vortex } from 'react-loader-spinner'

import { getEventById, updateEvent, deleteEvent } from '../apis/api'

import type { Event, EventByIdData, EventDay } from '../../models/event'
import type { Location } from '../../models/location'

function EditEvent() {
  const { id } = useParams<string>()
  const navigate = useNavigate()
  const [eventsData, setEventsData] = useState<EventByIdData>()
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [isDeleted, setIsDeleted] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchEventById = async () => {
      if (id) {
        setIsLoading(true)
        const eventData = await getEventById(Number(id))
        setEventsData(eventData)
        setIsLoading(false)
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
    setTimeout(() => {
      navigate(-1)
    }, 2000)
  }

  const onDelete = async () => {
    await deleteEvent(Number(id))
    setIsDeleted(true)
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
      ) : isSubmitted ? (
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.4 }}
          className="success-message opacity-0"
        >
          <img className="success-icon" src="/images/success.svg" alt="" />
          <p>Event updated!</p>
        </motion.div>
      ) : isDeleted ? (
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.4 }}
          className="success-message opacity-0"
        >
          <img className="success-icon" src="/images/success.svg" alt="" />
          <p>Event deleted!</p>
        </motion.div>
      ) : eventsData ? (
        <>
          <h2 className="relative font-serif text-4xl md:text-5xl text-dd-yellow italic mb-10">
            <motion.span
              animate={{ width: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.4 }}
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
              defaultValue={eventsData.event.time}
              {...register('time', { required: true })}
            />
            {errors.time && (
              <>
                <p>This field is required</p>
              </>
            )}

            <div></div>
            <button
              type="submit"
              className="btn self-center rounded-md border border-dd-yellow/50 hover:border-dd-yellow font-serif text-dd-gold hover:text-dd-yellow px-3 sm:px-10 py-2"
            >
              Update event
            </button>
            <button
              type="button"
              onClick={onDelete}
              className="btn self-center rounded-md border border-dd-yellow/50 hover:border-dd-yellow font-serif text-dd-yellow hover:text-dd-yellow px-4 sm:px-10 py-2 ml-4"
            >
              Delete event
            </button>
          </motion.form>
        </>
      ) : null}
    </>
  )
}

export default EditEvent
