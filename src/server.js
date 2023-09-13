/* eslint-disable no-console */
import express from 'express'

import { CLOSE_DB, CONNECT_DB } from './config/mongodb.js'
import exitHook from 'async-exit-hook'

const START_SERVER = () => {
  const app = express()

  const port = 8080
  const hostname = 'localhost'

  app.get('/', (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(port, hostname, () => {
    console.log(
      `3. Hello BaoLong Dev 🎉, I'm running at: 🌐http://${hostname}:${port}/ `
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
