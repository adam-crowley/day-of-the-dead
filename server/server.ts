import { join } from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'

import locations from './routes/locations'
import schedule from './routes/schedule'

const server = express()

server.use(express.json())

server.use('/api/v1/locations', locations)
server.use('/api/v1/schedule', schedule)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))

server.use(express.static(join(__dirname, './public')))
server.use(cors('*' as CorsOptions))

export default server
