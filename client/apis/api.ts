import request from 'superagent'

export async function getAllLocations() {
  const res = await request.get('/api/v1/locations')
  return res.body
}

export async function getEventsByDay() {
  const res = await request.get('/api/v1/schedule')
  return res.body
}
