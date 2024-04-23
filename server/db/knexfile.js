const { join } = require('node:path')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'ep-muddy-scene-a4fenddf-pooler.us-east-1.aws.neon.tech',
      user: 'default',
      password: 'samKyDqC0Bj1',
      database: 'verceldb',
      ssl: {
        rejectUnauthorized: false, // You might need to set this to true in production
      },
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
      ssl: {
        rejectUnauthorized: false, // You might need to set this to true in production
      },
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
