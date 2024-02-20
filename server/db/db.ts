import connection from './connection'

import type { Event } from '../../models/event'
import type { Location } from '../../models/location'

export function getAllLocations(db = connection) {
  return db('locations').select()
}

export function getEventsByDay(day: string, db = connection) {
  return db('locations')
    .join('events', 'events.location_id', 'locations.id')
    .where('events.day', day)
    .select(
      'locations.name as locationName',
      'locations.id as locationId',
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

export function deleteEvent(id: number, db = connection) {
  return db('events').where('id', id).del()
}

export function getEventById(id: number, db = connection) {
  return db('events')
    .where('id', id)
    .select(
      'id',
      'location_id as locationId',
      'day',
      'time',
      'name',
      'description'
    )
    .first()
}

export function updateEvent(updatedEvent: Event, db = connection) {
  const eventData = {
    id: updatedEvent.id,
    name: updatedEvent.name,
    description: updatedEvent.description,
    location_id: updatedEvent.locationId,
    day: updatedEvent.day,
    time: updatedEvent.time,
  }
  return db('events').where('id', updatedEvent.id).update(eventData)
}

export function getLocationById(id: number, db = connection) {
  return db('locations').where('id', id).select().first()
}

export function updateLocation(updatedLocation: Location, db = connection) {
  const locationData = {
    id: updatedLocation.id,
    name: updatedLocation.name,
    description: updatedLocation.description,
  }
  return db('locations').where('id', updatedLocation.id).update(locationData)
}
