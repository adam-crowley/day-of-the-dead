import request from 'superagent'

import type { Event } from '../../models/event'

export async function getAllLocations() {
  const res = await request.get('/api/v1/locations')
  return res.body
}

export async function getEventsByDay(day: string) {
  const res = await request.get(`/api/v1/schedule/${day}`)
  return res.body
}

export async function addEvent(event: Event) {
  return await request.post(`/api/v1/events/add`).send(event)
}

export async function addEventByDay(day: string) {
  const res = await request.get(`/api/v1/events/add/${day}`)
  return res.body
}
