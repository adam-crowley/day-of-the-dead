import express from 'express'
const router = express.Router()

import * as db from '../db/db'

// POST /events/add
router.post('/add', async (req, res) => {
  try {
    const event = req.body
    // const day = req.body.day
    await db.addEvent(event)
    // res.redirect(`/schedule/${day}`)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
