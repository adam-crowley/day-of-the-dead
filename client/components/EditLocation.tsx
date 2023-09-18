import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { getLocationById, updateLocation } from '../apis/api'

import type { Location } from '../../models/location'

function EditLocation() {
  const { id } = useParams<string>()
  const [locationData, setLocationData] = useState<Location>()
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  useEffect(() => {
    const fetchLocationById = async () => {
      if (id) {
        const locData = await getLocationById(Number(id))
        setLocationData(locData)
      }
    }
    fetchLocationById()
  }, [id])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Location>()

  const onSubmit: SubmitHandler<Location> = async (data: Location) => {
    await updateLocation(data)
    setIsSubmitted(true)
  }

  return (
    <>
      {isSubmitted ? (
        <div className="success-message">
          <p>Form submitted successfully!</p>
        </div>
      ) : locationData ? (
        <>
          <h2>Edit Location!</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input type="hidden" value={locationData.id} {...register('id')} />

            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              defaultValue={locationData.name}
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
              defaultValue={locationData.description}
              {...register('description', { required: true })}
            ></textarea>
            {errors.description && (
              <>
                <div></div>
                <p>This field is required</p>
              </>
            )}

            <div></div>
            <button type="submit">Update event</button>
          </form>
        </>
      ) : (
        <p>Loading form</p>
      )}
    </>
  )
}

export default EditLocation
