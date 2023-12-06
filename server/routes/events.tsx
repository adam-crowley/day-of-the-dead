import express from 'express'
const router = express.Router()

import * as db from '../db/db'

// POST /events/add
router.post('/add', async (req, res) => {
  try {
    const event = req.body
    await db.addEvent(event)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

// GET /events/add/:day
router.get('/add/:day', async (req, res) => {
  try {
    const eventDays = ['friday', 'saturday', 'sunday']
    const day = req.params.day
    const days = eventDays.map((eventDay) => ({
      value: eventDay,
      name: eventDay,
      selected: eventDay === day ? 'selected' : '',
    }))
    const locations = await db.getAllLocations()
    const viewData = { locations, days, day }
    res.json(viewData)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

// DELETE /events/delete
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteEvent(id)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

// GET /events/3/edit
router.get('/:id/edit', async (req, res) => {
  try {
    const eventDays = ['friday', 'saturday', 'sunday']
    const id = Number(req.params.id)
    const event = await db.getEventById(id)
    const locations = await db.getAllLocations()
    locations.map((location) => {
      if (location.id === event.locationId) {
        location.selected = 'selected'
      } else {
        location.selected = ''
      }
    })
    const days = eventDays.map((eventDay) => ({
      value: eventDay,
      name: eventDay,
      selected: eventDay === event.day ? 'selected' : '',
    }))
    const viewData = { event, locations, days }
    res.json(viewData)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

// PUT /events/edit
router.put('/edit', async (req, res) => {
  try {
    const updatedEvent = req.body
    await db.updateEvent(updatedEvent)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
