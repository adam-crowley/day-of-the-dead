import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import type { Event } from '../../models/event'

function AddEvent() {
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
      {/* day: string */}
      {/* time: string */}

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
        <select id="location" {...register('locationId', { required: true })}>
          <option value="1">Trash Panda Domicile</option>
        </select>
        {/* <label for="location">Location</label>
        <select id="location" name="locationId">
          {{#each locations}}
          <option value="{{id}}">{{name}}</option>
          {{/each}}
        </select> */}
        <div></div>
        <button>Add new event</button>
      </form>
    </>
  )
}

export default AddEvent
