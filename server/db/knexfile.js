const { join } = require('node:path')
require('dotenv').config({ path: '.env.development.local' })

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      ssl: { rejectUnauthorized: false }, // Only include if SSL is required
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: 'ep-muddy-scene-a4fenddf-pooler.us-east-1.aws.neon.tech',
      user: 'default',
      password: 'samKyDqC0Bj1',
      database: 'verceldb',
      ssl: { rejectUnauthorized: true }, // You might need to set this to true in production
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
}
