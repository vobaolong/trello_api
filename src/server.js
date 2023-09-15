/* eslint-disable no-console */
import express from 'express'
import { env } from './config/environment.js'
import { CLOSE_DB, CONNECT_DB } from './config/mongodb.js'
import exitHook from 'async-exit-hook'

const START_SERVER = () => {
  const app = express()

  app.get('/', (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `3. Hello ${env.AUTHOR} 🎉, I'm running at: 🌐http://${env.APP_HOST}:${env.APP_PORT}/ `
    )
  })

  exitHook(() => {
    CLOSE_DB
    console.log('4. Disconnected from Mongo Cloud Atlas 📛')
  })
}

console.log('1. Connecting to MongoDB Cloud Atlas 🔄️')
CONNECT_DB()
  .then(() => console.log('2. Connected to MongoDB Cloud Atlas ✅'))
  .then(() => START_SERVER())
  .catch((error) => {
    console.error(error)
    process.exit(0)
  })
