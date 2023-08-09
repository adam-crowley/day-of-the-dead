import express from 'express'
const router = express.Router()

import * as db from '../db/db'

// GET /locations
router.get('/', async (req, res) => {
  try {
    const locations = await db.getAllLocations()
    res.json(locations)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
