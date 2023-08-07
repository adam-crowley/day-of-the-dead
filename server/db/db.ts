import connection from './connection'

export async function getAllLocations(db = connection) {
  return await db('locations').select()
}
