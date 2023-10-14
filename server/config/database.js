//Prepares a pool of connections that can be used for interacting with the PostgreSQL database later in your application. Does not establish a database connection.

import pg from 'pg'

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT
}

export const pool = new pg.Pool(config)