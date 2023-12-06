import request from 'superagent'

import type { Event } from '../../models/event'
import type { Location } from '../../models/location'

export async function getAllLocations() {
  const res = await request.get('/api/v1/locations')
  return res.body
}

export async function getEventsByDay(day: string) {
  const res = await request.get(`/api/v1/schedule/${day}`)
  return res.body
}

export async function addEvent(event: Event) {
  const res = await request.post(`/api/v1/events/add`).send(event)
  return res.body
}

export async function addEventByDay(day: string) {
  const res = await request.get(`/api/v1/events/add/${day}`)
  return res.body
}

export async function deleteEvent(id: number) {
  const res = await request.del(`/api/v1/events/delete/${id}`)
  return res
}

export async function getEventById(id: number) {
  const res = await request.get(`/api/v1/events/${id}/edit`)
  return res.body
}

export async function updateEvent(event: Event) {
  const res = await request.put(`/api/v1/events/edit`).send(event)
  return res.body
}

export async function getLocationById(id: number) {
  const res = await request.get(`/api/v1/locations/${id}/edit`)
  return res.body
}

export async function updateLocation(location: Location) {
  const res = await request.put(`/api/v1/locations/edit`).send(location)
  return res.body
}
