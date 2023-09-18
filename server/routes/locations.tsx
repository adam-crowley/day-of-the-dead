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

// GET /locations/4/edit
router.get('/:id/edit', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const location = await db.getLocationById(id)
    const viewData = location
    res.json(viewData)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

// PUT /locations/edit
router.put('/edit', async (req, res) => {
  try {
    const updatedLocation = req.body
    await db.updateLocation(updatedLocation)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
