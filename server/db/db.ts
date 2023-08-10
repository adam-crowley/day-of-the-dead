import connection from './connection'

export async function getAllLocations(db = connection) {
  return await db('locations').select()
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
