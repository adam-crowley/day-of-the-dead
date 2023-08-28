import connection from './connection'
import type { Event } from '../../models/Event'

export function getAllLocations(db = connection) {
  return db('locations').select()
}

export function getEventsByDay(day: string, db = connection) {
  return db('locations')
    .join('events', 'events.location_id', 'locations.id')
    .where('events.day', day)
    .select(
      'locations.name as locationName',
      'events.id as id',
      'events.name as eventName',
      'events.time as time',
      'events.description as description'
    )
}

export function addEvent(newEvent: Event, db = connection) {
  const eventData = {
    id: newEvent.id,
    name: newEvent.name,
    description: newEvent.description,
    location_id: newEvent.locationId,
    day: newEvent.day,
    time: newEvent.time,
  }
  return db('events').insert(eventData)
}
