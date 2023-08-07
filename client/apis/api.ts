import request from 'superagent'

const url = '/api/v1/locations'

export async function getAllLocations() {
  const res = await request.get(url)
  return res.body
}
