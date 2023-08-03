import express from 'express'
const router = express.Router()

import * as db from '../db/db

export function getAllLocations(db = connection) {
  return db('locations').select()
}