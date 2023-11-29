import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { gsap } from 'gsap'

import { addEventByDay, addEvent } from '../apis/api'

import type { Event, EventsData, EventDay } from '../../models/event'
import type { Location } from '../../models/location'

function AddEvent() {
  const { day } = useParams()
  const [eventsData, setEventsData] = useState<EventsData>()
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const comp = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const fetchEventsByDay = async () => {
      if (day) {
        const eventData = await addEventByDay(day)
        setEventsData(eventData)
      }
    }
    fetchEventsByDay()
  }, [day])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.fade-left', {
        width: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      })
      gsap.to('.form', {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.inOut',
      })
    }, comp)
    return () => ctx.revert() // cleanup
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Event>()

  const onSubmit: SubmitHandler<Event> = async (data: Event) => {
    await addEvent(data)
    setIsSubmitted(true)
  }

  return (
    <>
      <div ref={comp}>
        <h2 className="relative font-serif text-5xl text-dd-yellow italic mb-10">
          <span className="fade-left bg-dd-dark-purple"></span>Add new event for{' '}
          {day}
        </h2>

        {isSubmitted ? (
          <div className="success-message">
            <p>Form submitted successfully!</p>
          </div>
        ) : eventsData ? (
          <form onSubmit={handleSubmit(onSubmit)} className="form opacity-0">
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

            <label htmlFor="description">Event Description</label>
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
              placeholder="Example: 1pm - 2pm"
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
              Add new event
            </button>
          </form>
        ) : (
          <p>Loading new event form</p>
        )}
      </div>
    </>
  )
}

export default AddEvent
