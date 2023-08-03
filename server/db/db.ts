import connection from './connection'

export function getAllLocations(db = connection) {
  return db('locations').select()
}
