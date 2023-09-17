import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { getEventById, updateEvent } from '../apis/api'

import type { Event, EventByIdData } from '../../models/event'

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
        <div className="success-message">
          <p>Form submitted successfully!</p>
        </div>
      ) : eventsData ? (
        <>
          <h2>Edit the {eventsData.event.name} event</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input type="hidden" name="id" value={eventsData.event.id} />
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              placeholder={eventsData.event.name}
              {...register('name', { required: true })}
            ></input>
            {errors.name && (
              <>
                <div></div>
                <p>This field is required</p>
              </>
            )}
            <button type="submit">Update event</button>
          </form>
        </>
      ) : (
        <p>Loading form</p>
      )}
    </>
  )
}

export default EditEvent
