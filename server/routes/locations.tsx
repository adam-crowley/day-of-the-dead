import express from 'express'
const router = express.Router()

import * as db from '../db/db'

router.get('/', async (req, res) => {
  try {
    const locations = await db.getAllLocations()
    res.json(locations)
    console.log('locations: ', locations)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error in server' })
  }
})

export default router
