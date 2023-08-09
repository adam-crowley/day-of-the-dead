import express from 'express'
const router = express.Router()

import * as db from '../db/db'

// GET /schedule/friday
router.get('/:day', async (req, res) => {
  try {
    const day: string = req.params.day
    const events = await db.getEventsByDay(day)
    const viewData = {
      day: day,
      events: events,
    }
    res.json(viewData)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
