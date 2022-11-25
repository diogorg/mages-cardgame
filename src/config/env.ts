import * as dotenv from 'dotenv'
dotenv.config()

export const env = {
  pg: {
    port: process.env.PG_PORT ?? '',
    host: process.env.PG_HOST ?? '',
    user: process.env.PG_USER ?? '',
    db: process.env.PG_DB ?? '',
    password: process.env.PG_PASSWORD ?? ''
  }
}
