import request from 'superagent'

export async function getAllLocations() {
  const res = await request.get('/api/v1/locations')
  return res.body
}

export async function getEventsByDay(day: string) {
  const res = await request.get(`/api/v1/schedule/${day}`)
  return res.body
}
