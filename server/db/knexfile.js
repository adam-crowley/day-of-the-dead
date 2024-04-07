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
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    // client: 'sqlite3',
    // useNullAsDefault: true,
    // connection: {
    //   filename: join(__dirname, 'dev.sqlite3'),
    // },
    // pool: {
    //   afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    // },
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: ':memory:',
    },
    migrations: {
      directory: join(__dirname, 'migrations'),
    },
    seeds: {
      directory: join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },

  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: '/dev.sqlite3',
    },
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb),
    },
  },
}
